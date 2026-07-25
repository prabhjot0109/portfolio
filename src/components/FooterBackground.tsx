"use client";

import React from "react";

export function FooterBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base dots that fade out */}
      <div
        className="absolute inset-0 w-full h-full text-zinc-400 dark:text-zinc-500 opacity-20 dark:opacity-[0.1] pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}



