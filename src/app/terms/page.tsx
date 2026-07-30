import type { Metadata } from "next";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Terms of Use — Auzil International";
const description = "Terms governing the use of the Auzil International website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/terms" />
      <Breadcrumbs items={[{ name: "Terms", path: "/terms" }]} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-ink-900">Terms of Use</h1>
          <p className="mt-4 text-sm text-stone-500">
            Last updated: [DATE — CONFIRM BEFORE LAUNCH]
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone-700">
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                1. Use of This Website
              </h2>
              <p className="mt-2">
                This website is provided by {company.legalName} to share
                information about our personal care and pet care manufacturing
                services and to receive enquiries from prospective buyers.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                2. No Binding Offer
              </h2>
              <p className="mt-2">
                Information on this website, including product categories and
                service descriptions, does not constitute a binding offer.
                Pricing, minimum order quantities, production capacity and
                timelines are confirmed directly with buyers on a per-enquiry
                basis.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                3. Intellectual Property
              </h2>
              <p className="mt-2">
                Content on this website, including text and imagery, belongs to
                {" "}{company.legalName} unless otherwise stated, and may not be
                reproduced without permission.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                4. Limitation of Liability
              </h2>
              <p className="mt-2">
                [LIABILITY TERMS — CONFIRM WITH LEGAL COUNSEL BEFORE LAUNCH]
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                5. Governing Law
              </h2>
              <p className="mt-2">
                These terms are governed by the laws of India.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
