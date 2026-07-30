import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
import { ProductsDropdown } from "./ProductsDropdown";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/90">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <Image
            src="/images/brand/auzil-wordmark-trimmed.png"
            alt="Auzil International"
            width={926}
            height={434}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <ProductsDropdown key={item.href} item={item} />
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-a-quote"
            className="hidden rounded-full bg-sage px-4 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:inline-block"
          >
            Request a Quote
          </Link>
          <MobileNav items={mainNav} />
        </div>
      </div>
    </header>
  );
}
