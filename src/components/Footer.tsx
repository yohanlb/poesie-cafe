import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-11 flex justify-between items-center px-4">
      <p className="text-[10px] md:text-xs text-white/40 md:text-white/60 text-center flex-1">
        Design by Axelle Brisard / Developed by{" "}
        <a
          href="https://yohanlebreton.com"
          target="_blank"
          rel="dofollow"
          className="hover:text-white/60 md:hover:text-white/80 transition-colors"
        >
          Yohan Le Breton
        </a>
      </p>
      <a
        href="https://www.instagram.com/poesiecoffee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/instagram-icon.svg"
          alt="Instagram"
          width={24}
          height={24}
          className="hover:opacity-80 transition-opacity"
        />
      </a>
    </footer>
  );
}
