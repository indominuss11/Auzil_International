import type { ClientLogo } from "@/types";

/**
 * Brand / partner logo bar data — shown as an auto-scrolling strip on the
 * homepage (see ClientLogosBar.tsx). Covers both brands Auzil owns/operates
 * and companies it manufactures for.
 *
 * Only entries with `permissionConfirmed: true` are rendered on the site.
 * These six are enabled with placeholder text so the scroll bar is visible
 * — replace `name` and `logoPath` with real brand names/logos in
 * /public/images/logos, and double-check `permissionConfirmed` is
 * genuinely true for any external partner company before launch (brands
 * Auzil owns outright don't need third-party permission, but partner/
 * client companies do).
 */
export const clientLogos: ClientLogo[] = [
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-1.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-2.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-3.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-4.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-5.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
  {
    name: "[BRAND NAME — REPLACE]",
    logoPath: "/images/logos/placeholder-logo-6.svg",
    websiteUrl: "#",
    permissionConfirmed: true,
  },
];
