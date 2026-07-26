"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
  alt: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.92,
    opacity: 0,
    rotateY: direction > 0 ? 8 : -8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.92,
    opacity: 0,
    rotateY: direction < 0 ? 8 : -8,
  }),
};

const springTransition = {
  x: { type: "spring" as const, stiffness: 300, damping: 30 },
  scale: { type: "spring" as const, stiffness: 400, damping: 35 },
  opacity: { duration: 0.3 },
  rotateY: { type: "spring" as const, stiffness: 300, damping: 30 },
};

export function ProjectImageCarousel({ images, alt }: ProjectImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipe = swipePower(info.offset.x, info.velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1);
      }
    },
    [paginate]
  );

  const goToSlide = useCallback(
    (index: number) => {
      const newDirection = index > imageIndex ? 1 : -1;
      setPage([index, newDirection]);
    },
    [imageIndex]
  );

  if (images.length === 0) return null;

  // Single image — no carousel
  if (images.length === 1) {
    return (
      <div className="w-full aspect-video relative rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-black">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          quality={75}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Carousel Container */}
      <div
        className="relative w-full aspect-video rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-black group"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={images[imageIndex]}
              alt={`${alt} - ${imageIndex + 1}`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              quality={75}
              className="object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows — visible on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(-1);
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/15 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/25 dark:hover:bg-black/50 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(1);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/15 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/25 dark:hover:bg-black/50 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium tabular-nums border border-white/10">
          {imageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="relative p-0.5 cursor-pointer"
            aria-label={`Go to image ${idx + 1}`}
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: idx === imageIndex ? 20 : 6,
                height: 6,
                backgroundColor:
                  idx === imageIndex
                    ? "var(--dot-active, #3b82f6)"
                    : "var(--dot-inactive, #71717a)",
                opacity: idx === imageIndex ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              style={{
                // CSS custom properties for dark/light
                // @ts-expect-error -- CSS custom properties in inline styles
                "--dot-active": "rgb(59 130 246)",
                "--dot-inactive": "rgb(113 113 122)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 2 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-md overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                idx === imageIndex
                  ? "border-blue-500 dark:border-blue-400 ring-1 ring-blue-500/30 scale-105"
                  : "border-transparent opacity-50 hover:opacity-80 hover:border-zinc-400 dark:hover:border-zinc-600"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                quality={40}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
