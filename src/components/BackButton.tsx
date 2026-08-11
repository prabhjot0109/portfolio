"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton({
  fallbackHref = "/",
  ariaLabel = "Go back",
}: {
  fallbackHref?: string;
  ariaLabel?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label={ariaLabel}
      className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200/50 bg-zinc-100 text-zinc-400 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800/50 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
    </button>
  );
}
