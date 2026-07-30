import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading } from "@/components/ui";

export function ProductCategoriesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Manufacture"
          title="Product Categories"
          description="Four manufacturing categories, each with dedicated formulation and production capability."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              <PlaceholderImage
                src={category.image.src}
                alt={category.image.alt}
                width={600}
                height={400}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold text-ink-900">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {category.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage">
                  View category
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
  );
}
