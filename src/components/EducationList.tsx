"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { educationData, type EducationItem } from "@/data/educationData";

export function EducationList({ isFullPage = false }: { isFullPage?: boolean } = {}) {
  const [openIdx, setOpenIdx] = useState<number | null>(isFullPage ? 0 : null);

  return (
    <div className="block">
      {educationData.map((item: EducationItem, idx: number) => {
        const isOpen = openIdx === idx;
        const isLast = idx === educationData.length - 1;

        return (
          <div key={item.id} className="group relative">
            {/* Dashed bottom border for non-last items */}
            {!isLast && (
              <div
                className="absolute bottom-0 left-[-16px] right-[-16px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}

            {/* Special full-width dashed line and intersection dots for the last item */}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            {/* Clickable Header Row */}
            <div
              className="flex flex-row items-start justify-between gap-2 py-3.5 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg sm:gap-3 sm:py-4"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                {/* Icon Box Container */}
                <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                  <div className="w-full h-full rounded-[7px] border border-black/5 dark:border-black/20 bg-white dark:bg-[#18181b] flex items-center justify-center overflow-hidden relative">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={40}
                        height={40}
                        unoptimized
                        className="object-contain w-full h-full p-0.5"
                      />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-0.5 min-w-0 pr-2 sm:pr-4">
                  <span className="text-[14px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                    {item.institution}
                  </span>
                  <span className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-400">
                    {item.degree}
                  </span>
                  <span className="text-[12px] text-zinc-500 dark:text-zinc-500 font-medium">
                    {item.field}
                  </span>
                </div>
              </div>

              {/* Right Side: Year + Location + Chevron */}
              <div className="flex flex-col items-end text-right shrink-0 pr-5 pl-2">
                <div className="flex items-center text-[12px] sm:text-[14px] font-medium text-zinc-900 dark:text-zinc-100 relative whitespace-nowrap">
                  <span>{item.period}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-3.5 h-3.5 text-zinc-500 absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 -mt-[1.5px] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                  {item.location}
                </span>
              </div>
            </div>

            {/* Expandable Details Section */}
            <div
              className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`${
                    isOpen
                      ? "pb-4 pt-1 opacity-100 translate-y-0"
                      : "pb-0 pt-0 opacity-0 -translate-y-2"
                  } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] px-4 pl-4 sm:pl-[68px] text-[13px] sm:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400`}
                >
                  {isFullPage && item.description && item.description.length > 0 && (
                    <ul className="mb-3 space-y-1.5 text-[13px] sm:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {isFullPage && item.highlights && item.highlights.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded-[4px] border border-black/30 dark:border-white/[0.15] text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-black/20"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.coursework && item.coursework.length > 0 && (
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Relevant Coursework:{" "}
                      </span>
                      <span>{item.coursework.join(", ")}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationList;
