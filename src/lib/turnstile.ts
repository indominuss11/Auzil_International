// Server-side verification of a Cloudflare Turnstile token. This must run
// on the server — never trust the widget's client-side "success" state.

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<{ success: boolean; devFallback: boolean }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      // Fail safe: never allow unverified submissions in production.
      return { success: false, devFallback: false };
    }
    // Development fallback so the form remains testable without live
    // Turnstile credentials configured locally.
    console.warn(
      "[dev-fallback] TURNSTILE_SECRET_KEY not set — skipping live verification.",
    );
    return { success: true, devFallback: true };
  }

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });

    if (!res.ok) return { success: false, devFallback: false };

    const data = (await res.json()) as TurnstileVerifyResponse;
    return { success: data.success === true, devFallback: false };
  } catch {
    return { success: false, devFallback: false };
  }
}
