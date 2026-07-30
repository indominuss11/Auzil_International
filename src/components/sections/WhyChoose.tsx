import { businessValues } from "@/data/company";
import { Container, SectionHeading } from "@/components/ui";

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Auzil"
          title="Manufacturing Knowledge Built Over Decades"
          description="Three decades of industry knowledge inform how we work with every buyer, from first enquiry to repeat production runs."
        />
        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {businessValues.map((value) => (
            <div key={value.title}>
              <dt className="font-serif text-lg font-semibold text-ink-900">
                {value.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                {value.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
