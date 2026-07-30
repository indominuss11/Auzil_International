"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import type { NavItem } from "@/types";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape key + focus trap while open.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="rounded p-2 text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 top-16 z-50 overflow-y-auto bg-ivory px-4 py-6"
        >
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
              <li key={item.href}>
                {item.children ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block flex-1 rounded px-3 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                          isActive ? "text-sage" : "text-ink-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expandedGroup === item.label}
                        aria-controls={`mobile-group-${item.label}`}
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() =>
                          setExpandedGroup((v) => (v === item.label ? null : item.label))
                        }
                        className="rounded p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 transition-transform ${
                            expandedGroup === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {expandedGroup === item.label && (
                      <ul id={`mobile-group-${item.label}`} className="ml-4 space-y-1 border-l border-stone-300 pl-4">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={isChildActive ? "page" : undefined}
                              className={`block rounded px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                                isChildActive ? "text-sage font-medium" : "text-ink-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded px-3 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                      isActive ? "text-sage" : "text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              );
            })}
          </ul>
          <Link
            href="/request-a-quote"
            className="mt-6 block rounded-full bg-sage px-5 py-3 text-center text-base font-medium text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </div>
  );
}
