import { z } from "zod";

// Allowlisted values — keep in sync with the <select> options rendered
// in the quote form component.
export const PRODUCT_CATEGORIES = [
  "personal-care",
  "hygiene-sanitisers",
  "pet-care",
  "custom-manufacturing",
] as const;

export const MANUFACTURING_TYPES = [
  "private-label",
  "white-label",
  "contract-manufacturing",
  "custom-development",
  "not-sure",
] as const;

const trimmedString = (max: number) =>
  z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(max, `Please keep this under ${max} characters.`);

export const quoteFormSchema = z.object({
  name: trimmedString(100),
  company: trimmedString(150),
  email: z
    .string()
    .trim()
    .min(1, "Work email is required.")
    .max(200)
    .email("Please enter a valid email address."),
  phone: trimmedString(30),
  country: trimmedString(80),
  productCategory: z.enum(PRODUCT_CATEGORIES, {
    errorMap: () => ({ message: "Please select a valid product category." }),
  }),
  productsRequired: trimmedString(500),
  estimatedQuantity: trimmedString(100),
  manufacturingType: z.enum(MANUFACTURING_TYPES, {
    errorMap: () => ({ message: "Please select a valid manufacturing type." }),
  }),
  packagingRequirement: trimmedString(300),
  targetLaunchDate: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you agree before submitting." }),
  }),
  // Honeypot: must always arrive empty. Real users never see or fill this
  // field; bots that auto-fill every input will trip it.
  website: z.string().max(0, "Submission rejected.").optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Please complete the verification challenge."),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: trimmedString(100),
  email: z.string().trim().min(1).max(200).email("Please enter a valid email address."),
  company: trimmedString(150).optional().or(z.literal("")),
  message: trimmedString(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you agree before submitting." }),
  }),
  website: z.string().max(0, "Submission rejected.").optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Please complete the verification challenge."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
