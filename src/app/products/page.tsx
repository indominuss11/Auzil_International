import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { productCategories } from "@/data/products";

const title = "Products — Personal Care, Hygiene, Pet Care & Custom Manufacturing";
const description =
  "Browse Auzil International's manufacturing categories: personal care, hygiene and sanitisers, pet care, and custom manufacturing for new product ideas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/products" />
      <Breadcrumbs items={[{ name: "Products", path: "/products" }]} />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Manufacture"
            title="Product Categories"
            description="Each category page details the specific products, customisation options, packaging support and buyer types we work with."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {productCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                <PlaceholderImage
                  src={category.image.src}
                  alt={category.image.alt}
                  width={1200}
                  height={800}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="font-serif text-2xl font-semibold text-ink-900">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {category.heroDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage">
                    Explore {category.name}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <QuoteCTASection
        title="Looking For a Product Not Listed Here?"
        description="Our custom manufacturing process covers new product ideas outside our existing catalogue."
      />
    </>
  );
}
