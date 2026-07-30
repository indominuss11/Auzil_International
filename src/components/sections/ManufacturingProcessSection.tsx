import { Container, SectionHeading } from "@/components/ui";

const steps = [
  { title: "Requirement", description: "You share your product brief, target market and expected volumes." },
  { title: "Product Selection", description: "Choose an existing formulation or begin custom development." },
  { title: "Sampling", description: "Samples are prepared for your review, including fragrance and texture." },
  { title: "Approval", description: "Formulation and packaging are confirmed before production begins." },
  { title: "Manufacturing", description: "Batches are produced to the approved specification." },
  { title: "Quality Checks", description: "Production is checked at key stages prior to packaging." },
  { title: "Packaging", description: "Filling, labelling and secondary packaging are completed." },
  { title: "Dispatch", description: "Finished goods are prepared and dispatched to you." },
];

export function ManufacturingProcessSection() {
  return (
    <section className="bg-stone-100 py-16 text-ink-900 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From Requirement to Dispatch"
          description="A structured process keeps every order on track, whether it is a first trial batch or a repeat production run."
        />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-l-2 border-clay-light pl-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-clay">
                Step {index + 1}
              </span>
              <p className="mt-1 font-serif text-lg font-semibold">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
