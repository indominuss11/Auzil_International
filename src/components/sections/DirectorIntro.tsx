import { company } from "@/data/company";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Container } from "@/components/ui";

export function DirectorIntro() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-3 lg:items-center">
        <PlaceholderImage
          src={company.director.portrait.src}
          alt={company.director.portrait.alt}
          width={480}
          height={600}
          sizes="(min-width: 1024px) 320px, 60vw"
          className="mx-auto w-64 rounded-2xl object-cover lg:mx-0 lg:w-full"
        />
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            {company.director.experienceStatement}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
            {company.director.name}
            <span className="block text-lg font-normal text-stone-600">
              {company.director.role}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base italic leading-relaxed text-stone-700">
            &ldquo;{company.director.message}&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}
