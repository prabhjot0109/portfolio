import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import { BlogList } from "@/components/BlogList";
import { RightNavbar } from "@/components/RightNavbar";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Blogs & Articles | Prabhjot Singh Assi",
  description:
    "Technical articles, engineering insights, open source guides, and thoughts on AI.",
};

const horizontalDashes = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
};

const verticalDashes = {
  maskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
};

function BlueprintFrame() {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-[30%] hidden w-0 border-r border-black/30 pointer-events-none dark:border-white/[0.15] md:block"
        style={verticalDashes}
      />
      <div
        className="absolute top-0 bottom-0 right-[30%] hidden w-0 border-r border-black/30 pointer-events-none dark:border-white/[0.15] md:block"
        style={verticalDashes}
      />

      <div
        className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]"
        style={horizontalDashes}
      />
      <div
        className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]"
        style={horizontalDashes}
      />

      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((position, index) => (
        <div
          key={index}
          className="absolute hidden h-[2px] w-[2px] bg-black/50 pointer-events-none dark:bg-white/[0.25] md:block"
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            transform: `translate(${position.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}
    </>
  );
}

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      <RightNavbar />
      <BlueprintFrame />

      {/* Cell 1: Dot Matrix Background */}
      <div className="absolute left-0 right-0 top-0 h-[22vh] pointer-events-auto -z-0 md:left-[30%] md:right-[30%]">
        <FooterBackground />
        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[22vh] z-50 flex h-[112px] items-center px-4 md:left-[30%] md:right-[30%]">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-5">
            <Link
              href="/"
              className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200/50 bg-zinc-100 text-zinc-400 transition-all hover:bg-zinc-200 hover:text-zinc-900 dark:border-zinc-800/50 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label="Back to home"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </Link>
            <div className="flex min-w-0 flex-col justify-center">
              <h1 className="text-[20px] font-bold leading-none tracking-tight text-zinc-800 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:text-zinc-100 dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)] sm:text-[24px]">
                All Blogs & Articles
              </h1>
              <p className="mt-1 truncate text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
                Tech Writings, Engineering Insights & Open Source
              </p>
            </div>
          </div>

          <div className="flex h-20 items-start justify-end gap-2 py-1 sm:h-24 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      <main className="relative z-10 ml-0 mr-0 flex flex-col px-4 pb-16 pt-[calc(22vh+112px)] md:ml-[30%] md:mr-[30%]">
        <div className="pt-0 pb-6">
          <BlogList />
        </div>

        <div className="relative mt-12 h-[220px] w-[calc(100%+32px)] -mx-4 overflow-hidden">
          <div
            className="absolute left-[-100vw] right-[-100vw] top-0 z-10 h-0 border-t border-black/30 pointer-events-none dark:border-white/[0.15]"
            style={horizontalDashes}
          />
          <div className="absolute left-0 top-0 z-20 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
          <div className="absolute right-0 top-0 z-20 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
          <FooterBackground />
        </div>
      </main>
    </div>
  );
}
