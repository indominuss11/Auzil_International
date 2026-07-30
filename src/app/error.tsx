"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for now; wire up to a monitoring service as needed.
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center py-16">
      <Container className="max-w-xl text-center">
        <h1 className="font-serif text-3xl font-semibold text-ink-900">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          We&apos;re sorry — an unexpected error occurred. Please try again, or
          contact us directly if the problem continues.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          Try Again
        </button>
      </Container>
    </section>
  );
}
