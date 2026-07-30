import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/data/navigation";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-ink-900 text-stone-200">
      <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/brand/auzil-butterfly-mark-light.png"
                alt=""
                width={821}
                height={607}
                aria-hidden="true"
                className="h-6 w-auto"
              />
              <p className="font-serif text-xl font-semibold text-ivory">
                {company.legalName}
              </p>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-300">
              Personal care and pet care manufacturing from Delhi, India — private
              label, contract manufacturing and custom product development, led
              by over 30 years of industry experience.
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-stone-300">
              <p>{company.contact.address.city}, {company.contact.address.country}</p>
              <p>
                <a
                  href={`mailto:${company.contact.email.startsWith("[") ? "" : company.contact.email}`}
                  className="rounded underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-light"
                >
                  {company.contact.email}
                </a>
              </p>
              <p>{company.contact.phone}</p>
            </address>
          </div>

          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Products" links={footerNav.products} />
          <FooterColumn title="Services" links={footerNav.services} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-serif text-sm font-semibold uppercase tracking-wide text-ivory">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded text-stone-300 underline-offset-2 hover:text-ivory hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-light"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
