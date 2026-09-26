"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { researchPapers } from "@/data/researchData";

const IEEEIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
    <path d="M8 11h8"></path>
    <path d="M8 7h6"></path>
  </svg>
);

export function ResearchList() {
  return (
    <div className="block">
      {researchPapers.map((paper, idx) => {
        const isLast = idx === researchPapers.length - 1;

        return (
          <div
            key={paper.link}
            className="group relative block -mx-4 px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer"
          >
            {/* Dashed bottom border for all items except the last one */}
            {!isLast && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}

            {/* Special full-width dashed line and intersection dots for the last item */}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            <div className="flex items-start sm:items-center justify-between w-full">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[14px] md:text-[15px] font-bold text-zinc-900 dark:text-zinc-100 transition-colors pr-6">
                  <Link href={paper.link} className="before:absolute before:inset-0">
                    {paper.title}
                  </Link>
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-[12px] text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{paper.date}</span>
                  </div>

                  <a
                    href="https://ieeexplore.ieee.org/document/11609020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 flex items-center gap-1.5 text-blue-600 dark:text-blue-500 font-medium hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    <IEEEIcon className="w-3.5 h-3.5" />
                    <span>IEEE Xplore</span>
                  </a>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-[1px] h-3 bg-zinc-300 dark:bg-zinc-700" />

                  <div className="flex flex-wrap items-center gap-2">
                    {paper.tags.filter((tag) => tag !== "IEEE Xplore").map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-[4px] border border-black/30 dark:border-white/[0.15] text-[11px] text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-black/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-4 flex-shrink-0 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
