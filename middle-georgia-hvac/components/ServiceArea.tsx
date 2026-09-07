import { MapPin, Phone } from "lucide-react";
import { company, serviceArea } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-heading" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading id="area-heading" eyebrow={serviceArea.eyebrow} heading={serviceArea.heading} intro={serviceArea.intro} />
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-navy-100 p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-500">
              <MapPin className="h-4 w-4 text-ember-500" aria-hidden="true" /> Cities & towns
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {serviceArea.towns.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-navy-100 bg-navy-50 px-3.5 py-2 text-sm font-semibold text-navy-800"
                >
                  {t}, GA
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-navy-800 p-6 text-white">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy-200">Counties</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {serviceArea.counties.map((c) => (
                  <li key={c} className="rounded-lg bg-white/10 px-3.5 py-2 text-sm font-semibold">
                    {c} County
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`tel:${company.phone.e164}`}
              className="tap inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-5 py-3.5 font-bold hover:bg-ember-600"
            >
              <Phone className="h-5 w-5" aria-hidden="true" /> {serviceArea.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
