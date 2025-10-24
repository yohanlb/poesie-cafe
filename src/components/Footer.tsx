import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-11 flex justify-center items-center px-4">
      <Link
        href="/about"
        className="text-xs font-instrument-serif md:text-sm text-white/40 md:text-white/60 hover:text-white/60 md:hover:text-white/80 transition-colors"
        data-umami-event="Click on About"
      >
        À propos
      </Link>
    </footer>
  );
}
