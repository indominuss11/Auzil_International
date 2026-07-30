"use client";

import { useState, type FormEvent } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

const PRODUCT_CATEGORY_OPTIONS = [
  { value: "personal-care", label: "Personal Care" },
  { value: "hygiene-sanitisers", label: "Hygiene & Sanitisers" },
  { value: "pet-care", label: "Pet Care" },
  { value: "custom-manufacturing", label: "Custom Manufacturing" },
];

const MANUFACTURING_TYPE_OPTIONS = [
  { value: "private-label", label: "Private Label" },
  { value: "white-label", label: "White Label" },
  { value: "contract-manufacturing", label: "Contract Manufacturing" },
  { value: "custom-development", label: "Custom Product Development" },
  { value: "not-sure", label: "Not sure yet" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
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
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      country: String(formData.get("country") ?? ""),
      productCategory: String(formData.get("productCategory") ?? ""),
      productsRequired: String(formData.get("productsRequired") ?? ""),
      estimatedQuantity: String(formData.get("estimatedQuantity") ?? ""),
      manufacturingType: String(formData.get("manufacturingType") ?? ""),
      packagingRequirement: String(formData.get("packagingRequirement") ?? ""),
      targetLaunchDate: String(formData.get("targetLaunchDate") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          "Thank you — your enquiry has been received. Our team will respond shortly.",
        );
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ?? "Something went wrong. Please try again.",
        );
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
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Phone or WhatsApp" name="phone" required autoComplete="tel" />
        <Field label="Country" name="country" required autoComplete="country-name" />
        <SelectField
          label="Product category"
          name="productCategory"
          required
          options={PRODUCT_CATEGORY_OPTIONS}
        />
      </div>

      <Field
        label="Products required"
        name="productsRequired"
        as="textarea"
        required
        helpText="List the products you are interested in manufacturing."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Estimated order quantity"
          name="estimatedQuantity"
          required
          helpText="An approximate figure is fine at this stage."
        />
        <SelectField
          label="Manufacturing type"
          name="manufacturingType"
          required
          options={MANUFACTURING_TYPE_OPTIONS}
        />
      </div>

      <Field
        label="Packaging requirement"
        name="packagingRequirement"
        as="textarea"
        required
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Target launch date"
          name="targetLaunchDate"
          type="text"
          helpText="Optional — e.g. Q3 2026."
        />
      </div>

      <Field label="Additional message" name="message" as="textarea" />

      {/* Honeypot field — hidden from sighted and keyboard users, but
          present in the DOM for bots that auto-fill every input. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-stone-400 text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        />
        <label htmlFor="consent" className="text-sm text-stone-700">
          I agree to be contacted by Auzil International about this enquiry. *
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
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  autoComplete,
  helpText,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  autoComplete?: string;
  helpText?: string;
}) {
  const helpId = helpText ? `${name}-help` : undefined;
  const sharedClassName =
    "mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage";

  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-900">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={3}
          aria-describedby={helpId}
          className={sharedClassName}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          maxLength={500}
          aria-describedby={helpId}
          className={sharedClassName}
        />
      )}
      {helpText && (
        <p id={helpId} className="mt-1 text-xs text-stone-500">
          {helpText}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-900">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-1 w-full rounded-2xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
