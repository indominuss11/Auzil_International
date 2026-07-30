import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { ProductCategory } from "@/types";
import { getCategoryBySlug } from "@/data/products";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading, PrimaryButton } from "@/components/ui";

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

export function CategoryPageContent({ category }: { category: ProductCategory }) {
  const related = category.relatedCategories
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is ProductCategory => Boolean(c));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Products", path: "/products" },
          { name: category.name, path: `/products/${category.slug}` },
        ]}
      />

      <section className="bg-stone-100 py-14 text-ink-900 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Product Category
            </p>
            <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600">
              {category.heroDescription}
            </p>
            <div className="mt-8">
              <PrimaryButton href="/request-a-quote">Request a Quote</PrimaryButton>
            </div>
          </div>
          <PlaceholderImage
            src={category.image.src}
            alt={category.image.alt}
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Range" title={`${category.name} Products`} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <li key={product} className="flex items-start gap-2 text-sm text-stone-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {product}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-stone-100 py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Available Customisation
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              {category.customisation.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Packaging Support
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              {category.packaging.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-ink-900">
            Who We Manufacture {category.name} Products For
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {category.buyerTypes.map((buyer) => (
              <li key={buyer} className="rounded-2xl border border-stone-200 bg-white p-4 text-sm font-medium text-ink-900 shadow-sm">
                {buyer}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-stone-100 py-14 text-ink-900 sm:py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold">Manufacturing Process</h2>
          <ol className="mt-6 flex flex-wrap gap-4 text-sm">
            {processSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-clay-light text-xs text-clay">
                  {index + 1}
                </span>
                {step}
                {index < processSteps.length - 1 && (
                  <span aria-hidden="true" className="ml-4 text-stone-500">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 divide-y divide-stone-200">
            {category.faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-stone-100 py-14 sm:py-16">
          <Container>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Related Categories
            </h2>
            <ul className="mt-6 flex flex-wrap gap-4">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/products/${rel.slug}`}
                    className="inline-block rounded-full border border-ink-900 px-5 py-2.5 text-sm font-medium text-ink-900 hover:bg-ink-900 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                  >
                    {rel.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-sage py-14 text-center text-ivory sm:py-16">
        <Container>
          <h2 className="font-serif text-3xl font-semibold">
            Discuss Your {category.name} Requirement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-stone-100">
            Share your product brief and our team will confirm the manufacturing
            approach best suited to your brand.
          </p>
          <div className="mt-8">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3 text-sm font-medium text-sage hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
            >
              Request a Quote
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
