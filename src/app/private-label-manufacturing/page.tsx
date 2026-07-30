import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Private Label Personal Care and Pet Care Manufacturing in India";
const description =
  "Private label manufacturing of personal care and pet care products from Delhi, India — select from existing formulations and launch under your own brand.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/private-label-manufacturing" },
  openGraph: { title, description, url: "/private-label-manufacturing" },
};

const steps = [
  {
    title: "Choose a formulation",
    description:
      "Select from an existing personal care or pet care formulation, or discuss adjustments to better suit your brand.",
  },
  {
    title: "Confirm packaging and branding",
    description:
      "Bottles, tubes, jars and labels are coordinated to your specification, or you can supply your own packaging.",
  },
  {
    title: "Sample and approve",
    description:
      "A sample is prepared for your review before any production run is confirmed.",
  },
  {
    title: "Manufacture and dispatch",
    description:
      "Once approved, your batch is produced, quality-checked, packaged and dispatched.",
  },
];

const goodFit = [
  "New brand founders launching a first product range",
  "Retailers building a private-label personal care or pet care line",
  "Salons and spas offering branded take-home products",
  "Hospitality groups sourcing branded amenity ranges",
  "Established companies adding a new category under their own name",
];

export default function PrivateLabelPage() {
  return (
    <>
      <WebPageJsonLd
        title={title}
        description={description}
        path="/private-label-manufacturing"
      />
      <Breadcrumbs
        items={[
          { name: "Manufacturing", path: "/manufacturing" },
          { name: "Private Label Manufacturing", path: "/private-label-manufacturing" },
        ]}
      />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Private Label Manufacturing
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
              Private Label Personal Care and Pet Care Manufacturing in India
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              Private label manufacturing lets you launch or extend a personal
              care or pet care range under your own brand, using formulations
              that are already developed and ready for packaging.
            </p>
          </div>
          <PlaceholderImage
            src="/images/product-range.svg"
            alt="Private label personal care products ready for branding"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Why Private Label" title="A Faster Route to Market" />
          <p className="mt-6 leading-relaxed text-stone-700">
            Developing a completely new formulation takes time. Private label
            manufacturing shortens this by starting from an existing, proven
            formulation base — you focus on branding, packaging and market
            positioning, while the underlying product is already
            manufacturing-ready. This approach suits brands that want to move
            quickly without compromising on product quality, as well as
            companies testing a new category before committing to a fully
            custom development.
          </p>
        </Container>
      </section>

      <section className="bg-stone-100 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How It Works" title="From Formulation to Your Brand" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-clay">
                  Step {index + 1}
                </span>
                <p className="mt-2 font-serif text-lg font-semibold text-ink-900">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Who This Suits" title="Is Private Label Right For You?" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {goodFit.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-600">
            If your product idea doesn&apos;t fit within an existing formulation,
            our <a href="/products/custom-manufacturing" className="text-sage underline-offset-2 hover:underline">custom manufacturing</a> process
            covers fully bespoke development instead.
          </p>
        </Container>
      </section>

      <QuoteCTASection
        title="Start Your Private Label Range"
        description="Tell us which products you're interested in and your target launch timeline."
      />
    </>
  );
}
