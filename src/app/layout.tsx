import type { Metadata } from "next";
import Script from "next/script";
import { SEO_KEYWORDS } from "./constants/seo-keywords";
import "./globals.css";
import { instrumentSerif } from "@lib/fonts";

const SITE_TITLE = "Poésie Coffee";
const SITE_DESCRIPTION = "Poésie est un Coffee Shop et un Lieu de Rencontres Artistiques au 10 Passage Thiéré, Paris 11ème. Découvrez nos expositions, ateliers créatifs et upcycling dans un cadre convivial.";
const SHORT_DESCRIPTION =
  "Poésie est un Coffee Shop et un Lieu de Rencontres Artistiques, Expositions, Ateliers Créatifs & Upcycling";

export const metadata: Metadata = {
  metadataBase: new URL('https://poesiecoffee.com'),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  publisher: SITE_TITLE,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/Favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Optional_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Optional_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/Apple_touch_icon_180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SHORT_DESCRIPTION,
    type: "website",
    locale: "fr_FR",
    siteName: SITE_TITLE,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SHORT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
          <html lang="fr">
            <body className={instrumentSerif.className}>
              {children}
              <Script
                src="/analytics.js"
                data-website-id="cf950c5d-0a94-43e6-8cec-b78ea9d038fa"
                strategy="lazyOnload"
              />
            </body>
          </html>
  );
}
