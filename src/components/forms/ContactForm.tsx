"use client";

import { useState, type FormEvent } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Thank you — your message has been received.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-sage bg-sage/5 p-6 text-ink-900"
      >
        <p className="font-medium">{statusMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="c-name" className="text-sm font-medium text-ink-900">
          Full name *
        </label>
        <input
          id="c-name"
          name="name"
          required
          maxLength={100}
          className="mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-medium text-ink-900">
          Email *
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
      </div>
      <div>
        <label htmlFor="c-company" className="text-sm font-medium text-ink-900">
          Company
        </label>
        <input
          id="c-company"
          name="company"
          maxLength={150}
          className="mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
      </div>
      <div>
        <label htmlFor="c-message" className="text-sm font-medium text-ink-900">
          Message *
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="c-website">Leave this field empty</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="c-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-stone-400 text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
        <label htmlFor="c-consent" className="text-sm text-stone-700">
          I agree to be contacted by Auzil International about this message. *
        </label>
      </div>

      <TurnstileWidget onToken={setTurnstileToken} />

      <div
        role="status"
        aria-live="polite"
        className={status === "error" ? "text-sm text-red-700" : "sr-only"}
      >
        {status === "error" ? statusMessage : ""}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-sage-700 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
