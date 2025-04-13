import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-11 flex justify-end items-center px-4">
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
