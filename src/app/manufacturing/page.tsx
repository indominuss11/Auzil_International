import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

const title = "Manufacturing Capabilities — Personal Care & Pet Care";
const description =
  "Formulation, private-label production, contract manufacturing, fragrance customisation, packaging, filling, labelling and quality checks for personal care and pet care products.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/manufacturing" },
  openGraph: { title, description, url: "/manufacturing" },
};

const capabilities = [
  {
    title: "Formulation & product development",
    items: [
      "Selection from existing, tested formulations",
      "Custom formulation for a specific brief or claim",
      "Texture, performance and appearance adjustments",
    ],
  },
  {
    title: "Production",
    items: [
      "Private-label production",
      "Contract manufacturing",
      "Batch production to confirmed volumes",
    ],
  },
  {
    title: "Fragrance & finishing",
    items: [
      "Fragrance selection from available options",
      "Fragrance customisation for a specific brand direction",
    ],
  },
  {
    title: "Packaging, filling & labelling",
    items: [
      "Packaging format coordination",
      "Filling and labelling",
      "Secondary packaging and cartoning",
    ],
  },
];

const processSteps = [
  "Requirement",
  "Product Selection",
  "Sampling",
  "Approval",
  "Manufacturing",
  "Quality Checks",
  "Packaging",
  "Dispatch",
];

const galleryImages = [
  { src: "/images/manufacturing-floor.svg", alt: "Manufacturing floor" },
  { src: "/images/mixing-equipment.svg", alt: "Mixing equipment used during formulation" },
  { src: "/images/filling-line.svg", alt: "Filling line" },
  { src: "/images/packaging-line.svg", alt: "Packaging line" },
];

export default function ManufacturingPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/manufacturing" />
      <Breadcrumbs items={[{ name: "Manufacturing", path: "/manufacturing" }]} />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Manufacturing Capabilities
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
            From Formulation to Dispatch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Auzil International manufactures personal care and pet care
            products for brands, retailers and institutional buyers, covering
            formulation, private-label and contract production, fragrance
            customisation, packaging, filling, labelling and quality checks.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What We Offer" title="Manufacturing Capabilities" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map((group) => (
              <div key={group.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-ink-900">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {!company.manufacturing.productionCapacityStatement.startsWith("[") ||
      !company.manufacturing.defaultMoqStatement.startsWith("[") ? (
        <section className="bg-stone-100 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Production Details"
              title="Capacity & Order Quantities"
            />
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {!company.manufacturing.productionCapacityStatement.startsWith("[") && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Production capacity
                  </dt>
                  <dd className="mt-2 text-sm text-stone-600">
                    {company.manufacturing.productionCapacityStatement}
                  </dd>
                </div>
              )}
              {!company.manufacturing.defaultMoqStatement.startsWith("[") && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Minimum order quantity
                  </dt>
                  <dd className="mt-2 text-sm text-stone-600">
                    {company.manufacturing.defaultMoqStatement}
                  </dd>
                </div>
              )}
            </dl>
          </Container>
        </section>
      ) : (
        <section className="bg-stone-100 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Production Details"
              title="Capacity & Order Quantities"
              description="Production capacity and minimum order quantities vary by formulation and packaging format, and are confirmed once your product brief has been reviewed."
            />
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Process" title="Requirement to Dispatch" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step} className="border-l-2 border-clay pl-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-clay">
                  Step {index + 1}
                </span>
                <p className="mt-1 font-serif text-lg font-semibold text-ink-900">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-stone-100 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Inside The Facility" title="Manufacturing Gallery" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryImages.map((image) => (
              <PlaceholderImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                sizes="(min-width: 640px) 25vw, 50vw"
                className="h-40 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </Container>
      </section>

      <QuoteCTASection
        title="Ready to Start a Manufacturing Conversation?"
        description="Share your product brief and our team will confirm the manufacturing approach that fits."
      />
    </>
  );
}
