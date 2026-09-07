"use client";

import { useState, type FormEvent } from "react";
import { Phone, Send } from "lucide-react";
import { company, requestForm } from "@/lib/content";
import SectionHeading from "./SectionHeading";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LEAD DELIVERY — THIS IS THE WHOLE POINT OF THE SITE.
 *
 *  Current behavior (demo): builds a mailto: link to `company.email` and opens
 *  the visitor's mail app with the request pre-filled. Zero backend, works on
 *  Vercel with no config, but depends on the visitor having a mail client.
 *
 *  ── OPTION A: Formspree (recommended, ~5 minutes, free tier) ────────────────
 *  1. Create a form at https://formspree.io → copy the form ID.
 *  2. Add NEXT_PUBLIC_FORMSPREE_ID=<id> to Vercel → Settings → Environment Variables.
 *  3. That's it — `submitViaFormspree` below is already wired and takes over
 *     automatically when the env var is present.
 *  4. In Formspree → Integrations, turn on SMS (or use an email-to-SMS gateway
 *     such as <number>@txt.att.net / @vtext.com / @tmomail.net) so every lead
 *     hits Jessie's phone as a text within seconds.
 *
 *  ── OPTION B: Resend + Twilio (fully custom) ─────────────────────────────────
 *  1. Create app/api/lead/route.ts (a Route Handler).
 *  2. In it, validate the body, then:
 *       await resend.emails.send({ from, to: company.email, subject, text })
 *       await twilio.messages.create({ to: JESSIE_CELL, from: TWILIO_NUMBER, body })
 *  3. Replace the mailto branch in `onSubmit` with
 *       fetch("/api/lead", { method: "POST", body: JSON.stringify(data) })
 *  4. Add RESEND_API_KEY / TWILIO_* as server-side env vars on Vercel.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

function buildBody(data: Record<string, string>) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Address: ${data.address}`,
    `Issue: ${data.issue}`,
    `Preferred time: ${data.preferredTime}`,
    "",
    "Message:",
    data.message || "(none)",
  ].join("\n");
}

async function submitViaFormspree(data: Record<string, string>) {
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _subject: `${requestForm.emailSubject}: ${data.issue} — ${data.name}` }),
  });
  if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
}

function submitViaMailto(data: Record<string, string>) {
  const subject = encodeURIComponent(`${requestForm.emailSubject}: ${data.issue} — ${data.name}`);
  const body = encodeURIComponent(buildBody(data));
  window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
}

export default function RequestServiceForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Honeypot — bots fill hidden fields; humans never see it.
    if (fd.get("company_website")) return;

    const data: Record<string, string> = {};
    fd.forEach((v, k) => {
      if (k !== "company_website") data[k] = String(v).trim();
    });

    setStatus("sending");
    try {
      if (FORMSPREE_ID) {
        await submitViaFormspree(data);
      } else {
        submitViaMailto(data);
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "tap w-full rounded-lg border border-navy-200 bg-white px-3.5 py-3 text-base text-navy-900 placeholder:text-navy-300 focus:border-ember-500";
  const labelCls = "block text-sm font-semibold text-navy-800";

  return (
    <section id="request-service" aria-labelledby="form-heading" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading
            id="form-heading"
            align="left"
            eyebrow={requestForm.eyebrow}
            heading={requestForm.heading}
            intro={requestForm.intro}
          />
          <div className="mt-8 rounded-2xl bg-navy-800 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-navy-200">Fastest option</p>
            <a
              href={`tel:${company.phone.e164}`}
              className="tap mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ember-500 px-5 py-4 text-lg font-bold hover:bg-ember-600"
            >
              <Phone className="h-5 w-5" aria-hidden="true" /> {company.phone.display}
            </a>
            <p className="mt-4 text-sm text-navy-100">
              {company.hours.display}
              <br />
              {company.hours.sunday}
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate={false} className="rounded-2xl border border-navy-100 p-5 shadow-soft sm:p-7" aria-describedby="form-note">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelCls}>
                Name <span aria-hidden="true" className="text-ember-600">*</span>
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={`mt-1.5 ${inputCls}`} />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>
                Phone <span aria-hidden="true" className="text-ember-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="(478) 555-0100"
                className={`mt-1.5 ${inputCls}`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className={labelCls}>
                Service address <span aria-hidden="true" className="text-ember-600">*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
                placeholder="Street, city"
                className={`mt-1.5 ${inputCls}`}
              />
            </div>
            <div>
              <label htmlFor="issue" className={labelCls}>
                What's going on? <span aria-hidden="true" className="text-ember-600">*</span>
              </label>
              <select id="issue" name="issue" required defaultValue="" className={`mt-1.5 ${inputCls}`}>
                <option value="" disabled>
                  Select an issue
                </option>
                {requestForm.issueTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="preferredTime" className={labelCls}>
                Preferred time
              </label>
              <select id="preferredTime" name="preferredTime" defaultValue={requestForm.preferredTimes[0]} className={`mt-1.5 ${inputCls}`}>
                {requestForm.preferredTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelCls}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Brand of unit, how long it's been happening, gate codes, anything that helps."
                className={`mt-1.5 ${inputCls}`}
              />
            </div>
            {/* Honeypot (hidden from humans + screen readers) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="tap mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 px-6 py-4 text-lg font-bold text-white hover:bg-navy-900 disabled:opacity-60 sm:w-auto"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            {status === "sending" ? "Sending…" : requestForm.submitLabel}
          </button>

          <p id="form-note" className="mt-3 text-xs text-navy-500">
            {FORMSPREE_ID ? "Sent securely. We never share your information." : requestForm.mailtoNote}
          </p>

          <div role="status" aria-live="polite" className="mt-3 text-sm font-semibold">
            {status === "sent" && <p className="text-green-700">{requestForm.successMessage}</p>}
            {status === "error" && (
              <p className="text-ember-700">
                Something went wrong. Please call {company.phone.display} and we'll get you taken care of.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
