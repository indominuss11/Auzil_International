import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const title = "Manufacturing, Services & Industries — Auzil International";
const description =
  "How Auzil International manufactures personal care and pet care products — capabilities, process, private label and contract manufacturing services, and the industries we serve.";

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

const jumpLinks = [
  { href: "#capabilities", label: "Manufacturing" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
];

export default function ManufacturingPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/manufacturing" />
      <Breadcrumbs items={[{ name: "Manufacturing", path: "/manufacturing" }]} />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            What We Do
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
            Manufacturing, Services &amp; Industries
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Auzil International manufactures personal care and pet care
            products for brands, retailers and institutional buyers — covering
            formulation, private-label and contract production, fragrance
            customisation, packaging and quality checks, along with the range
            of services and industries we support.
          </p>
        </Container>
      </section>

      {/* In-page jump nav so a long, combined page stays easy to scan. */}
      <nav
        aria-label="On this page"
        className="sticky top-16 z-20 border-b border-stone-200 bg-ivory/95 backdrop-blur"
      >
        <Container className="flex gap-6 overflow-x-auto py-3 text-sm">
          {jumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded font-medium text-ink-900 underline-offset-4 hover:text-sage hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              {link.label}
            </a>
          ))}
        </Container>
      </nav>

      {/* ---------------- Manufacturing capabilities ---------------- */}
      <section id="capabilities" className="scroll-mt-32 py-16 sm:py-20">
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
            <SectionHeading eyebrow="Production Details" title="Capacity & Order Quantities" />
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
            {[
              { src: "/images/manufacturing-floor.svg", alt: "Manufacturing floor" },
              { src: "/images/mixing-equipment.svg", alt: "Mixing equipment used during formulation" },
              { src: "/images/filling-line.svg", alt: "Filling line" },
              { src: "/images/packaging-line.svg", alt: "Packaging line" },
            ].map((image) => (
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
          <div className="mt-6">
            <Link
              href="/gallery"
              className="text-sm font-medium text-sage underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              View the full manufacturing &amp; product gallery
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- Services ---------------- */}
      <section id="services" className="scroll-mt-32 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How We Work With You"
            title="Services"
            description="Whether you need a ready formulation put under your own brand or a fully custom product developed from a brief, our services are structured to support personal care and pet care buyers at every stage."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">
                    {service.title}
                  </h3>
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

      {/* ---------------- Industries ---------------- */}
      <section id="industries" className="scroll-mt-32 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Industries We Serve"
            description="From new brand founders to established consumer-product companies, our manufacturing services are built to support a wide range of personal care and pet care buyers."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-ink-900">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <QuoteCTASection
        title="Ready to Start a Manufacturing Conversation?"
        description="Share your product brief and our team will confirm the manufacturing approach, services and timeline that fit."
      />
    </>
  );
}
