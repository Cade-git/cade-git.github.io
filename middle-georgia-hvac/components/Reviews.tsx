import { BadgeCheck, Quote } from "lucide-react";
import { reviews } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * SAMPLE REVIEWS — replace with real Google reviews before launch.
 * The quotes in lib/content.ts are illustrative and clearly labeled "Sample".
 * The stats line (79 reviews / BBB A+ / 37 years) IS real public data from the brief.
 */
export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="border-y border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading id="reviews-heading" eyebrow={reviews.eyebrow} heading={reviews.heading} />
        <p className="mt-4 flex items-center justify-center gap-2 text-center font-semibold text-navy-800">
          <BadgeCheck className="h-5 w-5 text-ember-500" aria-hidden="true" />
          {reviews.ratingLine}
        </p>
        <p className="mx-auto mt-3 max-w-md rounded-md border border-dashed border-brass-400 bg-white px-3 py-1.5 text-center text-xs font-medium text-navy-700">
          {reviews.disclaimer}
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.items.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 0.06} className="flex flex-col rounded-xl border border-navy-100 bg-white p-5 shadow-soft">
              <Quote className="h-6 w-6 text-ember-400" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-800">
                <p>“{r.quote}”</p>
              </blockquote>
              <footer className="mt-4 text-sm">
                <span className="font-bold text-navy-900">{r.name}</span>
                <span className="text-navy-500"> · {r.town}</span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
