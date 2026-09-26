import type { Metadata } from "next";
import { BackButton } from "@/components/BackButton";
import { CommandMenu } from "@/components/command-menu";
import { FooterBackground } from "@/components/FooterBackground";
import { CurrentTime } from "@/components/CurrentTime";
import { HighlightCard } from "@/components/Highlights";
import { ThemeToggle } from "@/components/theme-toggle";
import { highlightsData } from "@/data/highlightsData";

export const metadata: Metadata = {
  title: "Highlights | Prabhjot Singh Assi",
  description: "A complete archive of Prabhjot Singh Assi's highlights, awards, and milestones.",
};

const horizontalDots = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
};

const verticalDots = {
  maskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
};

export default function AllHighlightsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      <div
        className="pointer-events-none absolute bottom-0 left-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block"
        style={verticalDots}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[30%] top-0 hidden w-0 border-r border-black/30 dark:border-white/[0.15] md:block"
        style={verticalDots}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={horizontalDots}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15]"
        style={horizontalDots}
      />

      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((position, index) => (
        <div
          key={index}
          className="pointer-events-none absolute z-10 hidden h-[2px] w-[2px] bg-black/50 dark:bg-white/[0.25] md:block"
          style={{
            ...position,
            transform: `translate(${position.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      <header className="absolute left-0 right-0 top-[22vh] z-20 flex h-[112px] items-center px-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-5">
            <BackButton fallbackHref="/#highlights" ariaLabel="Back to highlights" />
            <div className="flex flex-col justify-center">
              <h1 className="mb-0.5 text-[20px] font-bold leading-none tracking-tight text-zinc-800 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:text-zinc-100 dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)] sm:text-[24px]">
                All Highlights
              </h1>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400">
                Full Highlights Archive
              </p>
            </div>
          </div>

          <div className="flex h-20 items-start justify-end gap-2 py-1 sm:h-24 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </header>

      <main className="relative z-10 ml-0 mr-0 flex flex-col px-4 pb-16 pt-[calc(22vh+112px)] md:ml-[30%] md:mr-[30%]">
        <div className="flex items-center justify-between gap-4 py-5">
          <p className="text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            Moments, milestones, and recognition along the way.
          </p>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-600">
            {String(highlightsData.length).padStart(2, "0")} items
          </span>
        </div>

        <section
          aria-label="All highlights"
          className="grid grid-cols-1 items-start gap-5 pt-2 sm:grid-cols-2 sm:gap-6"
        >
          {highlightsData.map((item, index) => (
            <HighlightCard
              key={item.id}
              item={item}
              layout="archive"
              number={index + 1}
            />
          ))}
        </section>

        <div className="relative mt-4">
          <div
            className="pointer-events-none absolute -left-[100vw] -right-[100vw] bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15]"
            style={horizontalDots}
          />
          <div className="pointer-events-none absolute -bottom-px -left-4 z-10 h-[2px] w-[2px] bg-black/50 dark:bg-white/[0.25]" />
          <div className="pointer-events-none absolute -bottom-px -right-4 z-10 h-[2px] w-[2px] bg-black/50 dark:bg-white/[0.25]" />
        </div>
      </main>
    </div>
  );
}
