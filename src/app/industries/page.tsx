import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, QuoteCTASection } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Industries We Serve — Personal Care & Pet Care Manufacturing";
const description =
  "Auzil International manufactures for personal care brands, pet care brands, hotels, salons, retailers, distributors, exporters and institutional buyers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: { title, description, url: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/industries" />
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Who We Work With
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            From new brand founders to established consumer-product companies,
            our manufacturing services are built to support a wide range of
            personal care and pet care buyers.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h2 className="font-serif text-lg font-semibold text-ink-900">
                  {industry.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <QuoteCTASection
        title="Don't See Your Industry Listed?"
        description="If your business doesn't fit neatly into the categories above, get in touch — we welcome enquiries from a wide range of buyers."
      />
    </>
  );
}
