"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";
import NewsletterForm from "@components/NewsletterForm";
import { cn } from "@components/lib/utils";

const STORAGE_KEY = "poesie-newsletter-dismissed";
const POPUP_DELAY_MS = 4000;
const EXCLUDED_PATH = "/newsletter";

function getStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStorageItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage unavailable (private browsing, disabled storage, etc.)
  }
}

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const successTimerRef = useRef<number | null>(null);
  const isExcludedPage = pathname === EXCLUDED_PATH;

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isExcludedPage) {
      setVisible(false);
      return;
    }

    if (getStorageItem(STORAGE_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isExcludedPage]);

  const dismiss = useCallback(() => {
    setStorageItem(STORAGE_KEY, "true");
    setVisible(false);
  }, []);

  const handleSuccess = useCallback(() => {
    setStorageItem(STORAGE_KEY, "true");
    successTimerRef.current = window.setTimeout(() => setVisible(false), 2000);
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
