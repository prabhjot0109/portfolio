import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={`relative h-full ${className || ""}`}>
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
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

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
