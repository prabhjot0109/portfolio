import React, { useEffect, useRef } from "react";

// Enhanced starfield inspired by Grok AI's beautiful night sky
// - Dynamic background with subtle gradients
// - Realistic twinkling stars with natural patterns
// - Occasional shooting star trails
// - Multiple layers for depth and parallax
// - Honors prefers-reduced-motion
// - Colors pulled from theme tokens for perfect integration
const ShootingStars: React.FC<{ density?: number }> = ({ density = 120 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(true);

  // Get HSLA color string from CSS variable tokens
  const getHslaFromVar = (cssVar: string, alpha = 1) => {
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim(); // e.g. "210 40% 98%"
    return `hsla(${val} / ${alpha})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return; // Respect reduced motion

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      amp: number;
      speed: number;
      phase: number;
      vx: number;
      vy: number;
      layer: number;
      pulsePhase: number;
      driftAngle: number;
      orbitRadius: number;
      twinkleIntensity: number;
      isSpecial: boolean; // For brighter focal stars
    };

    type ShootingStar = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      alpha: number;
      trail: Array<{ x: number; y: number; alpha: number }>;
    };

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = 0;

    // Create subtle background gradient
    const createBackgroundGradient = () => {
      const gradient = ctx.createRadialGradient(
        width * 0.3,
        height * 0.2,
        0,
        width * 0.7,
        height * 0.8,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, getHslaFromVar("--background", 1));
      gradient.addColorStop(0.3, getHslaFromVar("--background", 0.98));
      gradient.addColorStop(0.7, getHslaFromVar("--muted", 0.02));
      gradient.addColorStop(1, getHslaFromVar("--background", 1));
      return gradient;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Create enhanced star field
      const area = Math.max(1, (width * height) / 15000);
      const targetCount = Math.min(
        180,
        Math.max(40, Math.floor((density * area) / 20))
      );

      const newStars: Star[] = [];
      for (let i = 0; i < targetCount; i++) {
        const layer = Math.random() < 0.4 ? 1 : Math.random() < 0.7 ? 2 : 3;
        const sizeBase = layer === 1 ? 0.3 : layer === 2 ? 0.6 : 1.2;
        const driftAngle = Math.random() * Math.PI * 2;
        const baseSpeed = layer * 0.08 + Math.random() * 0.25;
        const isSpecial = Math.random() < 0.05; // 5% chance for special bright stars

        const s: Star = {
          x: Math.random() * width,
          y: Math.random() * height,
          size: sizeBase + Math.random() * (isSpecial ? 1.5 : 0.4),
          baseAlpha: isSpecial
            ? 0.6 + Math.random() * 0.4
            : layer === 1
            ? 0.15 + Math.random() * 0.25
            : layer === 2
            ? 0.25 + Math.random() * 0.3
            : 0.35 + Math.random() * 0.4,
          amp: 0.2 + Math.random() * (isSpecial ? 0.7 : 0.4),
          speed: 0.3 + Math.random() * (isSpecial ? 2.0 : 1.2),
          phase: Math.random() * Math.PI * 2,
          vx: Math.cos(driftAngle) * baseSpeed * (0.7 + Math.random() * 0.6),
          vy: Math.sin(driftAngle) * baseSpeed * (0.7 + Math.random() * 0.6),
          layer,
          pulsePhase: Math.random() * Math.PI * 2,
          driftAngle,
          orbitRadius: 0.3 + Math.random() * (isSpecial ? 2.0 : 1.2),
          twinkleIntensity: 0.5 + Math.random() * 0.5,
          isSpecial,
        };
        newStars.push(s);
      }
      stars = newStars;
      shootingStars = []; // Reset shooting stars on resize
    };

    // Create shooting star - only from top to bottom
    const createShootingStar = () => {
      // Always start from top edge
      const x = Math.random() * width;
      const y = -10;

      // Slight horizontal variation but mainly downward
      const vx = (Math.random() - 0.5) * 50; // Much less horizontal movement
      const vy = 150 + Math.random() * 100; // Always downward

      const maxLife = 0.8 + Math.random() * 0.7;
      shootingStars.push({
        x,
        y,
        vx,
        vy,
        life: 0,
        maxLife,
        size: 1 + Math.random() * 1.5,
        alpha: 0.8 + Math.random() * 0.2,
        trail: [],
      });
    };

    const draw = (t: number) => {
      // Draw subtle background gradient
      const bgGradient = createBackgroundGradient();
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Enhanced natural twinkling
        const primaryTwinkle = Math.sin(s.phase + t * s.speed);
        const secondaryPulse = Math.sin(s.pulsePhase + t * s.speed * 0.6) * 0.4;
        const tertiaryShimmer =
          Math.sin(s.phase * 1.3 + t * s.speed * 1.1) * 0.2;

        const combinedTwinkle =
          (primaryTwinkle + secondaryPulse + tertiaryShimmer) / 3;
        const twinkle =
          s.baseAlpha + s.amp * combinedTwinkle * s.twinkleIntensity;
        const alpha = Math.max(0, Math.min(1, twinkle));

        if (alpha < 0.02) continue;

        // Enhanced orbital motion with natural drift
        const orbitX =
          s.x + Math.cos(t * 0.2 + s.driftAngle) * s.orbitRadius * 0.3;
        const orbitY =
          s.y + Math.sin(t * 0.15 + s.driftAngle) * s.orbitRadius * 0.2;

        const starSize = s.size * (0.7 + alpha * 0.6);

        // Main star body
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, starSize, 0, Math.PI * 2);

        if (s.isSpecial) {
          // Special stars get accent colors
          ctx.fillStyle = getHslaFromVar("--accent", alpha * 0.8);
        } else {
          ctx.fillStyle = getHslaFromVar("--foreground", alpha);
        }
        ctx.fill();

        // Glow effects for brighter stars
        if (alpha > 0.5) {
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, starSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = s.isSpecial
            ? getHslaFromVar("--accent", alpha * 0.1)
            : getHslaFromVar("--foreground", alpha * 0.08);
          ctx.fill();

          // Additional outer glow for special stars
          if (s.isSpecial && alpha > 0.7) {
            ctx.beginPath();
            ctx.arc(orbitX, orbitY, starSize * 3, 0, Math.PI * 2);
            ctx.fillStyle = getHslaFromVar("--accent", alpha * 0.04);
            ctx.fill();
          }
        }

        // Subtle cross-pattern for the brightest stars
        if (s.isSpecial && alpha > 0.8) {
          const lineLength = starSize * 2;
          ctx.strokeStyle = getHslaFromVar("--accent", alpha * 0.3);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(orbitX - lineLength, orbitY);
          ctx.lineTo(orbitX + lineLength, orbitY);
          ctx.moveTo(orbitX, orbitY - lineLength);
          ctx.lineTo(orbitX, orbitY + lineLength);
          ctx.stroke();
        }
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        const lifeRatio = ss.life / ss.maxLife;
        const fadeAlpha = ss.alpha * (1 - Math.pow(lifeRatio, 2));

        if (fadeAlpha <= 0.01 || ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw trail
        for (let j = 0; j < ss.trail.length; j++) {
          const trailPoint = ss.trail[j];
          const trailAlpha =
            trailPoint.alpha * fadeAlpha * (1 - j / ss.trail.length);

          if (trailAlpha > 0.01) {
            ctx.beginPath();
            ctx.arc(
              trailPoint.x,
              trailPoint.y,
              ss.size * (1 - (j / ss.trail.length) * 0.8),
              0,
              Math.PI * 2
            );
            ctx.fillStyle = getHslaFromVar("--accent", trailAlpha);
            ctx.fill();
          }
        }

        // Draw main shooting star
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
        ctx.fillStyle = getHslaFromVar("--accent", fadeAlpha);
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = getHslaFromVar("--background", fadeAlpha * 0.9);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const step = (() => {
      let last = performance.now();
      return (now: number) => {
        if (!runningRef.current) return;
        const dt = Math.min(50, now - last) / 1000;
        last = now;
        const t = now / 1000;

        // Update star positions with gentle drift
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.x += s.vx * dt;
          s.y += s.vy * dt;

          // Wrap around edges smoothly
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
        }

        // Update shooting stars
        for (let i = 0; i < shootingStars.length; i++) {
          const ss = shootingStars[i];

          // Add current position to trail
          ss.trail.unshift({ x: ss.x, y: ss.y, alpha: 1 });
          if (ss.trail.length > 12) ss.trail.pop();

          // Update position
          ss.x += ss.vx * dt;
          ss.y += ss.vy * dt;
          ss.life += dt;

          // Fade trail points
          for (let j = 0; j < ss.trail.length; j++) {
            ss.trail[j].alpha *= 0.95;
          }
        }

        // Occasionally create shooting stars (every 3-8 seconds)
        if (t - lastShootingStarTime > 3 + Math.random() * 5) {
          createShootingStar();
          lastShootingStarTime = t;
        }

        draw(t);
        rafRef.current = requestAnimationFrame(step);
      };
    })();

    const onVisibility = () => {
      runningRef.current = document.visibilityState === "visible";
      if (runningRef.current) {
        rafRef.current = requestAnimationFrame(step);
      } else if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      aria-hidden="true"
      role="img"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ShootingStars;
