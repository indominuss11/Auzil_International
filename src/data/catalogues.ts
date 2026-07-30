import type { Catalogue } from "@/types";

/**
 * Product catalogue data.
 *
 * Only catalogues with `isPublished: true` are shown on /catalogues.
 * Add real PDF files under /public/catalogues and update `pdfUrl`,
 * `fileSize` and `updatedAt` accordingly, then set `isPublished: true`.
 */
export const catalogues: Catalogue[] = [
  {
    title: "Personal Care Catalogue",
    slug: "personal-care-catalogue",
    description: "[CATALOGUE DESCRIPTION — CONFIRM CONTENT BEFORE PUBLISHING]",
    category: "personal-care",
    coverImage: "/images/product-range.svg",
    pdfUrl: "/catalogues/personal-care.pdf",
    fileSize: "[FILE SIZE — CONFIRM]",
    updatedAt: "[DATE — CONFIRM]",
    isPublished: false,
  },
  {
    title: "Pet Care Catalogue",
    slug: "pet-care-catalogue",
    description: "[CATALOGUE DESCRIPTION — CONFIRM CONTENT BEFORE PUBLISHING]",
    category: "pet-care",
    coverImage: "/images/product-range.svg",
    pdfUrl: "/catalogues/pet-care.pdf",
    fileSize: "[FILE SIZE — CONFIRM]",
    updatedAt: "[DATE — CONFIRM]",
    isPublished: false,
  },
];

export const publishedCatalogues = catalogues.filter((c) => c.isPublished);
