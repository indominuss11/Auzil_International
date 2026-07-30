import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { WebPageJsonLd, PersonJsonLd } from "@/components/seo/JsonLd";
import { company, businessValues } from "@/data/company";
import { confirmedTimeline } from "@/data/timeline";

const title = "About Auzil International — Delhi Manufacturing, Decades of Experience";
const description =
  "Learn about Auzil International's origins in personal care, its expansion into pet care manufacturing, and the business principles behind every product we make.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/about" />
      <PersonJsonLd />
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Our Story
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-ink-900 sm:text-5xl">
            Manufacturing Knowledge Built From Delhi
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Auzil International is a manufacturing and trading business based in
            Delhi, India. The business&apos;s manufacturing knowledge is led by
            Director {company.director.name}, who brings {company.director.experienceStatement.toLowerCase()}
            {" "}to every formulation, production run and client relationship.
          </p>
          <p className="mt-4 leading-relaxed text-stone-700">
            Our work began in personal care manufacturing — products such as
            shampoo, conditioner, body wash, hand wash, soap and moisturisers —
            developed for brands, retailers and hospitality buyers. Over time,
            the same manufacturing knowledge was applied to a second category:
            pet care. Today we manufacture dog shampoo, pet conditioner, coat
            sprays, pet perfumes and other grooming and cosmetic products
            alongside our personal care range.
          </p>
          <p className="mt-4 leading-relaxed text-stone-700">
            As the business has grown, so has interest from buyers outside
            India. We welcome enquiries from Indian and international
            personal care brands, pet care brands, distributors and
            exporters, and we are continuing to build the relationships and
            processes needed to serve that growing, international side of
            the business.
          </p>
        </Container>
      </section>

      <section className="bg-stone-100 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3 lg:items-center">
          <PlaceholderImage
            src={company.director.portrait.src}
            alt={company.director.portrait.alt}
            width={480}
            height={600}
            sizes="(min-width: 1024px) 320px, 60vw"
            className="mx-auto w-64 rounded-2xl object-cover lg:mx-0 lg:w-full"
          />
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Director's Message" title={`${company.director.name} — ${company.director.role}`} />
            <p className="mt-4 max-w-2xl text-base italic leading-relaxed text-stone-700">
              &ldquo;{company.director.message}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {confirmedTimeline.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Our Journey" title="Business Timeline" />
            <ol className="mt-10 space-y-6 border-l border-stone-300 pl-6">
              {confirmedTimeline.map((entry) => (
                <li key={entry.id}>
                  <span className="text-sm font-semibold uppercase tracking-wide text-clay">
                    {entry.year}
                  </span>
                  <p className="mt-1 font-serif text-lg font-semibold text-ink-900">
                    {entry.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <section className="bg-stone-100 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="Business Principles"
            description="These principles guide every manufacturing relationship, from a first sample to a long-running production programme."
          />
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            {businessValues.map((value) => (
              <div key={value.title}>
                <dt className="font-serif text-lg font-semibold text-ink-900">
                  {value.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <QuoteCTASection
        title="Discuss Your Manufacturing Requirement"
        description="Tell us about your product idea and we will confirm how Auzil International can help bring it to production."
      />
    </>
  );
}
