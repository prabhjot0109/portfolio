import Image from "next/image";
import { BannerParticles } from "@/components/BannerParticles";
import { CurrentTime } from "@/components/CurrentTime";

const lightBannerPlaceholder =
  "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAQCdASoKAAUAAkA4JaQAA3AA/vsP+gAAAAB6eZ2XpLm4f3l/d4V1gnn/u9O5uL+7vrm6t7axsrGwsLOvs7m0sbSxtLSytLSwsrCyrrCysLGwsbCzsrGysbKxsrCyAAA=";
const darkBannerPlaceholder =
  "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwAgCdASoKAAUAAkA4JZwAA3AA/s4s+A43eYV8eIqAiYOCfX9/g3l6eXl6e3t7e318fH19fX5+fn9/f4CAgIGAgYCBgoGDgoKCgoKDg4ODg4KDg4ODg4ODg4OEg4SEhAAAAAA=";

export function TopHeroBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 top-0 h-[22vh] overflow-hidden bg-white shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:bg-black dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] md:left-[30%] md:right-[30%] ${className}`}
    >
      <Image
        src="/space_light.webp"
        alt=""
        fill
        fetchPriority="high"
        sizes="(min-width: 768px) 40vw, 100vw"
        quality={70}
        placeholder="blur"
        blurDataURL={lightBannerPlaceholder}
        className="object-cover object-center dark:hidden"
      />
      <Image
        src="/space.webp"
        alt=""
        fill
        fetchPriority="high"
        sizes="(min-width: 768px) 40vw, 100vw"
        quality={70}
        placeholder="blur"
        blurDataURL={darkBannerPlaceholder}
        className="hidden object-cover object-center dark:block"
      />
      <BannerParticles />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-10 bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
      <div className="pointer-events-auto absolute bottom-3 right-2 z-10">
        <CurrentTime />
      </div>
    </div>
  );
}
