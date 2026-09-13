"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Check, Copy } from "lucide-react";

export interface CommandItem {
  label: string;
  value: string;
  note?: string;
}

interface CommandTabsProps {
  title?: string;
  commands: CommandItem[];
  defaultIndex?: number;
}

export function CommandTabs({ title, commands, defaultIndex = 0 }: CommandTabsProps) {
  const [selected, setSelected] = useState(defaultIndex);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const activeCommand = commands[selected] || commands[0];

  const copy = useCallback(async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
    } catch {
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, []);

  if (!commands || commands.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2 mb-2">
        {title ? (
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
            {title}
          </p>
        ) : (
          <div />
        )}
        <div className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
          {commands.map((cmd, idx) => (
            <button
              key={cmd.label}
              type="button"
              onClick={() => {
                setSelected(idx);
                setCopied(false);
              }}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                selected === idx
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {cmd.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-stretch rounded-md border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <code className="flex-1 min-w-0 px-3 py-2 font-mono text-[12px] leading-relaxed text-zinc-700 dark:text-zinc-200 overflow-x-auto whitespace-nowrap select-all">
          {activeCommand.value}
        </code>
        <button
          type="button"
          onClick={() => copy(activeCommand.value)}
          aria-label={`Copy ${activeCommand.label} command`}
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

      {activeCommand.note && (
        <p className="mt-2 text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          {activeCommand.note}
        </p>
      )}
    </div>
  );
}
