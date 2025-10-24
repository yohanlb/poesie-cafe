import Footer from "@components/Footer";
import Link from "next/link";
import "./homepage.css";

export default function Home() {
  return (
    <main className="h-dvh bg-background text-white flex flex-col max-w-screen-2xl mx-auto">
      <div className="flex-1 flex flex-col spacing-section">
        {/* Header: Title and Address */}
        <header className="flex justify-between items-start spacing-hero mt-2">
          <h1 className="text-title font-instrument-serif -mt-4 animate-fade-in-2">
            Poésie
          </h1>
          <div className="text-address font-instrument-serif text-right animate-fade-in-3">
            <p>10 Passage Thiéré</p>
            <p>75011, Paris</p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <p className="text-hero font-instrument-serif w-full sm:max-w-[85%] animate-fade-in-1">
            <span className="line-break-1">Poésie est un coffee shop,</span>{" "}
            <span className="line-break-2">et un lieu de rencontres</span>{" "}
            <span className="line-break-3">
              artistiques.{" "}
              <Link
                href="/agenda"
                className="text-link font-instrument-serif decoration-1 underline underline-offset-4 hover:decoration-2 animate-fade-in-4 no-break"
              >
                agenda
              </Link>
            </span>
          </p>
        </div>

        {/* Bottom Text */}
        <p className="text-subtitle font-instrument-serif mt-auto animate-fade-in-5">
          Expositions, Ateliers Créatifs & Upcycling
        </p>
      </div>

      <Footer />
    </main>
  );
}
