import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-18 w-full flex items-center justify-start">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/poesie-logo.svg"
          alt="Poésie"
          width={80}
          height={32}
          priority
          className="w-20 h-auto"
        />
      </Link>
    </nav>
  );
}
