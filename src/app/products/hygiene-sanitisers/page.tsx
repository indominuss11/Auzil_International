import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/products";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Hand Sanitiser & Hygiene Products Manufacturer";
const description = "Contract manufacturing of hand sanitiser (hand sanitizer), hand rub and hygiene wash products for retail brands, hotels and institutional buyers.";
const path = "/products/hygiene-sanitisers";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function Page() {
  const category = getCategoryBySlug("hygiene-sanitisers");
  if (!category) notFound();

  return (
    <>
      <WebPageJsonLd title={title} description={description} path={path} />
      <CategoryPageContent category={category} />
    </>
  );
}
