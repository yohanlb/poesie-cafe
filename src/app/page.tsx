import Image from "next/image";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className={`min-h-screen justify-between flex flex-col`}>
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
          <div>OPENING SOON</div>
        </div>
      </div>
      {/* Address section */}
      <div className="text-md md:text-xl lg:text-2xl text-center leading-[17px] md:leading-[24px] font-[400] md:mb-2">
        <p>10 PASSAGE THIÉRÉ,</p>
        <p>75011, PARIS</p>
      </div>
      <Footer />
    </main>
  );
}
