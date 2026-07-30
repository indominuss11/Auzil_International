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
          className="flex w-max items-center gap-16 motion-safe:animate-logo-scroll motion-safe:group-hover:[animation-play-state:paused] motion-safe:group-focus-within:[animation-play-state:paused]"
        >
          {loopLogos.map((logo, index) => (
            <li key={`${logo.name}-${index}`} className="shrink-0 grayscale">
              <a
                href={logo.websiteUrl}
                className="block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                <PlaceholderImage
                  src={logo.logoPath}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
