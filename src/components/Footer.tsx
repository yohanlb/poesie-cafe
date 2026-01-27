import Link from "next/link";

const FOOTER_LINK_CLASS =
  "text-xs md:text-sm text-white/40 md:text-white/60 hover:text-white/60 md:hover:text-white/80 transition-colors animate-fade-in-5";

export default function Footer() {
  return (
    <footer className="h-11 flex justify-center items-center px-4 gap-4">
      <Link
        href="/agenda"
        className={FOOTER_LINK_CLASS}
        data-umami-event="Click on Agenda"
      >
        Ateliers
      </Link>
      <span className="text-white/20" aria-hidden="true">
        •
      </span>
      <Link
        href="/faq"
        className={FOOTER_LINK_CLASS}
        data-umami-event="Click on FAQ"
      >
        FAQ
      </Link>
      <span className="text-white/20" aria-hidden="true">
        •
      </span>
      <Link
        href="/about"
        className={FOOTER_LINK_CLASS}
        data-umami-event="Click on About"
      >
        À propos
      </Link>
    </footer>
  );
}
