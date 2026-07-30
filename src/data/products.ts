import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    slug: "personal-care",
    name: "Personal Care",
    shortDescription:
      "Shampoo, conditioner, body wash, hand wash, soap, moisturisers and fragranced personal care products.",
    heroDescription:
      "Auzil International manufactures a broad range of personal care products for brands, retailers and hospitality buyers, from everyday hair and skin care staples to fragranced ranges built around a specific brand identity.",
    products: [
      "Shampoo",
      "Conditioner",
      "Body wash",
      "Hand wash",
      "Soap",
      "Moisturisers",
      "Lotions",
      "Hair care",
      "Skin care",
      "Fragranced personal care products",
    ],
    customisation: [
      "Selection from existing, tested formulations",
      "Custom formulation for a specific concern or claim",
      "Fragrance selection and fragrance customisation",
      "Texture, viscosity and finish adjustments",
      "Colour and appearance customisation",
    ],
    packaging: [
      "Bottles, tubes, jars and sachets",
      "Label design coordination and application",
      "Cartoning and secondary packaging",
      "Bulk and institutional packaging formats",
    ],
    buyerTypes: [
      "Personal care and cosmetic brands",
      "Hotels and hospitality groups",
      "Salons and spas",
      "Retailers and distributors",
      "New brand founders",
    ],
    faqs: [
      {
        question: "Can I start with a small trial run before committing to a full batch?",
        answer:
          "Sampling and approval take place before production, so you can review the formulation, fragrance and packaging before committing to a full manufacturing run. Confirmed minimum order quantities depend on the product and packaging format — our team will confirm this for your specific requirement.",
      },
      {
        question: "Do you supply the packaging as well as the formulation?",
        answer:
          "Yes. Packaging coordination and label application can be included, or you can supply your own packaging specification for us to fill and label.",
      },
      {
        question: "Can you match an existing product I already sell?",
        answer:
          "We can work from a reference sample or brief to develop a comparable formulation. Exact replication cannot be guaranteed, but our formulation team will aim to match texture, performance and fragrance profile as closely as practical.",
      },
    ],
    relatedCategories: ["hygiene-sanitisers", "custom-manufacturing"],
    image: {
      src: "/images/product-range.svg",
      alt: "Range of personal care bottles and packaging on a production line",
    },
  },
  {
    slug: "hygiene-sanitisers",
    name: "Hygiene & Sanitisers",
    shortDescription:
      "Hand sanitisers, hand rubs, hygiene washes and institutional hygiene products.",
    heroDescription:
      "We manufacture hand sanitiser (hand sanitizer), hand rubs and hygiene washes for retail brands as well as institutional buyers such as hotels, offices and facilities management companies, with formulations and pack sizes suited to each channel.",
    products: [
      "Hand sanitiser",
      "Hand rub",
      "Hygiene hand wash",
      "Institutional hygiene products",
      "Custom hygiene formulations",
    ],
    customisation: [
      "Gel, liquid and spray formats",
      "Fragrance-free and lightly fragranced options",
      "Pack size selection for retail or institutional use",
      "Custom hygiene formulations for specific use cases",
    ],
    packaging: [
      "Pump bottles, flip-top bottles and pouches",
      "Bulk containers for institutional refill",
      "Private-label bottle and carton branding",
    ],
    buyerTypes: [
      "Hotels and hospitality businesses",
      "Facilities management and institutional buyers",
      "Retailers and distributors",
      "Personal care brands extending into hygiene",
    ],
    faqs: [
      {
        question: "Can you manufacture hygiene products for hotel amenity programmes?",
        answer:
          "Yes, we work with hospitality buyers on hygiene ranges sized and packaged for guest rooms, public areas and back-of-house use.",
      },
      {
        question: "Do you offer both retail and bulk institutional packaging?",
        answer:
          "Both formats can be discussed. Institutional buyers often prefer larger refill containers, while retail brands typically need individual, labelled consumer packs.",
      },
      {
        question: "Is the American spelling 'sanitizer' used interchangeably with 'sanitiser'?",
        answer:
          "Yes — we manufacture the same category of hand sanitiser (hand sanitizer) products regardless of regional spelling, and can label packaging according to your target market's convention.",
      },
    ],
    relatedCategories: ["personal-care", "custom-manufacturing"],
    image: {
      src: "/images/filling-line.svg",
      alt: "Hand sanitiser bottles moving along a filling line",
    },
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    shortDescription:
      "Dog shampoo, pet conditioner, coat sprays, pet perfumes and paw-cleansing products.",
    heroDescription:
      "Auzil International's pet care range extends our personal care manufacturing knowledge into grooming and cosmetic products for dogs and other pets, for brands serving pet owners, groomers and pet retailers.",
    products: [
      "Dog shampoo",
      "Conditioning shampoo",
      "Pet conditioner",
      "Coat spray",
      "Pet perfume",
      "Paw cleanser",
      "Grooming products",
      "Other pet grooming and cosmetic products",
    ],
    customisation: [
      "Coat-type specific formulations",
      "Fragrance selection suited to pet grooming",
      "Gentle, pet-appropriate ingredient selection",
      "Custom pack sizes for salons or retail",
    ],
    packaging: [
      "Bottles and spray formats",
      "Salon-size and retail-size packaging",
      "Private-label bottle and carton branding",
    ],
    buyerTypes: [
      "Pet care brands",
      "Grooming salons and pet spas",
      "Pet retailers and distributors",
      "New pet brand founders",
    ],
    faqs: [
      {
        question: "Can pet grooming products be developed in matching fragrance profiles to a human personal care range?",
        answer:
          "Yes, this is a common request from brands that offer both human and pet personal care lines. Fragrance customisation can be coordinated across both ranges.",
      },
      {
        question: "Do you manufacture for grooming salons directly, or only for brands?",
        answer:
          "Both. Salons and spas can order private-label ranges under their own name, alongside brand and retail customers.",
      },
      {
        question: "What pet care products can be manufactured beyond shampoo?",
        answer:
          "Our pet care range covers conditioner, coat spray, pet perfume, paw cleanser and other grooming and cosmetic products — enquire if you need a product not listed here.",
      },
    ],
    relatedCategories: ["custom-manufacturing", "personal-care"],
    image: {
      src: "/images/product-range.svg",
      alt: "Pet grooming shampoo and coat spray bottles",
    },
  },
  {
    slug: "custom-manufacturing",
    name: "Custom Manufacturing",
    shortDescription:
      "A structured process for developing a personal care or pet care product that isn't currently in our catalogue.",
    heroDescription:
      "If your product idea sits outside our existing personal care and pet care ranges, our team can discuss whether it is achievable and outline a development path — from initial brief through to sampling and production.",
    products: [
      "New personal care product concepts",
      "New pet care product concepts",
      "Line extensions to an existing brand",
      "Reformulation of a current product",
    ],
    customisation: [
      "Brief review and feasibility discussion",
      "Formulation direction and ingredient selection",
      "Fragrance development",
      "Packaging format recommendation",
    ],
    packaging: [
      "Discussed case-by-case based on the product",
      "Sourced to match your brand specification where possible",
    ],
    buyerTypes: [
      "New brand founders",
      "Established consumer-product companies entering a new category",
      "Retailers developing a private-label range",
      "Exporters seeking a specific product not yet listed",
    ],
    faqs: [
      {
        question: "What happens if my product isn't listed on the site?",
        answer:
          "Send us a brief through the quote form describing what you would like to develop. Our team will confirm whether it fits within our personal care or pet care manufacturing capability and outline next steps.",
      },
      {
        question: "How long does custom development typically take?",
        answer:
          "Timelines vary by product complexity, ingredient sourcing and the number of sampling rounds required. We will give you a realistic estimate once your brief has been reviewed.",
      },
      {
        question: "Is there a minimum order quantity for a new custom product?",
        answer:
          "Minimum order quantities depend on the formulation and packaging chosen. This is confirmed with you directly once the product direction is set.",
      },
    ],
    relatedCategories: ["personal-care", "pet-care", "hygiene-sanitisers"],
    image: {
      src: "/images/quality-checks.svg",
      alt: "Sample products being reviewed during formulation development",
    },
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}
