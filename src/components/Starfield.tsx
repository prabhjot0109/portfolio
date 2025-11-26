import React from "react";
import { prefersReducedMotion, getDevicePixelRatio } from "@/utils/performance";

interface StarfieldProps {
  density?: number;
  speed?: number;
  active?: boolean;
  theme?: "dark" | "light";
  mousePosition?: {
    normalizedX: number;
    normalizedY: number;
    isInViewport: boolean;
  };
  parallaxIntensity?: number;
}

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  z: number;
  r: number;
  p: number;
  color: string;
  baseAlpha: number;
  vx: number; // Velocity/Repulsion X
  vy: number; // Velocity/Repulsion Y
}

/**
 * Starfield: performant canvas star background with:
 * - 3D Parallax effect (depth-based movement)
 * - Interactive mouse parallax (stars follow cursor)
 * - Realistic star colors
 * - Smooth twinkling
 */
const Starfield: React.FC<StarfieldProps> = ({
  density = 0.08,
  speed = 0.03,
  active = true,
  theme = "dark",
  mousePosition,
  parallaxIntensity = 30,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const starsRef = React.useRef<Star[]>([]);
  const animationRef = React.useRef<number>();
  const lastTimeRef = React.useRef<number>(0);
  const mouseRef = React.useRef({ x: -1000, y: -1000 }); // Internal mouse tracking
  const currentMouseRef = React.useRef({ x: 0, y: 0 });
  const targetMouseRef = React.useRef({ x: 0, y: 0 });

  // Internal mouse event listeners
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth mouse position interpolation (Legacy parallax support)
  React.useEffect(() => {
    if (mousePosition?.isInViewport) {
      targetMouseRef.current = {
        x: mousePosition.normalizedX,
        y: mousePosition.normalizedY,
      };
    }
  }, [mousePosition]);

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

    const starColors =
      theme === "dark"
        ? ["255, 255, 255", "220, 240, 255", "255, 240, 220"]
        : ["0, 0, 0", "60, 60, 80", "100, 149, 237"];

    const gaussianRandom = (mean = 0, stdev = 1) => {
      const u = 1 - Math.random();
      const v = Math.random();
      const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return z * stdev + mean;
    };

    const createStars = () => {
      const currentEffectiveDensity = width < 640 ? density * 0.5 : density;
      const targetStarCount = Math.max(
        40,
        Math.floor((width * height * currentEffectiveDensity) / 120)
      );

      starsRef.current = Array.from({ length: targetStarCount }, () => {
        const z = Math.random() * 1.8 + 0.2;
        let r = Math.abs(gaussianRandom(0.8, 0.4));
        r = Math.max(0.2, Math.min(2.5, r));
        r *= 0.5 + z * 0.3;

        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          baseX: x,
          baseY: y,
          z,
          r,
          p: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          baseAlpha:
            theme === "dark"
              ? 0.3 + Math.random() * 0.7
              : 0.1 + Math.random() * 0.3,
          vx: 0,
          vy: 0,
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

      // Smooth mouse interpolation (easing)
      const lerpFactor = 0.08;
      currentMouseRef.current.x +=
        (targetMouseRef.current.x - currentMouseRef.current.x) * lerpFactor;
      currentMouseRef.current.y +=
        (targetMouseRef.current.y - currentMouseRef.current.y) * lerpFactor;

      const baseDrift = speed * (delta / 16);

      for (const s of starsRef.current) {
        const moveSpeed = baseDrift * s.z;

        // Update base position (drift)
        s.baseX += moveSpeed;
        s.baseY -= moveSpeed;

        // Wrap around
        if (s.baseX > width) s.baseX -= width;
        else if (s.baseX < 0) s.baseX += width;
        if (s.baseY < 0) s.baseY += height;
        else if (s.baseY > height) s.baseY -= height;

        // Apply mouse parallax offset based on depth
        const parallaxX = currentMouseRef.current.x * parallaxIntensity * s.z;
        const parallaxY = currentMouseRef.current.y * parallaxIntensity * s.z;

        // Gravity / Swirl Effect (Attraction)
        const dx = mouseRef.current.x - (s.baseX + parallaxX);
        const dy = mouseRef.current.y - (s.baseY + parallaxY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 400; // Radius of influence

        let targetOffsetX = 0;
        let targetOffsetY = 0;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          const swirlAngle = angle + Math.PI / 2; // 90 degrees for swirl

          // Attraction Force (pull towards mouse)
          const attractionStrength = 100; // How close they gather
          targetOffsetX = Math.cos(angle) * force * attractionStrength * s.z;
          targetOffsetY = Math.sin(angle) * force * attractionStrength * s.z;

          // Swirl Force (add tangential movement)
          const orbitRadius = 60 * (1 - force); // Closer stars orbit tighter
          targetOffsetX += Math.cos(swirlAngle) * orbitRadius * force * 3;
          targetOffsetY += Math.sin(swirlAngle) * orbitRadius * force * 3;
        }

        // Smooth Spring Interpolation
        const springStrength = 0.05;
        s.vx += (targetOffsetX - s.vx) * springStrength;
        s.vy += (targetOffsetY - s.vy) * springStrength;

        s.x = s.baseX + parallaxX + s.vx;
        s.y = s.baseY + parallaxY + s.vy;

        // Twinkle effect
        s.p += 0.02 + Math.random() * 0.01;
        const twinkle = Math.sin(s.p);

        let alpha = s.baseAlpha * (0.8 + twinkle * 0.3);
        alpha *= Math.min(1, s.z * 0.8);
        if (alpha < 0) alpha = 0;
        if (alpha > 1) alpha = 1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Glow for bright/close stars
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
  }, [density, speed, active, theme, parallaxIntensity]);

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
