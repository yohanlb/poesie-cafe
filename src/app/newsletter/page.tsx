import type { Metadata } from "next";
import BackLink from "@components/BackLink";
import Footer from "@components/Footer";
import NewsletterForm from "@components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Inscrivez-vous à la newsletter Poésie Coffee pour suivre nos actualités, expositions et ateliers créatifs.",
  keywords: ["Poésie Coffee", "newsletter", "inscription", "actualités"],
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[var(--background-blue)] text-white flex flex-col">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8">
        <BackLink href="/" />

        <div className="flex-grow flex flex-col items-center justify-center py-8">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              Newsletter
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Inscrivez-vous à notre newsletter pour suivre nos actualités.
            </p>
          </div>

          <div className="w-full max-w-lg">
            <NewsletterForm variant="inline" showHeading={false} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
