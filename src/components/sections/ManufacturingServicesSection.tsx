import * as Icons from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Container, SectionHeading } from "@/components/ui";

export function ManufacturingServicesSection() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How We Work With You"
          title="Manufacturing Services"
          description="From selecting an existing formulation to developing something entirely new, our services cover the full manufacturing journey."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Factory;
            return (
              <div key={service.slug} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <Icon aria-hidden="true" className="h-6 w-6 text-sage" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm font-medium text-sage underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            View all services
          </Link>
        </div>
      </Container>
    </section>
  );
}
