import { industries } from "@/data/industries";
import { Container, SectionHeading } from "@/components/ui";

export function IndustriesServedSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Who We Work With"
          title="Industries Served"
          description="Auzil International manufactures for a wide range of buyers across personal care and pet care."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <li
              key={industry.slug}
              className="rounded-2xl border border-stone-200 bg-white p-4 text-sm shadow-sm"
            >
              <p className="font-medium text-ink-900">{industry.name}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
