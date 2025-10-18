import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-[var(--background-blue)] text-white flex flex-col max-w-screen-2xl mx-auto">
      <div className="flex-1 flex flex-col p-[clamp(1rem,3vw,4rem)]">
        {/* Header: Title and Address */}
        <header className="flex justify-between items-start mb-[clamp(2rem,5vh,6rem)] mt-2">
          {/* -mt-2 for optical alignment with large font size */}
          <h1 className="text-[clamp(4rem,10vw,6.5rem)] leading-[1.3] font-instrument-serif -mt-4">
            Poésie
          </h1>
          <div className="text-[clamp(1.2rem,3vw,3.5rem)] leading-[1.3] font-instrument-serif text-right">
            <p>10 Passage Thiéré</p>
            <p>75011, Paris</p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[clamp(2.5rem,7vw,9rem)] leading-[0.9] font-instrument-serif w-full min-[400px]:max-w-[75%]">
            Poésie est un coffee shop, et un lieu de rencontres artistiques.{" "}
            <Link
              href="/agenda"
              className="text-[clamp(1.3rem,2.5vw,3.2rem)] leading-[1.3] font-instrument-serif decoration-1
 underline underline-offset-4 hover:decoration-2"
            >
              agenda
            </Link>
          </p>
        </div>

        {/* Bottom Text */}
        <p className="text-[clamp(1.8rem,5vw,5.5rem)] leading-[1.3] font-instrument-serif mt-auto">
          Expositions, Ateliers Créatifs & Upcycling
        </p>
      </div>

      <Footer />
    </main>
  );
}
