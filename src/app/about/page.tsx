import type { Metadata } from "next";
import BackLink from "@components/BackLink";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Crédits et informations sur Poésie Coffee - Design par Axelle Brisard, développé par Yohan Le Breton",
  keywords: [
    "Poésie Coffee",
    "crédits",
    "design",
    "développement",
    "Yohan Le Breton",
    "Axelle Brisard",
  ],
};

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--background-blue)] text-white flex flex-col">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <BackLink />

        <div className="flex-grow flex flex-col items-center justify-center py-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-white tracking-wide">
              À propos
            </h1>
          </div>

          {/* Content */}
          <div className="w-full max-w-2xl space-y-12">
            {/* Address */}
            <div className="text-center">
              <p className="text-xl md:text-2xl font-instrument-serif text-white/80">
                10 Passage Thiéré
              </p>
              <p className="text-xl md:text-2xl font-instrument-serif text-white/80">
                75011, Paris
              </p>
            </div>

            {/* Instagram Link */}
            <div className="text-center">
              <a
                href="https://instagram.com/poesiecoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-instrument-serif text-white/80 hover:text-white transition-colors underline underline-offset-2 decoration-1"
                data-umami-event="Click on Instagram"
              >
                <Instagram size={28} />
                @poesiecoffee
              </a>
            </div>

            {/* Credits Section */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-instrument-serif text-white">
                Crédits
              </h2>

              <div className="space-y-4">
                <p className="text-lg md:text-xl font-instrument-serif text-white/80">
                  Design par <span className="text-white">Axelle Brisard</span>
                </p>

                <p className="text-lg md:text-xl font-instrument-serif text-white/80">
                  Développé par{" "}
                  <a
                    href="https://yohanlebreton.com"
                    target="_blank"
                    rel="dofollow"
                    className="text-white/80 hover:text-white/100 transition-colors underline underline-offset-2  decoration-1"
                    data-umami-event="Click on Yohan Le Breton Portfolio"
                  >
                    Yohan Le Breton
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
