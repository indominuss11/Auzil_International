import type { ClientLogo } from "@/types";

/**
 * Client / partner logo bar data.
 *
 * Only entries with `permissionConfirmed: true` are rendered on the site.
 * Replace the placeholder logo files in /public/images/logos with real
 * assets once written permission has been obtained from each company.
 */
export const clientLogos: ClientLogo[] = [
  {
    name: "[CLIENT NAME — CONFIRM PERMISSION]",
    logoPath: "/images/logos/placeholder-logo-1.svg",
    websiteUrl: "#",
    permissionConfirmed: false,
  },
  {
    name: "[CLIENT NAME — CONFIRM PERMISSION]",
    logoPath: "/images/logos/placeholder-logo-2.svg",
    websiteUrl: "#",
    permissionConfirmed: false,
  },
  {
    name: "[CLIENT NAME — CONFIRM PERMISSION]",
    logoPath: "/images/logos/placeholder-logo-3.svg",
    websiteUrl: "#",
    permissionConfirmed: false,
  },
];
