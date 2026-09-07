import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats to keep Lighthouse mobile performance high.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
