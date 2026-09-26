import Image from "next/image";
import { BannerParticles } from "@/components/BannerParticles";
import { CurrentTime } from "@/components/CurrentTime";

export function TopHeroBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-0 right-0 top-0 h-[22vh] overflow-hidden bg-white shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:bg-black dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] md:left-[30%] md:right-[30%] ${className}`}
    >
      <Image
        src="/space_light.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 40vw, 100vw"
        quality={70}
        className="object-cover object-center dark:hidden"
      />
      <Image
        src="/space.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 40vw, 100vw"
        quality={70}
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
