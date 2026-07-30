import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ClientLogosBar } from "@/components/sections/ClientLogosBar";
import { ProductCategoriesSection } from "@/components/sections/ProductCategoriesSection";
import { ManufacturingServicesSection } from "@/components/sections/ManufacturingServicesSection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ManufacturingProcessSection } from "@/components/sections/ManufacturingProcessSection";
import { DirectorIntro } from "@/components/sections/DirectorIntro";
import { GallerySection } from "@/components/sections/GallerySection";
import { IndustriesServedSection } from "@/components/sections/IndustriesServedSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OrganizationJsonLd, WebSiteJsonLd, WebPageJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { seoDefaults } from "@/data/seo";

const title = seoDefaults.defaultTitle;
const description = seoDefaults.defaultDescription;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <LocalBusinessJsonLd />
      <WebPageJsonLd title={title} description={description} path="/" />
      <Hero />
      <TrustStrip />
      <ClientLogosBar />
      <ProductCategoriesSection />
      <ManufacturingServicesSection />
      <WhyChoose />
      <ManufacturingProcessSection />
      <DirectorIntro />
      <GallerySection />
      <IndustriesServedSection />
      <FinalCTA />
    </>
  );
}
