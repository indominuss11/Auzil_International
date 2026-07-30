import { company } from "./company";

/**
 * Central SEO defaults. Individual pages should still set unique
 * title/description values via generateMetadata, but should build on
 * these defaults rather than duplicating boilerplate.
 */
export const seoDefaults = {
  siteName: company.legalName,
  titleTemplate: "%s | Auzil International",
  defaultTitle:
    "Auzil International | Personal Care & Pet Care Manufacturing in Delhi, India",
  defaultDescription:
    "Auzil International manufactures personal care, hygiene and pet care products for brands, retailers, hospitality and institutional buyers, with private label and contract manufacturing services from Delhi, India.",
  siteUrl: company.siteUrl,
  defaultOgImage: "/opengraph-image",
  locale: "en_IN",
  twitterHandle: undefined as string | undefined,
};

export function absoluteUrl(path: string): string {
  const base = seoDefaults.siteUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
