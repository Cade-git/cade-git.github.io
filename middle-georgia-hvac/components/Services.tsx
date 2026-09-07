import { Phone } from "lucide-react";
import { company, services } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading id="services-heading" eyebrow={services.eyebrow} heading={services.heading} intro={services.intro} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 4) * 0.05}
              className="group rounded-xl border border-navy-100 bg-white p-5 transition-colors hover:border-ember-400 hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-800 text-white transition-colors group-hover:bg-ember-500">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-700">{s.text}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-navy-50 p-6 sm:flex-row sm:gap-5">
          <p className="text-center font-semibold text-navy-800 sm:text-left">
            Free estimates on every replacement. Not sure what you need? Just call.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={`tel:${company.phone.e164}`}
              className="tap inline-flex items-center justify-center gap-2 rounded-lg bg-ember-500 px-5 py-3 font-bold text-white hover:bg-ember-600"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {company.phone.display}
            </a>
            <a
              href="#request-service"
              className="tap inline-flex items-center justify-center rounded-lg border-2 border-navy-800 px-5 py-3 font-bold text-navy-900 hover:bg-navy-800 hover:text-white"
            >
              {services.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
