import { ImageResponse } from "next/og";
import { company, hero } from "@/lib/content";

// Generated at build time — no image asset to maintain. Swap for a real
// 1200×630 photo by dropping `opengraph-image.jpg` in /app and deleting this file.
export const dynamic = "force-static";
export const alt = `${company.shortName} — ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a1730 0%, #14294a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c8431f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            MG
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{company.shortName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {hero.headline}
          </div>
          <div style={{ fontSize: 32, color: "#d6dfeb" }}>{hero.subhead}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#aebfd6" }}>
          <div>{`Veteran Owned · Licensed ${company.license.number} · BBB ${company.bbbRating}`}</div>
          <div style={{ color: "#f2703f", fontWeight: 700 }}>{company.phone.display}</div>
        </div>
      </div>
    ),
    size,
  );
}
