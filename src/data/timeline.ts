import type { TimelineEntry } from "@/types";

/**
 * Company timeline.
 *
 * Entries with `confirmed: false` (or a null/placeholder year) must not be
 * rendered publicly. The About page timeline component filters these out
 * automatically — update this file with real dates as they are confirmed.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "personal-care-origins",
    year: "[YEAR TO CONFIRM]",
    label: "Personal care manufacturing begins",
    description:
      "Auzil International's manufacturing work begins in personal care, building formulation and production knowledge in Delhi.",
    confirmed: false,
  },
  {
    id: "pet-care-expansion",
    year: "[YEAR TO CONFIRM]",
    label: "Expansion into pet care",
    description:
      "The product range expands to include pet grooming and pet cosmetic manufacturing alongside personal care.",
    confirmed: false,
  },
  {
    id: "current",
    year: "Present",
    label: "Serving Indian and international buyers",
    description:
      "Auzil International manufactures for personal care and pet care brands, hospitality buyers, salons, retailers and distributors, with growing interest from international enquiries.",
    confirmed: true,
  },
];

export const confirmedTimeline = timeline.filter((t) => t.confirmed);
