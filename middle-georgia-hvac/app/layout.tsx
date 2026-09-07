import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company, demoBanner, seo } from "@/lib/content";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  applicationName: company.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: company.shortName,
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
  robots: {
    // While the demo banner is on, keep search engines out so the sample never
    // competes with the client's real listing. Setting `demoBanner.enabled = false`
    // in lib/content.ts removes the banner AND makes the site indexable.
    index: !demoBanner.enabled,
    follow: !demoBanner.enabled,
  },
  other: {
    "geo.region": "US-GA",
    "geo.placename": company.address.city,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1f3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
