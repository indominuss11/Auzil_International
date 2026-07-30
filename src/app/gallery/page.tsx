import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading, QuoteCTASection } from "@/components/ui";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const title = "Gallery — Manufacturing & Product Photography";
const description =
  "A look inside Auzil International's manufacturing process — formulation, filling, packaging, quality checks and the finished personal care and pet care product range.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery" },
  openGraph: { title, description, url: "/gallery" },
};

const galleryGroups = [
  {
    title: "Manufacturing",
    images: [
      { src: "/images/factory-exterior.svg", alt: "Auzil International facility exterior" },
      { src: "/images/manufacturing-floor.svg", alt: "Manufacturing floor" },
      { src: "/images/mixing-equipment.svg", alt: "Mixing equipment used during formulation" },
      { src: "/images/quality-checks.svg", alt: "Quality checks performed during production" },
    ],
  },
  {
    title: "Filling, packaging & dispatch",
    images: [
      { src: "/images/filling-line.svg", alt: "Filling line for personal care and pet care products" },
      { src: "/images/packaging-line.svg", alt: "Packaging line preparing finished goods" },
      { src: "/images/dispatch.svg", alt: "Finished goods prepared for dispatch" },
    ],
  },
  {
    title: "Product range & team",
    images: [
      { src: "/images/product-range.svg", alt: "Range of personal care and pet care products" },
      { src: "/images/team.svg", alt: "The Auzil International team" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <WebPageJsonLd title={title} description={description} path="/gallery" />
      <Breadcrumbs items={[{ name: "Gallery", path: "/gallery" }]} />

      <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Inside Auzil
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A look at the manufacturing stages behind every order, from
            formulation through to dispatch — imagery to be replaced with
            photography of the facility and finished product range.
          </p>
        </Container>
      </section>

      {galleryGroups.map((group) => (
        <section key={group.title} className="py-14 sm:py-16">
          <Container>
            <SectionHeading title={group.title} />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.images.map((image) => (
                <PlaceholderImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="h-40 w-full rounded-2xl object-cover shadow-sm sm:h-48"
                />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <QuoteCTASection
        title="Want to See More Before You Enquire?"
        description="Ask our team for further examples relevant to your product category."
      />
    </>
  );
}
