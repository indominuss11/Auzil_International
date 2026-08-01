import type { ReactNode } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PrimaryButton } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Manufacturing &amp; Trading — Delhi, India
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Manufacturing, Backed by Decades of
            Experience
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Auzil International helps businesses develop and manufacture personal
            care, hygiene and pet grooming products, from formulation and
            sampling to packaging and production.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/request-a-quote">Request a Quote</PrimaryButton>
            <SecondaryButtonLight href="/manufacturing">
              Explore Our Capabilities
            </SecondaryButtonLight>
          </div>
          <p className="mt-8 text-sm font-medium tracking-wide text-stone-600">
            Private Label <span className="mx-2 text-clay">•</span> Contract
            Manufacturing <span className="mx-2 text-clay">•</span> Custom
            Product Development
          </p>
        </div>
        <div className="relative">
          <PlaceholderImage
            src="/images/hero-manufacturing.png"
            alt="Manufacturing floor at Auzil International, where personal care and pet care products are produced"
            width={1600}
            height={1000}
            priority
            sizes="(min-width: 1024px) 640px, 100vw"
            className="w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

function SecondaryButtonLight({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
    >
      {children}
    </a>
  );
}
