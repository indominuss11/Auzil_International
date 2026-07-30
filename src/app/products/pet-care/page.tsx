import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/products";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Pet Care & Dog Shampoo Manufacturer in India";
const description = "Private label manufacturing of dog shampoo, pet conditioner, coat spray, pet perfume and paw-cleansing products for pet care brands and groomers.";
const path = "/products/pet-care";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function Page() {
  const category = getCategoryBySlug("pet-care");
  if (!category) notFound();

  return (
    <>
      <WebPageJsonLd title={title} description={description} path={path} />
      <CategoryPageContent category={category} />
    </>
  );
}
