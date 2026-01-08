import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";

interface AutoCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({
  images,
  alt,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: true }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  const scrollNext = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      autoplay.reset();
    },
    [emblaApi, autoplay]
  );

  return (
    <div className={`relative h-full group ${className || ""}`}>
      <div
        className="overflow-hidden h-full rounded-none touch-pan-y"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 h-full select-none"
            >
              <div className="h-full w-full relative">
                <LazyImage
                  src={image}
                  alt={`${alt} - Image ${index + 1}`}
                  className="w-full h-full"
                  priority={index === 0}
                  objectFit="contain"
                  showBlurBackground={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              index === selectedIndex
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
