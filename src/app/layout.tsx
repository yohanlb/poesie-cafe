import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { SEO_KEYWORDS } from "./constants/seo-keywords";
import "./globals.css";

const SITE_TITLE = "Poésie Café - Café & Ateliers à Paris";
const SITE_DESCRIPTION = ""; // TODO: Add description
const SHORT_DESCRIPTION = ""; // TODO: Add short description

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Poésie Café",
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Poésie Café" }],
  creator: "Poésie Café",
  publisher: "Poésie Café",
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
    siteName: "Poésie Café",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SHORT_DESCRIPTION,
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
  verification: {
    google: "", // TODO: Add Google Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
