export type ProductCategorySlug =
  | "personal-care"
  | "hygiene-sanitisers"
  | "pet-care"
  | "custom-manufacturing";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  shortDescription: string;
  heroDescription: string;
  products: string[];
  customisation: string[];
  packaging: string[];
  buyerTypes: string[];
  faqs: { question: string; answer: string }[];
  relatedCategories: ProductCategorySlug[];
  image: {
    src: string;
    alt: string;
  };
}

export interface ServiceItem {
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
}

export interface IndustryItem {
  name: string;
  slug: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  logoPath: string;
  websiteUrl: string;
  permissionConfirmed: boolean;
}

export interface Catalogue {
  title: string;
  slug: string;
  description: string;
  category: ProductCategorySlug | "general";
  coverImage: string;
  pdfUrl: string;
  fileSize: string;
  updatedAt: string;
  isPublished: boolean;
}

export interface TimelineEntry {
  id: string;
  year: string | null; // null / "[YEAR TO CONFIRM]" entries are hidden on the live site
  label: string;
  description: string;
  confirmed: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
