import React, { useEffect, useRef } from "react";
import { prefersReducedMotion, getDevicePixelRatio } from "@/utils/performance";

interface StarfieldProps {
  density?: number; // approximate stars per 100px^2 * scaling
  speed?: number; // logical speed factor
  active?: boolean; // whether to animate
}

/**
 * Starfield: performant canvas star background with:
 * - Twinkling stars
 * - Diagonal drift (bottom-left -> top-right)
 * - Controlled activation (lazy start)
 */
const Starfield: React.FC<StarfieldProps> = ({
  density = 0.08,
  speed = 0.03,
  active = true,
}) => {
  // Adjust effective density for small screens
  const effectiveDensity =
    typeof window !== "undefined" && window.innerWidth < 640
      ? density * 0.5
      : density;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<{ x: number; y: number; r: number; p: number }[]>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = getDevicePixelRatio();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    const targetStarCount = Math.max(
      40,
      Math.floor((width * height * effectiveDensity) / 120)
    );

    const createStars = () => {
      starsRef.current = Array.from({ length: targetStarCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        p: Math.random() * Math.PI * 2,
      }));
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      createStars();
    };

    createStars();
    window.addEventListener("resize", handleResize);

    const reduced = prefersReducedMotion();

    const animate = (time: number) => {
      if (!active || reduced) {
        // If inactive, schedule a light recheck loop
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
      lastTimeRef.current = time;
      ctx.clearRect(0, 0, width, height);

      // Constant drift factor normalized to ~60fps
      const driftFactor = speed * 1 * (delta / 16);

      for (const s of starsRef.current) {
        s.x += driftFactor;
        s.y -= driftFactor;
        if (s.x > width) s.x -= width;
        else if (s.x < 0) s.x += width;
        if (s.y < 0) s.y += height;
        else if (s.y > height) s.y -= height;
        s.p += 0.004 + Math.random() * 0.003; // slightly slower twinkle
        const alpha = 0.5 + Math.sin(s.p) * 0.4; // softer range
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [density, speed, active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default Starfield;
