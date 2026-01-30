import Link from "next/link";

const FOOTER_LINK_CLASS =
  "text-md text-white/75 hover:text-white transition-colors underline-offset-2 hover:underline";

export default function Footer() {
  return (
    <footer className="h-11 flex justify-center items-center px-4 gap-4 animate-fade-in-5">
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
