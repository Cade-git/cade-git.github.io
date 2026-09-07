import type { NextConfig } from "next";

/**
 * Two deploy modes, no code changes between them:
 *  - Vercel (default): `next build` — server-rendered, zero config.
 *  - Static export:    NEXT_OUTPUT=export NEXT_PUBLIC_BASE_PATH=/hvac-demo next build
 *    writes a plain HTML site to ./out for GitHub Pages or any static host.
 */
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isExport ? { output: "export" as const, basePath, trailingSlash: true } : {}),
  images: {
    // Serve modern formats to keep Lighthouse mobile performance high.
    formats: ["image/avif", "image/webp"],
    // Static hosts have no image optimizer; images are served as-is.
    ...(isExport ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
