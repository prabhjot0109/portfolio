import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";

interface AutoCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  viewportClassName?: string;
  slideClassName?: string;
  alwaysShowControls?: boolean;
  showEdgePreview?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({
  images,
  alt,
  className,
  imageClassName,
  viewportClassName,
  slideClassName,
  alwaysShowControls = false,
  showEdgePreview = false,
  showControls = true,
  showIndicators = true,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      watchDrag: images.length > 1,
      dragFree: false,
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
  }, [autoplay, emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.reset();
  }, [autoplay, emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      autoplay.reset();
    },
    [autoplay, emblaApi]
  );

  const hasMultipleImages = images.length > 1;

  return (
    <div className={`relative h-full group ${className || ""}`}>
      <div
        className={`h-full overflow-hidden rounded-none touch-pan-x ${viewportClassName || ""}`}
        ref={emblaRef}
      >
        <div className={`flex h-full ${showEdgePreview ? "px-4 md:px-8" : ""}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-0 h-full select-none ${
                showEdgePreview
                  ? "flex-[0_0_88%] px-2 md:flex-[0_0_84%] md:px-4"
                  : "flex-[0_0_100%]"
              } ${slideClassName || ""}`}
            >
              <div className="relative h-full w-full">
                <LazyImage
                  src={image}
                  alt={`${alt} - Image ${index + 1}`}
                  className={`h-full w-full ${imageClassName || ""}`}
                  priority={index === 0}
                  objectFit="contain"
                  showBlurBackground={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && hasMultipleImages && (
        <>
          <button
            className={`absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/75 md:left-4 ${
              alwaysShowControls
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
            onClick={scrollPrev}
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            className={`absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/75 md:right-4 ${
              alwaysShowControls
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
            onClick={scrollNext}
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </>
      )}

      {showIndicators && hasMultipleImages && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`rounded-full shadow-sm transition-all duration-300 ${
                index === selectedIndex
                  ? "h-1.5 w-6 bg-white"
                  : "h-1.5 w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCarousel;
