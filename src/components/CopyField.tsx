"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Check, Copy } from "lucide-react";

interface CopyFieldProps {
  value: string;
  /** Screen-reader label for the button, e.g. "Copy the GenUI server URL". */
  label: string;
}

/**
 * A read-only value with a copy button. Client-only leaf so the project page
 * itself can stay a server component.
 */
export function CopyField({ value, label }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard is blocked on insecure origins and in some embedded views.
      // Selecting the text is the fallback the user can act on.
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, [value]);

  return (
    <div className="flex items-stretch rounded-md border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
      <code className="flex-1 min-w-0 px-3 py-2 font-mono text-[12px] leading-relaxed text-zinc-700 dark:text-zinc-200 overflow-x-auto whitespace-nowrap select-all">
        {value}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className="shrink-0 flex items-center gap-1.5 px-3 border-l border-black/10 dark:border-white/10 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
