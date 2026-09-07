import Image from "next/image";
import { Phone, ClipboardList } from "lucide-react";
import { company, hero } from "@/lib/content";
import Icon from "./Icon";
import VeteranBadge from "./VeteranBadge";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-ember-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-400" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-100 sm:text-xl">{hero.subhead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${company.phone.e164}`}
              className="tap inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-ember-500/25 hover:bg-ember-600 active:bg-ember-700"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {hero.primaryCta} · {company.phone.display}
            </a>
            <a
              href="#request-service"
              className="tap inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 px-6 py-4 text-lg font-bold text-white hover:bg-white/10"
            >
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3" aria-label="Trust badges">
            {hero.trustBadges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-navy-50"
              >
                <Icon name={b.icon} className="h-4 w-4 text-brass-400" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Owner card — PLACEHOLDER photo, swap in lib/content.ts */}
        <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl">
            <Image
              src={hero.ownerCard.imageSrc}
              alt={hero.ownerCard.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 384px, 100vw"
              className="object-cover"
              // SVG placeholder — remove `unoptimized` once a real jpg/webp is in place.
              unoptimized
            />
            <span className="absolute left-3 top-3 rounded-md bg-brass-400 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-950">
              {hero.ownerCard.swapNote}
            </span>
          </div>
          <div className="absolute -bottom-6 -left-4 sm:-left-8">
            <VeteranBadge size={104} className="drop-shadow-xl" />
          </div>
          <figcaption className="mt-8 pl-24 sm:pl-28">
            <span className="block text-lg font-bold">{hero.ownerCard.name}</span>
            <span className="block text-sm text-navy-100">{hero.ownerCard.title}</span>
            <span className="block text-sm text-navy-200">{hero.ownerCard.line}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
