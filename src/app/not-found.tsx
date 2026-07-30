import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-16">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">404</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-ink-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          The page you are looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          Return to Homepage
        </Link>
      </Container>
    </section>
  );
}
