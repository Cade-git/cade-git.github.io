import Image from "next/image";
import { Check, Phone, ShieldCheck } from "lucide-react";
import { company, securityCages } from "@/lib/content";
import Reveal from "./Reveal";

export default function SecurityCages() {
  return (
    <section id="security-cages" aria-labelledby="cages-heading" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl">
              <Image
                src={securityCages.imageSrc}
                alt={securityCages.imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                // SVG placeholder — remove `unoptimized` once a real jpg/webp is in place.
                unoptimized
              />
              <span className="absolute left-3 top-3 rounded-md bg-brass-400 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-950">
                {securityCages.swapNote}
              </span>
            </div>
            <figcaption className="sr-only">{securityCages.imageAlt}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ember-400">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {securityCages.eyebrow}
          </p>
          <h2 id="cages-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {securityCages.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">{securityCages.pitch}</p>
          <ul className="mt-6 space-y-3">
            {securityCages.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember-500">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-navy-50">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${company.phone.e164}`}
              className="tap inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-6 py-3.5 font-bold text-white hover:bg-ember-600"
            >
              <Phone className="h-5 w-5" aria-hidden="true" /> {company.phone.display}
            </a>
            <a
              href="#request-service"
              className="tap inline-flex items-center justify-center rounded-xl border-2 border-white/25 px-6 py-3.5 font-bold text-white hover:bg-white/10"
            >
              {securityCages.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
