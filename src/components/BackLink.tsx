import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink() {
  return (
    <div className="pt-8 pb-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/80 text-lg font-medium hover:text-white/100 transition-colors"
        data-umami-event="Click on Back to Home"
      >
        <ArrowLeft size={16} />
        Retour
      </Link>
    </div>
  );
}
