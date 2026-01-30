import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/analytics.js",
        destination: "https://cloud.umami.is/script.js",
      },
    ];
  },
  // Optimize for faster initial page load
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
