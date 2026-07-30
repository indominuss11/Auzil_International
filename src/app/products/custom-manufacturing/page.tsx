import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/products";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Custom Personal Care \& Pet Care Product Development";
const description = "Discuss a personal care or pet care product that isn't currently in our catalogue — custom formulation and manufacturing support from Delhi, India.";
const path = "/products/custom-manufacturing";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function Page() {
  const category = getCategoryBySlug("custom-manufacturing");
  if (!category) notFound();

  return (
    <>
      <WebPageJsonLd title={title} description={description} path={path} />
      <CategoryPageContent category={category} />
    </>
  );
}
