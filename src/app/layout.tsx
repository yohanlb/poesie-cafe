import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { SEO_KEYWORDS } from "./constants/seo-keywords";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

const SITE_TITLE = "Poésie Coffee";
const SITE_DESCRIPTION = "Café & Ateliers à Paris";
const SHORT_DESCRIPTION =
  "Poésie est un Coffee Shop et un Lieu de Rencontres Artistiques, Expositions, Ateliers Créatifs & Upcycling";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  publisher: SITE_TITLE,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${ibmPlexSans.className} ${instrumentSerif.variable}`}>
        {children}
        <Script
          src="/analytics.js"
          data-website-id="cf950c5d-0a94-43e6-8cec-b78ea9d038fa"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
