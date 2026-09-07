import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company, footer, nav, serviceArea } from "@/lib/content";
import VeteranBadge from "./VeteranBadge";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <VeteranBadge size={72} />
            <div>
              <p className="text-lg font-bold text-white">{company.shortName}</p>
              <p className="text-sm font-semibold text-brass-400">{footer.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{footer.blurb}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold">
            <ShieldCheck className="h-4 w-4 text-brass-400" aria-hidden="true" />
            {company.license.label}: {company.license.number}
          </p>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${company.phone.e164}`} className="tap inline-flex items-center gap-2 font-semibold text-white hover:text-ember-400">
                <Phone className="h-4 w-4 text-ember-400" aria-hidden="true" /> {company.phone.display}
              </a>
            </li>
            <li>
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" aria-hidden="true" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" aria-hidden="true" />
              <span>
                {company.hours.display}
                <br />
                {company.hours.sunday}
              </span>
            </li>
          </ul>
        </address>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Site</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="tap inline-flex items-center hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Service area</h2>
          <p className="mt-4 text-sm leading-relaxed">{serviceArea.towns.join(" · ")}</p>
          <p className="mt-3 text-sm leading-relaxed text-navy-200">
            {serviceArea.counties.map((c) => `${c} County`).join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-24 pt-5 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:pb-5">
          <p>
            © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
          </p>
          <p>
            {footer.tagline} · Est. {company.foundedYear} · {company.address.city}, {company.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
