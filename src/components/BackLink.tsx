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
        className="inline-flex items-center gap-2 text-lg text-white/80 hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
        data-umami-event="Click on Back"
      >
        <ArrowLeft size={16} />
        Retour
      </button>
    </div>
  );
}
