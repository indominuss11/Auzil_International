import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/products";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Personal Care Products Manufacturer in Delhi, India";
const description = "Private label and contract manufacturing of shampoo, conditioner, body wash, hand wash, soap, moisturisers and fragranced personal care products from Delhi, India.";
const path = "/products/personal-care";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path },
};

export default function Page() {
  const category = getCategoryBySlug("personal-care");
  if (!category) notFound();

  return (
    <>
      <WebPageJsonLd title={title} description={description} path={path} />
      <CategoryPageContent category={category} />
    </>
  );
}
