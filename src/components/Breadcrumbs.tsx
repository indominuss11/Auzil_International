import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const fullItems: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <BreadcrumbListJsonLd items={fullItems} />
      <nav aria-label="Breadcrumb" className="border-b border-stone-200 bg-stone-100">
        <ol className="mx-auto flex max-w-8xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-ink-700 sm:px-6 lg:px-8">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-stone-400"
                  />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-charcoal">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="rounded underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
