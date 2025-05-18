import Image from "next/image";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="min-h-svh justify-between flex flex-col">
      {/* Future Navbar */}
      <nav className="h-18 w-full"></nav>
      {/* Logo and subtitle group */}
      <div className="flex-grow flex flex-col items-center justify-center gap-5 md:gap-8 mx-8">
        <Image
          src="/images/poesie-logo.svg"
          alt="Poésie"
          width={300}
          height={120}
          priority
          className="w-full h-auto max-w-[500px] lg:max-w-[600px]"
        />
        <div className="flex flex-col items-center text-md leading-[17px] w-full max-w-[400px] lg:max-w-[500px] md:leading-[30px] font-[400] md:text-xl lg:text-2xl gap-25">
          <div className="flex flex-col items-center gap-0.5">
            <div>CAFÉ / THÉ / ATELIERS</div>
            <div>®2025 PARIS</div>
          </div>
          <div className="flex flex-col items-center w-full font-normal gap-0.5">
            <p className="flex justify-between w-full ">
              <span>MERCREDI - VENDREDI</span> <span>8:30 – 17:30</span>
            </p>
            <p className="flex justify-between w-full ">
              <span>SAMEDI - DIMANCHE</span> <span>10:00 – 18:00</span>
            </p>
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
