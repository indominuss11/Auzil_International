import type { Metadata } from "next";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Privacy Policy — Auzil International";
const description = "How Auzil International collects, uses and protects information submitted through this website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/privacy-policy" />
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-ink-900">Privacy Policy</h1>
          <p className="mt-4 text-sm text-stone-500">
            Last updated: [DATE — CONFIRM BEFORE LAUNCH]
          </p>

          <div className="prose-content mt-8 space-y-6 text-sm leading-relaxed text-stone-700">
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                1. Information We Collect
              </h2>
              <p className="mt-2">
                When you submit our contact or quote request forms, we collect
                the information you provide, which may include your name,
                company name, email address, phone number, country and details
                of your product enquiry.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                2. How We Use Information
              </h2>
              <p className="mt-2">
                Information submitted through our forms is used solely to
                respond to your enquiry and to discuss your manufacturing
                requirement. We do not sell or rent your information to third
                parties.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                3. Form Security
              </h2>
              <p className="mt-2">
                Our forms use Cloudflare Turnstile to help prevent automated
                and abusive submissions. Submitted data is validated on our
                server before being processed.
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                4. Data Retention
              </h2>
              <p className="mt-2">
                [DATA RETENTION POLICY — CONFIRM BEFORE LAUNCH]
              </p>
            </section>
            <section>
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                5. Contact Us
              </h2>
              <p className="mt-2">
                If you have questions about this privacy policy, contact us at{" "}
                {company.contact.email}.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
