"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";
import NewsletterForm from "@components/NewsletterForm";
import { cn } from "@components/lib/utils";

const STORAGE_KEY = "poesie-newsletter-dismissed";
const POPUP_DELAY_MS = 4000;
const EXCLUDED_PATH = "/newsletter";

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isExcludedPage = pathname === EXCLUDED_PATH;

  useEffect(() => {
    if (isExcludedPage) {
      setVisible(false);
      return;
    }

    if (localStorage.getItem(STORAGE_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isExcludedPage]);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }, []);

  const handleSuccess = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.setTimeout(() => setVisible(false), 2000);
  }, []);

  if (!visible || isExcludedPage) {
    return null;
  }

  return (
    <aside
      role="region"
      aria-label="Newsletter"
      className={cn(
        "fixed z-50 w-[min(100vw-2rem,24rem)] rounded-lg border border-white/20 bg-[#24388e] p-5 text-white shadow-xl",
        "bottom-4 right-4 max-sm:left-4 max-sm:right-4 max-sm:w-auto",
        "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-300"
      )}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Fermer"
        className="absolute top-3 right-3 rounded-sm p-1 text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <XIcon className="size-5" />
      </button>

      <div className="pr-6">
        <NewsletterForm variant="compact" onSuccess={handleSuccess} />
      </div>
    </aside>
  );
}
