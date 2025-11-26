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
  vx: number; // Velocity X
  vy: number; // Velocity Y
  targetVx: number; // Target velocity X for smooth interpolation
  targetVy: number; // Target velocity Y for smooth interpolation
  orbitAngle: number; // Individual orbit angle for swirl effect
  orbitSpeed: number; // Individual orbit speed
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
  const isMouseMovingRef = React.useRef(false); // Track if mouse is actively moving
  const mouseIdleTimerRef = React.useRef<number | null>(null);
  const effectStrengthRef = React.useRef(0); // 0 = no effect, 1 = full effect

  // Internal mouse event listeners with idle detection
  React.useEffect(() => {
    const IDLE_TIMEOUT = 150; // ms before considering mouse idle

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }

      // Mouse is moving - activate effect
      isMouseMovingRef.current = true;

      // Clear existing idle timer
      if (mouseIdleTimerRef.current) {
        clearTimeout(mouseIdleTimerRef.current);
      }

      // Set new idle timer
      mouseIdleTimerRef.current = window.setTimeout(() => {
        isMouseMovingRef.current = false;
      }, IDLE_TIMEOUT);
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      isMouseMovingRef.current = false;
      if (mouseIdleTimerRef.current) {
        clearTimeout(mouseIdleTimerRef.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (mouseIdleTimerRef.current) {
        clearTimeout(mouseIdleTimerRef.current);
      }
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
          targetVx: 0,
          targetVy: 0,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitSpeed: 0.02 + Math.random() * 0.03,
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

    // Smooth mouse position with exponential smoothing
    const smoothMouseRef = { x: -1000, y: -1000 };
    const mouseVelocityRef = { x: 0, y: 0 };
    let lastMouseX = -1000;
    let lastMouseY = -1000;

    const animate = (time: number) => {
      if (!active || reduced) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
      const deltaFactor = delta / 16; // Normalize to 60fps
      lastTimeRef.current = time;
      ctx.clearRect(0, 0, width, height);

      // Smoothly fade effect strength based on mouse movement
      const targetStrength = isMouseMovingRef.current ? 1 : 0;
      const strengthLerpSpeed = isMouseMovingRef.current ? 0.15 : 0.05; // Faster activation, slower deactivation
      effectStrengthRef.current +=
        (targetStrength - effectStrengthRef.current) * strengthLerpSpeed;

      // Ultra-smooth mouse interpolation with velocity tracking
      const mouseLerpFactor = 0.15;
      const rawMouseX = mouseRef.current.x;
      const rawMouseY = mouseRef.current.y;

      // Track mouse velocity for momentum
      mouseVelocityRef.x = (rawMouseX - lastMouseX) * 0.5;
      mouseVelocityRef.y = (rawMouseY - lastMouseY) * 0.5;
      lastMouseX = rawMouseX;
      lastMouseY = rawMouseY;

      // Smooth mouse position with easing
      smoothMouseRef.x += (rawMouseX - smoothMouseRef.x) * mouseLerpFactor;
      smoothMouseRef.y += (rawMouseY - smoothMouseRef.y) * mouseLerpFactor;

      // Smooth parallax interpolation
      const parallaxLerpFactor = 0.06;
      currentMouseRef.current.x +=
        (targetMouseRef.current.x - currentMouseRef.current.x) *
        parallaxLerpFactor;
      currentMouseRef.current.y +=
        (targetMouseRef.current.y - currentMouseRef.current.y) *
        parallaxLerpFactor;

      const baseDrift = speed * deltaFactor;

      // REPULSION EFFECT PARAMETERS - creates empty space around cursor
      const effectRadius = 400; // Large area of effect
      const emptyZoneRadius = 100; // Inner zone where no stars should be
      const repulsionStrength = 180; // How strongly stars are pushed away

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

        // Calculate distance to smoothed mouse position
        const starPosX = s.baseX + parallaxX;
        const starPosY = s.baseY + parallaxY;
        const dx = smoothMouseRef.x - starPosX;
        const dy = smoothMouseRef.y - starPosY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Reset targets
        s.targetVx = 0;
        s.targetVy = 0;

        // Only apply effect when mouse is moving (effectStrength > 0) and mouse is on screen
        const effectActive =
          effectStrengthRef.current > 0.01 && smoothMouseRef.x > 0;

        if (dist < effectRadius && effectActive) {
          const angle = Math.atan2(dy, dx);

          // REPULSION - push stars AWAY from cursor (opposite direction)
          // Stronger repulsion when closer to cursor
          const normalizedDist = dist / effectRadius;
          const repulsionForce = Math.pow(1 - normalizedDist, 2);

          // Calculate repulsion - push away from cursor
          const pushStrength =
            repulsionStrength *
            repulsionForce *
            s.z *
            effectStrengthRef.current;

          // Push in opposite direction (away from cursor)
          s.targetVx = -Math.cos(angle) * pushStrength;
          s.targetVy = -Math.sin(angle) * pushStrength;

          // Extra strong repulsion in the empty zone
          if (dist < emptyZoneRadius) {
            const zoneForce =
              ((emptyZoneRadius - dist) / emptyZoneRadius) *
              effectStrengthRef.current;
            const extraPush = 250 * zoneForce * s.z;
            s.targetVx -= Math.cos(angle) * extraPush;
            s.targetVy -= Math.sin(angle) * extraPush;
          }

          // Mouse movement influence - stars follow cursor movement direction
          const dragInfluence = repulsionForce * 0.6 * effectStrengthRef.current;
          s.targetVx += mouseVelocityRef.x * dragInfluence;
          s.targetVy += mouseVelocityRef.y * dragInfluence;
        }

        // Calculate proximity factor for subtle visual enhancements (0 = far, 1 = close)
        const proximityFactor =
          dist < effectRadius && effectActive
            ? Math.pow(1 - dist / effectRadius, 1.5) * effectStrengthRef.current
            : 0;

        // Slightly faster spring for stars near cursor
        const springStrength = 0.1 + proximityFactor * 0.05;
        const damping = 0.9 - proximityFactor * 0.03;

        // Apply spring force toward target
        const springForceX = (s.targetVx - s.vx) * springStrength;
        const springForceY = (s.targetVy - s.vy) * springStrength;

        s.vx = s.vx * damping + springForceX;
        s.vy = s.vy * damping + springForceY;

        // Final position
        s.x = starPosX + s.vx;
        s.y = starPosY + s.vy;

        // Twinkle effect - slightly faster near cursor
        s.p += 0.02 + proximityFactor * 0.02 + Math.random() * 0.01;
        const twinkle = Math.sin(s.p);

        let alpha = s.baseAlpha * (0.8 + twinkle * 0.3);
        alpha *= Math.min(1, s.z * 0.8);
        // Subtle brightness boost near cursor
        alpha = Math.min(1, alpha + proximityFactor * 0.25);

        if (alpha < 0) alpha = 0;
        if (alpha > 1) alpha = 1;

        // Subtle size increase near cursor (up to 1.5x)
        const sizeMultiplier = 1 + proximityFactor * 0.5;
        const currentRadius = s.r * sizeMultiplier;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Enhanced glow for stars near cursor
        const glowMultiplier = 1 + proximityFactor * 1.5;
        if (s.z > 1.0 && alpha > 0.5) {
          ctx.shadowBlur = currentRadius * 3.5 * glowMultiplier;
          ctx.shadowColor = `rgba(${s.color}, ${alpha * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (proximityFactor > 0.3) {
          // Add subtle glow to smaller stars when near cursor
          ctx.shadowBlur = currentRadius * 3 * glowMultiplier;
          ctx.shadowColor = `rgba(${s.color}, ${alpha * 0.7})`;
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
