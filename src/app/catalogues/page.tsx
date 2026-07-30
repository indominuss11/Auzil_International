import type { Metadata } from "next";
import { Download, Eye, FileText } from "lucide-react";
import Link from "next/link";
import { publishedCatalogues } from "@/data/catalogues";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Product Catalogues — Personal Care & Pet Care Manufacturing";
const description =
  "Download Auzil International's personal care and pet care product catalogues, or contact our team to discuss available formulations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/catalogues" },
  openGraph: { title, description, url: "/catalogues" },
};

export default function CataloguesPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/catalogues" />
      <Breadcrumbs items={[{ name: "Catalogues", path: "/catalogues" }]} />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Downloads"
            title="Product Catalogues"
            description="Browse our published catalogues below, or contact our team directly to discuss formulations that aren't yet listed."
          />

          {publishedCatalogues.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publishedCatalogues.map((catalogue) => (
                <div
                  key={catalogue.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  <PlaceholderImage
                    src={catalogue.coverImage}
                    alt={`Cover of the ${catalogue.title}`}
                    width={1200}
                    height={800}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-40 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-clay">
                      {catalogue.category}
                    </span>
                    <h2 className="mt-1 font-serif text-lg font-semibold text-ink-900">
                      {catalogue.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                      {catalogue.description}
                    </p>
                    <p className="mt-3 text-xs text-stone-500">
                      Updated {catalogue.updatedAt} &middot; {catalogue.fileSize}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={catalogue.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink-900 px-3 py-2 text-xs font-medium text-ink-900 hover:bg-ink-900 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                      >
                        <Eye aria-hidden="true" className="h-3.5 w-3.5" /> View
                      </a>
                      <a
                        href={catalogue.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink-900 px-3 py-2 text-xs font-medium text-ink-900 hover:bg-ink-900 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                      >
                        <Download aria-hidden="true" className="h-3.5 w-3.5" /> Download
                      </a>
                      <Link
                        href="/request-a-quote"
                        className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-2 text-xs font-medium text-ivory hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-stone-300 bg-stone-100 p-10 text-center sm:p-16">
              <FileText aria-hidden="true" className="mx-auto h-10 w-10 text-stone-400" />
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-700">
                Our product catalogues are currently being updated. Contact our
                team to discuss available formulations and manufacturing
                capabilities.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-ivory hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                Contact Our Team
              </Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
