export default function Footer() {
  return (
    <footer className="h-11 flex justify-center items-center px-4">
      <p className="text-[10px] md:text-xs text-white/40 md:text-white/60 text-center">
        Design by Axelle Brisard / Developed by{" "}
        <a
          href="https://yohanlebreton.com"
          target="_blank"
          rel="dofollow"
          data-umami-event="Click on Yohan Le Breton"
          className="hover:text-white/60 md:hover:text-white/80 transition-colors"
        >
          Yohan Le Breton
        </a>
      </p>
    </footer>
  );
}
