import { company } from "@/data/company";
import { absoluteUrl, seoDefaults } from "@/data/seo";

/**
 * Structured data components render a single <script type="application/ld+json">
 * tag each. Content is generated server-side from verified data only —
 * do not add ratings, reviews, offers or certifications that are not
 * confirmed in src/data/company.ts.
 */

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  // Safe: `data` is always an object we construct ourselves from typed
  // fields, never raw user input, so JSON.stringify output cannot break
  // out of the script tag via injected markup.
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- static, non-user-controlled JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const hasAddress = !company.contact.address.line1.startsWith("[");

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: seoDefaults.siteUrl,
    logo: absoluteUrl("/images/logo.svg"),
  };

  if (hasAddress) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: company.contact.address.line1,
      addressLocality: company.contact.address.city,
      addressRegion: company.contact.address.state,
      postalCode: company.contact.address.postalCode,
      addressCountry: company.countryCode,
    };
  }

  return <JsonLdScript data={data} />;
}

export function LocalBusinessJsonLd() {
  const hasAddress = !company.contact.address.line1.startsWith("[");
  if (!hasAddress) return null; // don't emit incomplete/placeholder address data

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    url: seoDefaults.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.contact.address.line1,
      addressLocality: company.contact.address.city,
      addressRegion: company.contact.address.state,
      postalCode: company.contact.address.postalCode,
      addressCountry: company.countryCode,
    },
    telephone: company.contact.phone.startsWith("[") ? undefined : company.contact.phone,
  };

  return <JsonLdScript data={data} />;
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: company.director.name,
    jobTitle: company.director.role,
    worksFor: {
      "@type": "Organization",
      name: company.legalName,
    },
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.legalName,
    url: seoDefaults.siteUrl,
  };

  return <JsonLdScript data={data} />;
}

export function WebPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
  };

  return <JsonLdScript data={data} />;
}

export function BreadcrumbListJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <JsonLdScript data={data} />;
}
