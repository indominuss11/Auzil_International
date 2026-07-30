import { company } from "@/data/company";

const points = [
  {
    label: "Led by over 30 years of industry experience",
    detail: `${company.director.name}, Director`,
  },
  {
    label: "Personal care and pet care manufacturing",
    detail: "Under one roof in Delhi, India",
  },
  {
    label: "Private label & contract manufacturing",
    detail: "From formulation to dispatch",
  },
  {
    label: "Indian and international enquiries",
    detail: "Welcomed from brands and distributors alike",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Why buyers work with Auzil" className="border-b border-stone-200 bg-ivory">
      <div className="mx-auto grid max-w-8xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {points.map((point) => (
          <div key={point.label} className="border-l-2 border-clay pl-4">
            <p className="font-serif text-lg font-semibold text-ink-900">{point.label}</p>
            <p className="mt-1 text-sm text-stone-600">{point.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
