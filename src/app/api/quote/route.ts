import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendQuoteEnquiryEmail } from "@/lib/email";

export const runtime = "nodejs";

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  const { allowed } = checkRateLimit(`quote:${ip}`);
  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = quoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields and try again.",
        fieldErrors: parsed.data ? undefined : parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot check: real users never populate this hidden field.
  if (parsed.data.website) {
    // Return a generic success-shaped response so bots don't learn the
    // honeypot was detected, without actually sending an email.
    return NextResponse.json({ success: true });
  }

  const turnstileResult = await verifyTurnstileToken(parsed.data.turnstileToken, ip);
  if (!turnstileResult.success) {
    return NextResponse.json(
      { success: false, message: "We could not verify your submission. Please try again." },
      { status: 400 },
    );
  }

  const { turnstileToken, website, ...enquiry } = parsed.data;
  void turnstileToken;
  void website;

  const emailResult = await sendQuoteEnquiryEmail(enquiry);
  if (!emailResult.sent) {
    return NextResponse.json(
      {
        success: false,
        message: "We could not send your enquiry right now. Please try again shortly or contact us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, devFallback: emailResult.devFallback });
}
