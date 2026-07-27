"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { highlightsData, type Highlight } from "@/data/highlightsData";

function HighlightCard({
  item,
  onClick,
}: {
  item: Highlight;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const inner = (
    <div className="relative group w-[280px] sm:w-[300px] flex-shrink-0 select-none">
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div className="absolute -inset-[4px] border border-black/5 dark:border-white/5 rounded-[10px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />

      {/* Main Card Body */}
      <div className="relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]">
        {/* Screenshot Image Container */}
        <div className="relative w-full aspect-video bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-[1.03] pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
              }}
            />
          )}
        </div>

        {/* Signature Dashed Divider Motif */}
        <div
          className="h-px bg-black/30 dark:bg-white/[0.15]"
          style={{
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Info Content Section */}
        <div className="flex flex-col gap-1.5 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
            {item.link && (
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            )}
          </div>
          <p className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onClick={onClick}
        draggable={false}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

export function Highlights() {
  const items = [...highlightsData, ...highlightsData, ...highlightsData];
  const scrollRef = useRef<HTMLDivElement>(null);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const isDragging = useRef(false);
  const isUserInteracting = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const speed = 0.6;

  const markInteraction = () => {
    isUserInteracting.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, 2000);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }

    let animationFrameId: number;

    const autoScroll = () => {
      if (el && !isUserInteracting.current && !isMouseDown.current) {
        el.scrollLeft += speed;

        const singleSet = el.scrollWidth / 3;
        if (singleSet > 0) {
          if (el.scrollLeft >= singleSet * 2) {
            el.scrollLeft -= singleSet;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      markInteraction();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta !== 0) {
        e.preventDefault();
        el.scrollLeft += delta;

        const singleSet = el.scrollWidth / 3;
        if (singleSet > 0) {
          if (el.scrollLeft >= singleSet * 2) {
            el.scrollLeft -= singleSet;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += singleSet;
          }
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSet = el.scrollWidth / 3;
    if (singleSet > 0) {
      if (el.scrollLeft >= singleSet * 2) {
        el.scrollLeft -= singleSet;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += singleSet;
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isMouseDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX - el.offsetLeft;
    startScrollLeft.current = el.scrollLeft;
    markInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    el.scrollLeft = startScrollLeft.current - walk;
    markInteraction();
  };

  const handleMouseUpOrLeave = () => {
    isMouseDown.current = false;
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className="relative mt-4 overflow-hidden py-2"
      onMouseEnter={() => (isUserInteracting.current = true)}
      onMouseLeave={() => {
        isUserInteracting.current = false;
        handleMouseUpOrLeave();
      }}
      onTouchStart={markInteraction}
    >
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className="flex gap-4 w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-1 touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default Highlights;

