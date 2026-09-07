import { Phone } from "lucide-react";
import { company, nav } from "@/lib/content";

/** Mobile-only floating click-to-call. Hidden on md+ where the header button is always in view. */
export default function FloatingCall() {
  return (
    <a
      href={`tel:${company.phone.e164}`}
      aria-label={`${nav.callLabel} ${company.phone.display}`}
      className="tap fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-3.5 text-base font-bold text-white shadow-2xl shadow-navy-900/40 ring-4 ring-white/70 hover:bg-ember-600 active:bg-ember-700 md:hidden"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {nav.callLabel}
    </a>
  );
}
