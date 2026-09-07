"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { company, nav } from "@/lib/content";

/**
 * Mobile-only floating click-to-call. Hidden on md+ where the header button is
 * always in view, and hidden on mobile whenever a section's own call button is
 * on screen, so the page never shows stacked call buttons or covers content
 * that already has a CTA.
 */
export default function FloatingCall() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('main a[href^="tel:"], footer a[href^="tel:"]'),
    );
    if (targets.length === 0) return;
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) onScreen.add(e.target);
          else onScreen.delete(e.target);
        }
        setVisible(onScreen.size === 0);
      },
      { threshold: 0.5 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={`tel:${company.phone.e164}`}
      aria-label={`${nav.callLabel} ${company.phone.display}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`tap fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-3.5 text-base font-bold text-white shadow-2xl shadow-navy-900/40 ring-4 ring-white/70 transition-all duration-200 hover:bg-ember-600 active:bg-ember-700 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {nav.callLabel}
    </a>
  );
}
