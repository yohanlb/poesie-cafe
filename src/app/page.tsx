import Image from "next/image";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="min-h-svh justify-between flex flex-col">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>
      {/* Logo and subtitle group */}
      <div className="flex-grow flex flex-col items-center justify-center gap-5 md:gap-8">
        <Image
          src="/images/poesie-logo.svg"
          alt="Poésie"
          width={300}
          height={120}
          priority
          className="w-auto h-auto max-w-full md:w-[500px] lg:w-[600px]"
        />
        <div className="flex flex-col items-center text-md leading-[17px] md:leading-[30px] font-[400] md:text-xl lg:text-2xl">
          <div>CAFÉ / THÉ / ATELIERS</div>
          <div>®2025 PARIS</div>
          <div className="flex flex-col items-center mt-2 text-sm md:text-base">
            <span>MERCREDI À VENDREDI 8:30 – 17:30</span>
            <span>SAMEDI / DIMANCHE 10:00 – 18:00</span>
          </div>
        </div>
      </div>
      {/* Address section */}
      <a
        href="https://maps.app.goo.gl/xykKssnuFmrHMATy7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md md:text-xl lg:text-2xl text-center leading-5 md:leading-8 font-[400] md:mb-2 hover:underline"
      >
        <p>10 PASSAGE THIÉRÉ,</p>
        <p>75011, PARIS</p>
      </a>
      <Footer />
    </main>
  );
}
