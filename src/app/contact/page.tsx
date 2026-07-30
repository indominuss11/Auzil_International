import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, SectionHeading } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";
import { WebPageJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const title = "Contact Auzil International — Personal Care & Pet Care Manufacturing";
const description =
  "Contact Auzil International's team in Delhi, India to discuss personal care, hygiene or pet care manufacturing requirements.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  const hasAddress = !company.contact.address.line1.startsWith("[");
  const hasPhone = !company.contact.phone.startsWith("[");
  const hasEmail = !company.contact.email.startsWith("[");

  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/contact" />
      <LocalBusinessJsonLd />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Contact Our Team"
              description="Send a message about your personal care or pet care manufacturing requirement, and we will get back to you."
            />

            <dl className="mt-8 space-y-4 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <dd>
                  {hasAddress ? (
                    <>
                      {company.contact.address.line1}
                      <br />
                      {company.contact.address.city}, {company.contact.address.state}{" "}
                      {company.contact.address.postalCode}
                      <br />
                      {company.contact.address.country}
                    </>
                  ) : (
                    <>
                      {company.contact.address.city}, {company.contact.address.country}
                      <span className="block text-xs text-stone-400">
                        (Full address to be confirmed)
                      </span>
                    </>
                  )}
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <dd>{hasPhone ? company.contact.phone : "Phone number to be confirmed"}</dd>
              </div>
              <div className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <dd>
                  {hasEmail ? (
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-sage underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                    >
                      {company.contact.email}
                    </a>
                  ) : (
                    "Email to be confirmed"
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
