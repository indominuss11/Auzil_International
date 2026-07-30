import type { ReactNode } from "react";
import { Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="bg-sage py-16 text-ivory sm:py-20">
      <Container className="text-center">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Ready to Discuss Your Manufacturing Requirement?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-100">
          Share your product brief and our team will confirm the manufacturing
          approach, timeline and next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButtonLight href="/request-a-quote">
            Request a Quote
          </PrimaryButtonLight>
          <SecondaryButtonLight href="/contact">Contact Us</SecondaryButtonLight>
        </div>
      </Container>
    </section>
  );
}

function PrimaryButtonLight({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 text-sm font-medium text-sage transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
    >
      {children}
    </a>
  );
}

function SecondaryButtonLight({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-ivory/60 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ivory hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
    >
      {children}
    </a>
  );
}
