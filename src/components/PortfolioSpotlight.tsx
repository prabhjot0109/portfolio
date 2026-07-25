"use client";

import React, { useState, useEffect } from "react";

export function PortfolioSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsHovering(true);
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full text-zinc-500 dark:text-zinc-400 pointer-events-none transition-opacity duration-700 ease-in-out z-[1]"
      style={{
        backgroundImage:
          "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "16px 16px",
        backgroundPosition: "center",
        opacity: isHovering ? 0.25 : 0,
        maskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        WebkitMaskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
      }}
    />
  );
}

export default PortfolioSpotlight;
