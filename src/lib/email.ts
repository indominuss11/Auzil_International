import { Resend } from "resend";
import { company } from "@/data/company";
import type { QuoteFormValues, ContactFormValues } from "./validation";

// All values are inserted as plain text / escaped HTML — never render
// user-provided HTML directly.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderRow(label: string, value: string): string {
  return `<tr><td style="padding:4px 8px;font-weight:600;">${escapeHtml(label)}</td><td style="padding:4px 8px;">${escapeHtml(value)}</td></tr>`;
}

export async function sendQuoteEnquiryEmail(
  data: Omit<QuoteFormValues, "website" | "turnstileToken">,
): Promise<{ sent: boolean; devFallback: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  const html = `
    <h2>New quote request — Auzil International</h2>
    <table cellspacing="0" cellpadding="0">
      ${renderRow("Name", data.name)}
      ${renderRow("Company", data.company)}
      ${renderRow("Work email", data.email)}
      ${renderRow("Phone / WhatsApp", data.phone)}
      ${renderRow("Country", data.country)}
      ${renderRow("Product category", data.productCategory)}
      ${renderRow("Products required", data.productsRequired)}
      ${renderRow("Estimated quantity", data.estimatedQuantity)}
      ${renderRow("Manufacturing type", data.manufacturingType)}
      ${renderRow("Packaging requirement", data.packagingRequirement)}
      ${renderRow("Target launch date", data.targetLaunchDate || "Not specified")}
      ${renderRow("Message", data.message || "—")}
    </table>
  `.trim();

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV === "production") {
      // Fail safe in production: do not silently pretend to succeed.
      return { sent: false, devFallback: false };
    }
    console.warn(
      "[dev-fallback] Resend credentials not configured — logging enquiry instead of sending email.",
    );
    console.info(`New quote enquiry (dev fallback) for ${company.legalName}:\n${html}`);
    return { sent: true, devFallback: true };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New quote request from ${data.company}`,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { sent: false, devFallback: false };
    }

    return { sent: true, devFallback: false };
  } catch (error) {
    console.error("Failed to send quote enquiry email:", error);
    return { sent: false, devFallback: false };
  }
}

export async function sendContactEnquiryEmail(
  data: Omit<ContactFormValues, "website" | "turnstileToken">,
): Promise<{ sent: boolean; devFallback: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  const html = `
    <h2>New contact message — Auzil International</h2>
    <table cellspacing="0" cellpadding="0">
      ${renderRow("Name", data.name)}
      ${renderRow("Email", data.email)}
      ${renderRow("Company", data.company || "—")}
      ${renderRow("Message", data.message)}
    </table>
  `.trim();

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV === "production") {
      return { sent: false, devFallback: false };
    }
    console.warn(
      "[dev-fallback] Resend credentials not configured — logging contact message instead of sending email.",
    );
    console.info(`New contact message (dev fallback) for ${company.legalName}:\n${html}`);
    return { sent: true, devFallback: true };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New contact message from ${data.name}`,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { sent: false, devFallback: false };
    }

    return { sent: true, devFallback: false };
  } catch (error) {
    console.error("Failed to send contact message email:", error);
    return { sent: false, devFallback: false };
  }
}
