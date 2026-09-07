"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { company, nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow ${
        scrolled ? "shadow-soft border-b border-navy-100" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 tap">
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-lg bg-navy-800 text-sm font-extrabold tracking-tight text-white"
          >
            MG
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-navy-900 sm:text-lg">{company.shortName}</span>
            <span className="hidden text-xs font-medium text-navy-500 sm:block">
              Macon, GA · Since {company.foundedYear}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="tap inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Always-visible click-to-call */}
          <a
            href={`tel:${company.phone.e164}`}
            className="tap inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-ember-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-ember-600 active:bg-ember-700 sm:px-4"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="sm:hidden">{nav.callLabel}</span>
            <span className="hidden sm:inline">{company.phone.display}</span>
          </a>
          <button
            type="button"
            className="tap inline-flex items-center justify-center rounded-lg border border-navy-100 text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-navy-100 bg-white lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="tap flex items-center rounded-md px-3 py-3 text-base font-semibold text-navy-800 hover:bg-navy-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
