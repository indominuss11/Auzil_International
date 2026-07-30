"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types";

export function ProductsDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!item.children) return null;

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-current={isActive ? "page" : undefined}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded px-1 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
          isActive ? "text-sage" : "text-ink-900 hover:text-sage"
        }`}
      >
        {item.label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          aria-label={`${item.label} categories`}
          className="absolute left-1/2 top-full z-40 mt-2 w-80 -translate-x-1/2 rounded-md border border-stone-200 bg-white p-2 shadow-lg"
        >
          {item.children.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                aria-current={isChildActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                  isChildActive ? "bg-stone-100" : "hover:bg-stone-100"
                }`}
              >
                <span
                  className={`block text-sm font-medium ${isChildActive ? "text-sage" : "text-ink-900"}`}
                >
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-xs text-stone">{child.description}</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
