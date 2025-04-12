import Image from "next/image";

export default function Home() {
  return (
    <main className={`min-h-screen justify-between flex flex-col`}>
      {/* Future Navbar */}
      <nav className="h-8 w-full"></nav>
      {/* Logo and subtitle group */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="mb-4">
          <Image
            src="/images/poesie-logo.svg"
            alt="Poésie"
            width={300}
            height={120}
            priority
            className="w-auto h-auto max-w-full"
          />
        </div>
        <div className="flex flex-col items-center text-md leading-[17px] font-[300]">
          <div>CAFÉ / THÉ / ATELIERS</div>
          <div>®2025 PARIS</div>
          <div>OPENING SOON</div>
        </div>
      </div>
      {/* Address section */}
      <div className="p-5 mb-5 text-md text-center leading-[17px] font-[300]">
        <p>10 PASSAGE THIÉRÉ,</p>
        <p>75011, PARIS</p>
      </div>
      <footer className="h-8"></footer>
    </main>
  );
}
