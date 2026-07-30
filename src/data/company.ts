/**
 * Central company data file.
 *
 * IMPORTANT: This is the single source of truth for factual claims about
 * Auzil International. Do not hardcode company facts (address, phone,
 * capacity, MOQ, export markets, certifications) anywhere else in the
 * codebase — import them from here instead.
 *
 * Fields marked "[PLACEHOLDER — CONFIRM]" are not yet verified and must be
 * confirmed by the business before launch. They intentionally are NOT
 * rendered as facts anywhere in the public UI; components that consume
 * them should hide the section entirely when the value is a placeholder.
 */

export const company = {
  legalName: "Auzil International",
  shortName: "Auzil",
  tagline: "Personal Care and Pet Care Manufacturing, Backed by Decades of Experience",
  city: "Delhi",
  country: "India",
  countryCode: "IN",

  // Director details — confirmed by the business.
  director: {
    name: "Aman Arora",
    role: "Director",
    experienceStatement: "Over 30 years of industry experience",
    message:
      "Over the past three decades, I have seen products, markets and customer expectations evolve considerably. However, the foundations of a dependable manufacturing partnership remain unchanged: consistent quality, honest communication and a willingness to understand the customer's business. At Auzil International, we bring these values into every product we develop and manufacture.",
    portrait: {
      src: "/images/director-portrait.svg",
      alt: "Aman Arora, Director of Auzil International",
    },
  },

  // Contact details — PLACEHOLDERS. Replace before launch.
  contact: {
    address: {
      line1: "[ADDRESS LINE 1 — CONFIRM]",
      line2: "[ADDRESS LINE 2 — CONFIRM]",
      city: "Delhi",
      state: "Delhi",
      postalCode: "[POSTAL CODE — CONFIRM]",
      country: "India",
    },
    phone: "[PHONE NUMBER — CONFIRM]",
    whatsapp: "[WHATSAPP NUMBER — CONFIRM]",
    email: "[CONTACT EMAIL — CONFIRM]",
    gstin: "[GSTIN — CONFIRM]",
  },

  social: {
    linkedin: "[LINKEDIN URL — CONFIRM]",
    instagram: "[INSTAGRAM URL — CONFIRM]",
  },

  // Manufacturing facts that must not be presented publicly until verified.
  manufacturing: {
    establishedYearConfirmed: false,
    establishedYear: null as string | null, // do not display unless confirmed
    productionCapacityStatement: "[PRODUCTION CAPACITY — CONFIRM]",
    defaultMoqStatement: "[MINIMUM ORDER QUANTITY — CONFIRM]",
    exportMarketsConfirmed: false,
    exportMarkets: [] as string[],
    certifications: [] as string[], // leave empty until certificates are verified
  },

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.auzilinternational.example",
} as const;

export const businessValues = [
  {
    title: "Consistent quality",
    description:
      "Formulations and production processes are checked at every stage, from raw material selection through to final dispatch.",
  },
  {
    title: "Honest communication",
    description:
      "We give buyers realistic timelines and clear answers, including when something is not yet possible within their brief.",
  },
  {
    title: "Understanding your brand",
    description:
      "New brand founders and established companies alike are guided through formulation, packaging and production decisions that suit their positioning.",
  },
  {
    title: "Long-term partnership",
    description:
      "Manufacturing relationships are built to continue across repeat runs, new product lines and evolving requirements.",
  },
] as const;
