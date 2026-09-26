"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { highlightsData, type Highlight } from "@/data/highlightsData";
import { cn } from "@/lib/utils";

export function HighlightCard({
  item,
  layout = "marquee",
  number,
}: {
  item: Highlight;
  layout?: "marquee" | "archive";
  number?: number;
}) {
  const isArchive = layout === "archive";
  const inner = (
    <div
      className={cn(
        "relative group",
        isArchive ? "w-full min-w-0" : "flex-shrink-0",
        !isArchive && !item.cardWidth && "w-[280px] sm:w-[300px]",
      )}
      style={!isArchive && item.cardWidth ? { width: `${item.cardWidth}px` } : undefined}
    >
      {/* Outer subtle double-border frame matching portfolio design language */}
      <div
        className={cn(
          "absolute -inset-[4px] rounded-[10px] border border-black/5 dark:border-white/5 pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10",
          isArchive && "group-hover:border-black/15 dark:group-hover:border-white/15",
        )}
      />

      {/* Main Card Body */}
      <div
        className={cn(
          "relative flex flex-col rounded-[6px] overflow-hidden bg-zinc-50 dark:bg-[#09090b] border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/80 transition-all duration-300 group-hover:bg-zinc-100/80 dark:group-hover:bg-[#121214]",
          isArchive &&
            "motion-safe:group-hover:-translate-y-px group-hover:border-black/15 dark:group-hover:border-white/15 group-hover:shadow-md dark:group-hover:shadow-black/90",
        )}
      >
        {/* Screenshot Image Container */}
        <div
          className={cn(
            "relative w-full bg-zinc-100 dark:bg-[#0a0a0a] overflow-hidden",
            !isArchive && "h-[200px]",
          )}
        >
          {isArchive ? (
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: `${item.imageWidth} / ${item.imageHeight}` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                preload={number !== undefined && number <= 2}
                sizes="(min-width: 768px) 20vw, 100vw"
                quality={75}
                className={cn(
                  "saturate-[.85] transition-[filter,transform] duration-500 ease-out group-hover:saturate-100 motion-safe:group-hover:scale-[1.015]",
                  item.imageFit === "contain"
                    ? "object-contain p-2"
                    : "object-cover object-top",
                )}
                draggable={false}
              />
            </div>
          ) : item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={`${item.cardWidth ?? 300}px`}
              quality={70}
              className={cn(
                "grayscale transition-[filter,transform] duration-500 ease-out motion-safe:group-hover:scale-[1.025] group-hover:grayscale-0",
                item.imageFit === "contain"
                  ? "object-contain p-2"
                  : "object-cover object-top",
              )}
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
          {isArchive && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-white/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-white/[0.01] dark:to-white/[0.04]" />
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
        <div
          className={`flex flex-col gap-1.5 p-3 ${
            isArchive ? "min-h-[78px] sm:px-4" : "h-[86px]"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-black/5 dark:bg-white/5 text-[10px] font-semibold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5">
              {item.badge}
            </span>
            <div className="flex shrink-0 items-center gap-2">
              {isArchive && number && (
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                  {String(number).padStart(2, "0")}
                </span>
              )}
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
          </div>
          <p
            className={`font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-zinc-900 dark:group-hover:text-white ${
              isArchive ? "text-[14px]" : "text-[13px] line-clamp-2"
            }`}
          >
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
        className={
          isArchive
            ? "block rounded-[6px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
            : "block"
        }
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

export function Highlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const isTouchedRef = useRef(false);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 4 duplicates of highlightsData to create an infinite, seamless loop
  const items = [
    ...highlightsData,
    ...highlightsData,
    ...highlightsData,
    ...highlightsData,
  ];

  // Initialize scroll position to 1/4 of scroll width once mounted
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Small delay to allow images and layouts to compute dimensions
    const initTimer = setTimeout(() => {
      if (el && el.scrollLeft === 0 && el.scrollWidth > 0) {
        el.scrollLeft = el.scrollWidth / 4;
      }
    }, 50);

    let lastTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = Math.min(now - lastTime, 50);
      lastTime = now;

      const container = containerRef.current;
      if (
        container &&
        !isHoveredRef.current &&
        !isDraggingRef.current &&
        !isTouchedRef.current
      ) {
        // Speed: ~45px/second (0.045px/ms)
        container.scrollLeft += 0.045 * elapsed;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(frameId);
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el || el.scrollWidth === 0) return;
    const singleSetWidth = el.scrollWidth / 4;
    if (singleSetWidth <= 0) return;

    // Seamless wrap around
    if (el.scrollLeft >= singleSetWidth * 2.5) {
      el.scrollLeft -= singleSetWidth;
      if (isDraggingRef.current) {
        startScrollLeftRef.current -= singleSetWidth;
      }
    } else if (el.scrollLeft <= singleSetWidth * 0.5) {
      el.scrollLeft += singleSetWidth;
      if (isDraggingRef.current) {
        startScrollLeftRef.current += singleSetWidth;
      }
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX;
    startScrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    const deltaX = e.pageX - startXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = startScrollLeftRef.current - deltaX;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 50);
    }
  };

  const handleTouchStart = () => {
    isTouchedRef.current = true;
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => {
      isTouchedRef.current = false;
    }, 1200);
  };

  return (
    <div className="relative mt-4 overflow-hidden py-2">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-white/80 to-transparent pointer-events-none dark:from-black/80" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white/80 to-transparent pointer-events-none dark:from-black/80" />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          isDraggingRef.current = false;
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClickCapture={handleClickCapture}
        style={{ scrollBehavior: "auto" }}
        className="flex w-full items-start gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      >
        {items.map((item, i) => (
          <HighlightCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
