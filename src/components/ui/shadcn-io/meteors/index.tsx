"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute size-1 rotate-[var(--angle)] animate-meteor rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8),0_0_12px_4px_rgba(200,220,255,0.6)]",
            className,
          )}
        >
          {/* Meteor Tail - long and fading */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[120px] -translate-y-1/2 bg-gradient-to-r from-white via-blue-200/80 to-transparent blur-[0.5px] animate-meteor-tail" />
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[150px] -translate-y-1/2 bg-gradient-to-r from-white/60 via-blue-100/40 to-transparent blur-[1px]" />
        </span>
      ))}
    </>
  );
};
