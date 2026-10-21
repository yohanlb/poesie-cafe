import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/analytics.js",
        destination: "https://cloud.umami.is/script.js",
      },
      {
        source: "/p-relay/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/p-relay/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/p-relay/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // PostHog ingestion endpoints use trailing slashes.
  skipTrailingSlashRedirect: true,
  // Optimize for faster initial page load
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
