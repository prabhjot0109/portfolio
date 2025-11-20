import React from "react";
import { prefersReducedMotion, getDevicePixelRatio } from "@/utils/performance";

interface StarfieldProps {
  density?: number; // approximate stars per 100px^2 * scaling
  speed?: number; // logical speed factor
  active?: boolean; // whether to animate
}

interface Star {
  x: number;
  y: number;
  z: number; // depth (0.2 to 2.0)
  r: number; // base radius
  p: number; // phase for twinkle
  color: string; // star color
  baseAlpha: number; // base opacity
}

/**
 * Starfield: performant canvas star background with:
 * - 3D Parallax effect (depth-based movement)
 * - Realistic star colors (white, blue-ish, yellow-ish)
 * - Smoother twinkling
 * - Diagonal drift (bottom-left -> top-right)
 */
const Starfield: React.FC<StarfieldProps> = ({
  density = 0.08,
  speed = 0.03,
  active = true,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const starsRef = React.useRef<Star[]>([]);
  const animationRef = React.useRef<number>();
  const lastTimeRef = React.useRef<number>(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = getDevicePixelRatio();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    // Star colors: White, Blue-white, Yellow-white
    const starColors = ["255, 255, 255", "220, 240, 255", "255, 240, 220"];

    // Gaussian random helper (Box-Muller transform)
    const gaussianRandom = (mean = 0, stdev = 1) => {
      const u = 1 - Math.random();
      const v = Math.random();
      const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return z * stdev + mean;
    };

    const createStars = () => {
      // Recalculate effective density based on current width
      const currentEffectiveDensity = width < 640 ? density * 0.5 : density;

      const targetStarCount = Math.max(
        40,
        Math.floor((width * height * currentEffectiveDensity) / 120)
      );

      starsRef.current = Array.from({ length: targetStarCount }, () => {
        const z = Math.random() * 1.8 + 0.2; // Depth: 0.2 (far) to 2.0 (near)

        // Use Gaussian distribution for size: most stars are small
        // Mean 0.8, stdev 0.3, clamped to min 0.2
        let r = Math.abs(gaussianRandom(0.8, 0.4));
        r = Math.max(0.2, Math.min(2.5, r));
        r *= 0.5 + z * 0.3; // Scale by depth

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r,
          p: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          baseAlpha: 0.3 + Math.random() * 0.7, // Brighter stars
        };
      });
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
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
      lastTimeRef.current = time;
      ctx.clearRect(0, 0, width, height);

      // Base drift factor
      const baseDrift = speed * (delta / 16);

      for (const s of starsRef.current) {
        // Move stars based on depth (parallax)
        // Closer stars (higher z) move faster
        const moveSpeed = baseDrift * s.z;

        s.x += moveSpeed;
        s.y -= moveSpeed;

        // Wrap around
        if (s.x > width) s.x -= width;
        else if (s.x < 0) s.x += width;
        if (s.y < 0) s.y += height;
        else if (s.y > height) s.y -= height;

        // Twinkle effect
        s.p += 0.02 + Math.random() * 0.01;
        const twinkle = Math.sin(s.p);

        // Calculate final alpha: base * (0.5 + 0.5 * twinkle)
        // We keep it subtle: range [0.7 * base, 1.3 * base] clamped to [0, 1]
        let alpha = s.baseAlpha * (0.8 + twinkle * 0.3);

        // Fade out distant stars slightly more
        alpha *= Math.min(1, s.z * 0.8);
        if (alpha < 0) alpha = 0;
        if (alpha > 1) alpha = 1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow for very bright/close stars
        if (s.z > 1.0 && alpha > 0.5) {
          ctx.shadowBlur = s.r * 3.5;
          ctx.shadowColor = `rgba(${s.color}, ${alpha * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
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
