import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading } from "@/components/ui";

const galleryImages = [
  { src: "/images/manufacturing-floor.svg", alt: "Manufacturing floor at Auzil International" },
  { src: "/images/mixing-equipment.svg", alt: "Mixing equipment used in product formulation" },
  { src: "/images/filling-line.svg", alt: "Filling line for personal care and pet care products" },
  { src: "/images/packaging-line.svg", alt: "Packaging line preparing finished goods" },
  { src: "/images/quality-checks.svg", alt: "Quality checks performed during production" },
  { src: "/images/dispatch.svg", alt: "Finished goods prepared for dispatch" },
];

export function GallerySection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Inside Auzil"
          title="Manufacturing &amp; Product Gallery"
          description="A look at the manufacturing stages behind every order — imagery to be replaced with photography of the facility."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((image) => (
            <PlaceholderImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="(min-width: 640px) 33vw, 50vw"
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
