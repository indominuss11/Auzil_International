import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading } from "@/components/ui";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Request a Manufacturing Quote — Auzil International";
const description =
  "Request a quote for personal care, hygiene or pet care manufacturing. Share your product brief, target volumes and packaging requirement.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/request-a-quote" },
  openGraph: { title, description, url: "/request-a-quote" },
};

export default function RequestQuotePage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/request-a-quote" />
      <Breadcrumbs items={[{ name: "Request a Quote", path: "/request-a-quote" }]} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Start a Conversation"
            title="Request a Quote"
            description="Tell us about your product requirement and our team will confirm the manufacturing approach, realistic timeline and next steps."
          />
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
