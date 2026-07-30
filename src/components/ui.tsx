import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-stone-600">{description}</p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
    >
      {children}
    </Link>
  );
}

export function QuoteCTASection({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-sage py-16 text-center text-ivory sm:py-20">
      <Container>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-100">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 text-sm font-medium text-sage transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-ivory/60 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ivory hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
