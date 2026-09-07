import { differentiators } from "@/lib/content";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Differentiators() {
  return (
    <section aria-labelledby="diff-heading" className="border-b border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 id="diff-heading" className="text-center text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          {differentiators.heading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.items.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.06} className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ember-50 text-ember-600">
                <Icon name={d.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-navy-900">{d.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-700">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
