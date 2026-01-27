"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
}

export default function BackLink({ href }: BackLinkProps) {
  const router = useRouter();

  return (
    <div className="pt-8 pb-4">
      <button
        type="button"
        onClick={() => {
          router.push(href);
        }}
        className="inline-flex items-center gap-2 text-white/80 text-lg font-medium hover:text-white/100 transition-colors"
        data-umami-event="Click on Back"
      >
        <ArrowLeft size={16} />
        Retour
      </button>
    </div>
  );
}
