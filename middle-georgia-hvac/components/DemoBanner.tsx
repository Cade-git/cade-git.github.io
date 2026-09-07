import { demoBanner } from "@/lib/content";

/** DEMO ONLY — delete this component (and its import in page.tsx) when the client buys. */
export default function DemoBanner() {
  if (!demoBanner.enabled) return null;
  return (
    <div
      role="note"
      className="bg-brass-400 text-navy-950 text-center text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5"
    >
      {demoBanner.text}
      <span className="hidden sm:inline font-normal opacity-80"> · {demoBanner.subtext}</span>
    </div>
  );
}
