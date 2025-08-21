import Image from "next/image";
import Footer from "@components/Footer";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh justify-between flex flex-col">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>
      {/* Logo and subtitle group */}
      <div className="flex-grow flex flex-col items-center justify-center mx-8">
        {/* Logo */}
        <Image
          src="/images/poesie-logo.svg"
          alt="Poésie"
          width={300}
          height={120}
          priority
          className="w-full h-auto max-w-[500px] lg:max-w-[600px] my-2"
        />

        {/* Subtitle */}
        <div className="flex flex-col items-center leading-tight text-md md:text-xl lg:text-2xl">
          <div>CAFÉ / THÉ / ATELIERS</div>
          <div>®2025 PARIS</div>
        </div>

        {/* Separator */}
        <div className="h-28 md:h-36"></div>

        {/* Opening hours */}
        <div className="flex flex-col items-center font-normal leading-tight text-md w-full max-w-[400px] lg:max-w-[500px] md:leading-[30px] md:text-xl lg:text-2xl">
          <p className="flex justify-between w-full">
            <span>MERCREDI - VENDREDI</span>
            <span>8:30 – 17:30</span>
          </p>
          <p className="flex justify-between w-full">
            <span>SAMEDI - DIMANCHE</span>
            <span>10:00 – 18:00</span>
          </p>
        </div>

        {/* Agenda Button */}
        <div className="mt-8">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 text-md px-8 py-3"
          >
            <Link href="/agenda" className="uppercase">
              Voir l&apos;Agenda
            </Link>
          </Button>
        </div>
      </div>

      {/* Address */}
      <address className="not-italic">
        <a
          href="https://maps.app.goo.gl/xykKssnuFmrHMATy7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md md:text-xl lg:text-2xl text-center leading-5 md:leading-8 font-normal md:mb-2 hover:underline"
        >
          <p>10 PASSAGE THIÉRÉ,</p>
          <p>75011, PARIS</p>
        </a>
      </address>

      <Footer />
    </main>
  );
}
