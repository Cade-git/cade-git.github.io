import { company, serviceArea, services } from "@/lib/content";

/**
 * schema.org HVACBusiness (a subtype of LocalBusiness) with the real NAP data.
 *
 * NOTE: `aggregateRating` is intentionally omitted. Google's guidelines
 * discourage self-serving review markup unless the reviews themselves are
 * displayed and sourced on-page. Once real Google reviews are wired in, you can
 * add: aggregateRating: { "@type": "AggregateRating", ratingValue, reviewCount }.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${company.siteUrl}/#business`,
    name: company.legalName,
    alternateName: company.shortName,
    url: company.siteUrl,
    telephone: company.phone.e164,
    image: `${company.siteUrl}/opengraph-image`,
    foundingDate: String(company.foundedYear),
    founder: {
      "@type": "Person",
      name: company.ownerFullName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: company.hours.schema.days,
        opens: company.hours.schema.opens,
        closes: company.hours.schema.closes,
      },
    ],
    areaServed: [
      ...serviceArea.towns.map((t) => ({ "@type": "City", name: `${t}, GA` })),
      ...serviceArea.counties.map((c) => ({
        "@type": "AdministrativeArea",
        name: `${c} County, GA`,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `${company.license.label} ${company.license.number}`,
      recognizedBy: { "@type": "Organization", name: "State of Georgia" },
    },
    slogan: "Owner-operated HVAC in Macon since 1989",
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values come from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
