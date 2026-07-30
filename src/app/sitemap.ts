import type { MetadataRoute } from "next";
import { seoDefaults } from "@/data/seo";
import { productCategories } from "@/data/products";

const staticRoutes = [
  "",
  "/about",
  "/manufacturing",
  "/products",
  "/services",
  "/private-label-manufacturing",
  "/industries",
  "/catalogues",
  "/contact",
  "/request-a-quote",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seoDefaults.siteUrl;
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: `${base}/products/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...categoryEntries];
}
