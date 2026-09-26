"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Play } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
  alt: string;
  video?: string;
}

type MediaSlide =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.94,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.94,
    opacity: 0,
  }),
};

const springTransition = {
  x: { type: "spring" as const, stiffness: 300, damping: 30 },
  scale: { type: "spring" as const, stiffness: 400, damping: 35 },
  opacity: { duration: 0.25 },
};

export function ProjectImageCarousel({
  images = [],
  alt,
  video,
}: ProjectImageCarouselProps) {
  const media: MediaSlide[] = [
    ...(video ? [{ type: "video" as const, src: video }] : []),
    ...images.map((src) => ({ type: "image" as const, src })),
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentIndex =
    media.length > 0 ? ((page % media.length) + media.length) % media.length : 0;
  const currentSlide = media[currentIndex];

  // Pause video when moving to an image slide
  useEffect(() => {
    if (currentSlide?.type !== "video" && videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentIndex, currentSlide]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (currentSlide?.type === "video") return;
      const swipe = swipePower(info.offset.x, info.velocity.x);
      const offset = info.offset.x;
      if (offset < -40 || swipe < -2000) {
        paginate(1);
      } else if (offset > 40 || swipe > 2000) {
        paginate(-1);
      }
    },
    [paginate, currentSlide]
  );

  const goToSlide = useCallback(
    (index: number) => {
      const newDirection = index > currentIndex ? 1 : -1;
      setPage([index, newDirection]);
    },
    [currentIndex]
  );

  const openLightbox = (src: string) => {
    const idx = images.indexOf(src);
    setLightboxIdx(idx >= 0 ? idx : 0);
    setIsLightboxOpen(true);
  };

  // Keyboard navigation for carousel & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === "ArrowLeft") {
          setLightboxIdx((prev) => (prev - 1 + images.length) % images.length);
        } else if (e.key === "ArrowRight") {
          setLightboxIdx((prev) => (prev + 1) % images.length);
        } else if (e.key === "Escape") {
          setIsLightboxOpen(false);
        }
      } else {
        if (e.key === "ArrowLeft") {
          paginate(-1);
        } else if (e.key === "ArrowRight") {
          paginate(1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, isLightboxOpen, images.length]);

  if (media.length === 0) return null;

  // Single media item
  if (media.length === 1) {
    if (media[0].type === "video") {
      return (
        <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-md bg-zinc-950 flex items-center justify-center">
          {media[0].src.includes("youtube") ? (
            <iframe
              src={media[0].src}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={media[0].src}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
      );
    }

    return (
      <>
        <div className="w-full aspect-video relative rounded-xl overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-md bg-zinc-950 group flex items-center justify-center">
          {/* Blurred Backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={media[0].src}
              alt=""
              fill
              quality={20}
              className="object-cover blur-2xl opacity-35 dark:opacity-40 scale-110"
              aria-hidden="true"
            />
          </div>
          {/* Main Image */}
          <div
            className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center z-10 cursor-pointer"
            onClick={() => openLightbox(media[0].src)}
          >
            <Image
              src={media[0].src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={85}
              className="object-contain drop-shadow-md"
            />
          </div>
          <button
            onClick={() => openLightbox(media[0].src)}
            className="absolute top-3 right-3 z-20 p-1.5 rounded-md bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-sm transition-all hover:scale-105 cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
            title="View Fullscreen"
            aria-label="View Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Lightbox Modal */}
        {mounted &&
          createPortal(
            <AnimatePresence>
              {isLightboxOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsLightboxOpen(false)}
                  className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
                >
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white transition-colors cursor-pointer border border-white/10"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div
                    className="relative max-w-6xl max-h-[88vh] w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={media[0].src}
                      alt={`${alt} full view`}
                      width={1920}
                      height={1080}
                      quality={95}
                      className="object-contain max-h-[88vh] max-w-[92vw] rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Carousel Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-md bg-zinc-950 group">
        {/* Ambient Blurred Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            {currentSlide.type === "image" ? (
              <Image
                src={currentSlide.src}
                alt=""
                fill
                quality={20}
                className="object-cover blur-2xl opacity-35 dark:opacity-40 scale-110"
                aria-hidden="true"
              />
            ) : images[0] ? (
              <Image
                src={images[0]}
                alt=""
                fill
                quality={20}
                className="object-cover blur-2xl opacity-25 dark:opacity-30 scale-110"
                aria-hidden="true"
              />
            ) : null}
          </motion.div>
        </AnimatePresence>

        {/* Foreground Content Container */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            drag={currentSlide.type === "image" ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className={`absolute inset-0 flex items-center justify-center ${
              currentSlide.type === "image"
                ? "p-2 sm:p-4 cursor-grab active:cursor-grabbing touch-pan-y"
                : "p-0"
            }`}
          >
            {currentSlide.type === "video" ? (
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                {currentSlide.src.includes("youtube") ? (
                  <iframe
                    src={currentSlide.src}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={currentSlide.src}
                    className="w-full h-full object-contain bg-black"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>
            ) : (
              <div
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => openLightbox(currentSlide.src)}
              >
                <Image
                  src={currentSlide.src}
                  alt={`${alt} - ${currentIndex + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={85}
                  priority={currentIndex === 0}
                  className="object-contain drop-shadow-lg pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(-1);
          }}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            paginate(1);
          }}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Counter and Fullscreen Trigger */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-medium tabular-nums border border-white/15 shadow-sm">
            {currentIndex + 1} / {media.length}
          </div>
          {currentSlide.type === "image" && (
            <button
              onClick={() => openLightbox(currentSlide.src)}
              className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-sm transition-all hover:scale-105 cursor-pointer opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
              title="View Fullscreen"
              aria-label="View Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5 py-0.5">
        {media.map((item, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="relative p-1 cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: idx === currentIndex ? 20 : 6,
                height: 6,
                backgroundColor:
                  idx === currentIndex
                    ? "rgb(59 130 246)"
                    : "rgb(113 113 122)",
                opacity: idx === currentIndex ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            />
          </button>
        ))}
      </div>

      {/* Thumbnail Strip with padding around selection */}
      {media.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto py-2.5 px-1.5 scrollbar-hide max-w-full touch-pan-x">
          {media.map((item, idx) => {
            const isVideo = item.type === "video";
            const thumbSrc = isVideo ? images[0] || item.src : item.src;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-zinc-950 ${
                  idx === currentIndex
                    ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/40 scale-105 z-10 shadow-md"
                    : "border-zinc-200/20 dark:border-zinc-800/80 opacity-60 hover:opacity-100 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
                aria-label={`View slide ${idx + 1}`}
              >
                {isVideo ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-zinc-900">
                    {images[0] && (
                      <Image
                        src={images[0]}
                        alt="Video thumbnail"
                        fill
                        sizes="80px"
                        quality={40}
                        className="object-contain p-0.5 opacity-40"
                      />
                    )}
                    <div className="z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center shadow-md">
                      <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5 fill-current" />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={thumbSrc}
                    alt={`${alt} thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    quality={40}
                    className="object-contain p-0.5"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {mounted &&
        images.length > 0 &&
        createPortal(
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLightboxOpen(false)}
                className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
              >
                {/* Header Controls */}
                <div
                  className="absolute top-4 right-4 z-30 flex items-center gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-white/90 text-xs font-medium bg-zinc-900/80 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md">
                    {lightboxIdx + 1} / {images.length}
                  </span>
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white transition-colors cursor-pointer border border-white/15 shadow-md"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIdx(
                          (prev) => (prev - 1 + images.length) % images.length
                        );
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-all cursor-pointer border border-white/15 hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIdx((prev) => (prev + 1) % images.length);
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-all cursor-pointer border border-white/15 hover:scale-110 active:scale-95 shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Box */}
                <div
                  className="relative max-w-6xl max-h-[88vh] w-full h-full flex items-center justify-center overflow-hidden touch-pan-y"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[lightboxIdx]}
                    alt={`${alt} - full view`}
                    width={1920}
                    height={1080}
                    quality={95}
                    className="object-contain max-h-[88vh] max-w-[92vw] rounded-lg shadow-2xl pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

export default ProjectImageCarousel;
