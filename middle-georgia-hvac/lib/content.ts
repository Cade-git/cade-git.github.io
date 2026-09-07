/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT CONFIG
 *  Every word of copy, every fact, and every contact detail lives here.
 *  To re-skin this site for another HVAC client, edit THIS FILE ONLY.
 *
 *  Facts below were supplied by the client brief (all public). Anything the
 *  brief did not provide is a labeled placeholder — search for "PLACEHOLDER"
 *  or "SWAP" to find every item that needs a real value before launch.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type IconName =
  | "snowflake"
  | "flame"
  | "package"
  | "refresh"
  | "wind"
  | "gauge"
  | "building"
  | "leaf"
  | "wrench"
  | "handshake"
  | "clock"
  | "badge"
  | "shield"
  | "phone";

export type IssueType =
  | "No cooling"
  | "No heat"
  | "Tune-up"
  | "New system quote"
  | "Security cage"
  | "Other";

export const company = {
  /** Full legal/display name used in schema + footer. */
  legalName: "Middle Georgia Heating & Air Conditioning",
  /** Short name used in header and casual copy. */
  shortName: "Middle Georgia Heating & Air",
  ownerFirstName: "Jessie",
  ownerFullName: "Jessie Wooten",
  ownerTitle: "Owner & Lead Technician",
  /** Marketing years — brief lists "37 years in business". */
  yearsInBusiness: 37,
  ownerYearsExperience: "35+",
  foundedYear: 1989,
  veteranBranch: "USMC",
  license: {
    label: "Georgia State License",
    number: "CU 400146",
  },
  bbbRating: "A+",
  /** Real public Google rating per the brief. Displayed as text only — see JsonLd.tsx note. */
  googleRating: 4.1,
  googleReviewCount: 79,
  phone: {
    display: "(478) 781-1984",
    /** E.164 for tel: links + schema. */
    e164: "+14787811984",
  },
  address: {
    street: "5151 Log Cabin Dr",
    city: "Macon",
    state: "GA",
    zip: "31204",
    /** Used for the footer map link. */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=5151+Log+Cabin+Dr+Macon+GA+31204",
  },
  hours: {
    display: "8:00 AM – 8:00 PM, Monday – Saturday",
    sunday: "On-call Sunday",
    /** schema.org OpeningHoursSpecification input. */
    schema: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  },
  /**
   * PLACEHOLDER — the brief did not include an email address.
   * The Request Service form's mailto: fallback sends here. Replace before launch.
   */
  email: "REPLACE_WITH_JESSIES_EMAIL@example.com",
  /** PLACEHOLDER — set to the live domain when deployed. Read from env at build. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://middle-georgia-hvac-demo.vercel.app",
} as const;

export const demoBanner = {
  enabled: true,
  text: `DEMO — built for ${company.shortName}`,
  subtext: "Sample site. Not the company's official website.",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Security Cages", href: "#security-cages" },
    { label: "Service Area", href: "#service-area" },
    { label: "Reviews", href: "#reviews" },
    { label: "Request Service", href: "#request-service" },
  ],
  callLabel: "Call Now",
};

export const hero = {
  eyebrow: `Veteran Owned · Est. ${company.foundedYear}`,
  headline: "Macon's Owner-Operated HVAC Since 1989",
  subhead: `${company.ownerFirstName} answers the phone. ${company.ownerYearsExperience} years experience. Same-day service.`,
  primaryCta: "Call Now",
  secondaryCta: "Request Service",
  /** Order matters — shown as a row of trust badges under the CTAs. */
  trustBadges: [
    { icon: "shield" as IconName, label: "Veteran Owned" },
    { icon: "badge" as IconName, label: `Licensed ${company.license.number}` },
    { icon: "handshake" as IconName, label: `BBB ${company.bbbRating}` },
    { icon: "clock" as IconName, label: `${company.yearsInBusiness} Years` },
  ],
  /** Owner photo card beside the hero. */
  ownerCard: {
    // PLACEHOLDER IMAGE — swap /public/placeholders/owner.svg for a real photo of
    // Jessie (jpg/webp, ~800×1000). No stock faces per the brief.
    imageSrc: "/placeholders/owner.svg",
    imageAlt: `Placeholder for a photo of ${company.ownerFullName}, owner of ${company.shortName}`,
    swapNote: "SWAP: real photo of Jessie",
    name: company.ownerFullName,
    title: company.ownerTitle,
    line: `${company.veteranBranch} veteran · ${company.ownerYearsExperience} years in the trade`,
  },
};

export const differentiators = {
  heading: "Why folks in Middle Georgia call us first",
  items: [
    {
      icon: "wrench" as IconName,
      title: "Owner does the work himself",
      text: `No rotating crew of strangers. ${company.ownerFirstName} shows up, diagnoses it, and fixes it.`,
    },
    {
      icon: "handshake" as IconName,
      title: "Honest pricing",
      text: "You get a straight answer and a fair price. If it's a cheap fix, we tell you so.",
    },
    {
      icon: "clock" as IconName,
      title: "Same-day service",
      text: "Open 8 AM – 8 PM Monday through Saturday, on-call Sunday. Georgia heat doesn't wait, neither do we.",
    },
    {
      icon: "gauge" as IconName,
      title: "All brands serviced",
      text: "Whatever brand is on your slab, we've worked on it. No unit we won't service, no upsell to a brand we prefer.",
    },
  ],
};

export const services = {
  eyebrow: "Residential & Commercial",
  heading: "Heating and cooling, done right the first time",
  intro: `From a capacitor swap to a full system replacement, ${company.shortName} handles it all — every brand, every make.`,
  ctaLabel: "Get a free estimate",
  items: [
    {
      icon: "snowflake" as IconName,
      title: "AC Repair",
      text: "Not cooling, freezing up, or tripping the breaker? Fast diagnosis and same-day repair on all brands.",
    },
    {
      icon: "flame" as IconName,
      title: "Heating & Furnace Repair",
      text: "Gas furnaces, heat pumps, and electric heat. We get the warm air back on before the next cold snap.",
    },
    {
      icon: "package" as IconName,
      title: "New System Sales & Installation",
      text: "Right-sized, energy-efficient systems installed by the owner. Free estimates on every replacement.",
    },
    {
      icon: "refresh" as IconName,
      title: "Heat Pumps",
      text: "Efficient year-round heating and cooling for Middle Georgia's climate. Repair, replace, and upgrade.",
    },
    {
      icon: "flame" as IconName,
      title: "Gas Furnaces",
      text: "Safe, reliable gas heat. Installation, repair, and safety inspections on all furnace brands.",
    },
    {
      icon: "wind" as IconName,
      title: "Central Air Systems",
      text: "Whole-home comfort. Complete central AC installation and replacement with honest, upfront pricing.",
    },
    {
      icon: "gauge" as IconName,
      title: "Precision Tune-Ups",
      text: "Seasonal maintenance that catches small problems before they become big bills. Extend your system's life.",
    },
    {
      icon: "building" as IconName,
      title: "Commercial HVAC",
      text: "Keep your shop, office, or church comfortable. Repair, replacement, and precision tune-ups for commercial systems.",
    },
  ],
};

export const securityCages = {
  eyebrow: "Only from Middle Georgia Heating & Air",
  heading: "Iron security cages for your outdoor unit",
  pitch:
    "Copper thieves can strip an outdoor unit in minutes and turn a repair bill into a replacement bill. Our iron security cages install over your condenser so the only person who can get to it is your technician.",
  // PLACEHOLDER DETAILS — the brief only confirms the cages exist. Verify each
  // bullet with Jessie (materials, sizing, pricing) before launch.
  bullets: [
    "Iron cage installed over your outdoor unit",
    "Sized to your condenser so airflow isn't blocked",
    "Access for service and seasonal tune-ups",
    "A smart add-on for rentals, churches, and vacant properties",
  ],
  ctaLabel: "Ask about a security cage",
  // PLACEHOLDER IMAGE — swap /public/placeholders/security-cage.svg for a real
  // photo of an installed cage (jpg/webp, ~1200×900). Then remove the
  // `unoptimized` prop in SecurityCages.tsx so next/image optimizes it.
  imageSrc: "/placeholders/security-cage.svg",
  imageAlt: "Placeholder for a photo of an iron security cage installed over an outdoor AC condenser",
  swapNote: "SWAP: photo of an installed cage",
};

export const serviceArea = {
  eyebrow: "Where we work",
  heading: "Serving Macon and all of Middle Georgia",
  intro:
    "Based on Log Cabin Drive in Macon, we cover the whole Middle Georgia area. If you're nearby and don't see your town, call — we probably still come out.",
  towns: [
    "Macon",
    "Warner Robins",
    "Byron",
    "Fort Valley",
    "Bonaire",
    "Kathleen",
    "Perry",
    "Centerville",
    "Lizella",
    "Gray",
    "Smarr",
    "Bolingbroke",
    "Forsyth",
  ],
  counties: ["Bibb", "Houston", "Peach", "Monroe"],
  ctaLabel: "Call to confirm your area",
};

export const reviews = {
  eyebrow: "What customers say",
  heading: "Honest work. Same-day service.",
  /** Real public figures from the brief, displayed as plain text. */
  ratingLine: `${company.googleRating} ★ on Google · ${company.googleReviewCount} reviews · BBB ${company.bbbRating}`,
  disclaimer:
    "Sample quotes for demo purposes — to be replaced with real Google reviews before launch.",
  /**
   * SAMPLE — replace with real Google reviews (first name + town only).
   * These paraphrase the two themes the brief cites — honesty and same-day
   * service — and are NOT real customer quotes.
   */
  items: [
    {
      name: "Sample: Tonya",
      town: "Macon",
      quote:
        "Jessie came out the same afternoon I called. Told me it was just a capacitor, fixed it in twenty minutes, and didn't try to sell me a new unit.",
    },
    {
      name: "Sample: Marcus",
      town: "Warner Robins",
      quote:
        "Honest pricing and he explains everything. Second time I've used him and I won't call anyone else.",
    },
    {
      name: "Sample: Linda",
      town: "Perry",
      quote:
        "Our heat went out on a Saturday. He answered the phone himself and had us warm again before dinner.",
    },
    {
      name: "Sample: Dwayne",
      town: "Byron",
      quote:
        "Had him put a cage on the unit at my rental after the last one got stripped. Solid work, fair price.",
    },
  ],
};

export const requestForm = {
  eyebrow: "Request service",
  heading: "Tell us what's going on",
  intro: `Fill this out and it goes straight to ${company.ownerFirstName}. Prefer to talk? Call ${company.phone.display} — a real person answers.`,
  issueTypes: [
    "No cooling",
    "No heat",
    "Tune-up",
    "New system quote",
    "Security cage",
    "Other",
  ] as IssueType[],
  preferredTimes: [
    "As soon as possible",
    "Morning (8 AM – 12 PM)",
    "Afternoon (12 PM – 4 PM)",
    "Evening (4 PM – 8 PM)",
    "Weekend",
  ],
  submitLabel: "Send request",
  /** Subject line for the mailto: fallback / Formspree email. */
  emailSubject: "New service request — website",
  successMessage: `Thanks — your request is on its way to ${company.ownerFirstName}. For emergencies, call ${company.phone.display}.`,
  mailtoNote:
    "Your email app will open with the request pre-filled. Just hit send.",
};

export const footer = {
  tagline: "Veteran Owned & Operated",
  blurb: `Owner-operated heating and air conditioning in Macon, Georgia since ${company.foundedYear}. Honest pricing, same-day service, all brands.`,
  copyrightName: company.legalName,
};

export const seo = {
  title: "HVAC Macon GA | AC Repair & Heating Repair | Middle Georgia Heating & Air",
  description:
    "Owner-operated HVAC in Macon, GA since 1989. Same-day AC repair, heating repair in Warner Robins, new system installs, and iron security cages for outdoor units. Call (478) 781-1984.",
  keywords: [
    "HVAC Macon GA",
    "AC repair Macon",
    "heating repair Warner Robins",
    "air conditioning repair Macon GA",
    "furnace repair Macon",
    "heat pump installation Middle Georgia",
    "AC security cage",
  ],
  ogTitle: "Middle Georgia Heating & Air — Owner-Operated HVAC in Macon Since 1989",
  ogDescription:
    "Same-day AC and heating repair across Macon, Warner Robins, and Middle Georgia. Veteran owned. Licensed CU 400146. Call (478) 781-1984.",
};
