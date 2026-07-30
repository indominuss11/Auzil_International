import { clientLogos } from "@/data/clientLogos";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container, SectionHeading } from "@/components/ui";

export function ClientLogosBar() {
  const confirmedLogos = clientLogos.filter((logo) => logo.permissionConfirmed);

  if (confirmedLogos.length === 0) {
    // Nothing with confirmed permission yet — omit the section rather than
    // display placeholder company names as if they were real clients.
    return null;
  }

  const loopLogos = [...confirmedLogos, ...confirmedLogos];

  return (
    <section aria-label="Brands we own and work with" className="bg-stone-100 py-14">
      <Container>
        <SectionHeading title="Brands We Own & Work With" align="center" />
      </Container>
      <div className="group mt-10 overflow-hidden">
        <ul
         className="flex w-max items-center gap-16 motion-safe:animate-logo-scroll"
        >
          {loopLogos.map((logo, index) => (
            <li key={`${logo.name}-${index}`} className="shrink-0 grayscale">
  <PlaceholderImage
    src={logo.logoPath}
    alt={logo.name}
    width={160}
    height={60}
    className="h-10 w-auto object-contain"
  />
</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
