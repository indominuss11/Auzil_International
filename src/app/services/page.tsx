import type { Metadata } from "next";
import * as Icons from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Manufacturing Services — Private Label, Contract & Custom Development";
const description =
  "Private label, white label, contract manufacturing, custom product development, formula selection, fragrance customisation, packaging support and export enquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/services" />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Manufacturing Services
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
            Services That Take a Product From Idea to Dispatch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Whether you need a ready formulation put under your own brand or a
            fully custom product developed from a brief, our services are
            structured to support personal care and pet care buyers at every
            stage.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ??
                Icons.Factory;
              const isPrivateLabel = service.slug === "private-label-manufacturing";
              return (
                <div
                  key={service.slug}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-sage" />
                  <h2 className="mt-4 font-serif text-lg font-semibold text-ink-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                  {isPrivateLabel && (
                    <Link
                      href="/private-label-manufacturing"
                      className="mt-4 text-sm font-medium text-sage underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                    >
                      Learn more about private label manufacturing
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-stone-100 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="International Enquiries"
            title="Export Enquiries"
            description="We work with international buyers on personal care and pet care manufacturing enquiries. Specific export markets, documentation and shipping arrangements are confirmed per enquiry, based on your destination country's requirements."
          />
        </Container>
      </section>

      <QuoteCTASection
        title="Tell Us Which Service Fits Your Requirement"
        description="Not sure which manufacturing service is right for your product? Send us your brief and we will recommend an approach."
      />
    </>
  );
}
