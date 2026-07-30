import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Personal Care",
        href: "/products/personal-care",
        description: "Shampoo, conditioner, body wash, hand wash, soap and skincare.",
      },
      {
        label: "Hygiene & Sanitisers",
        href: "/products/hygiene-sanitisers",
        description: "Hand sanitisers, hand rubs and institutional hygiene washes.",
      },
      {
        label: "Pet Care",
        href: "/products/pet-care",
        description: "Dog shampoo, pet conditioner, coat sprays and pet perfumes.",
      },
      {
        label: "Custom Manufacturing",
        href: "/products/custom-manufacturing",
        description: "Bring a product idea that isn't in our current catalogue.",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Catalogues", href: "/catalogues" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Auzil", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Catalogues", href: "/catalogues" },
  ],
  products: [
    { label: "Personal Care", href: "/products/personal-care" },
    { label: "Hygiene & Sanitisers", href: "/products/hygiene-sanitisers" },
    { label: "Pet Care", href: "/products/pet-care" },
    { label: "Custom Manufacturing", href: "/products/custom-manufacturing" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Private Label Manufacturing", href: "/private-label-manufacturing" },
    { label: "Request a Quote", href: "/request-a-quote" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};
