import React, { useEffect, useRef } from "react";

// Enhanced starfield inspired by Grok.com's beautiful night sky
// - Theme-aware: Adapts to both light and dark modes
// - White stars on dark background, dark stars on light background
// - Elegant shooting stars moving diagonally from top-right to bottom-left
// - Minimalist and clean aesthetic
// - Honors prefers-reduced-motion
const ShootingStars: React.FC<{ density?: number }> = ({ density = 120 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

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

    // Theme detection function - improved
    const isDarkTheme = () => {
      const bgValue = getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim();
      // Parse HSL values: "0 0% 0%" = dark, "0 0% 100%" = light
      const matches = bgValue.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
      if (matches) {
        const lightness = parseInt(matches[3]);
        // If lightness is less than 50%, it's dark theme
        return lightness < 50;
      }
      return false;
    };

    const getThemeColors = () => {
      const isDark = isDarkTheme();
      if (isDark) {
        // Dark theme: white stars on very dark background
        return {
          background: "rgba(10, 10, 10, 1)", // Very dark background
          starColor: "rgba(255, 255, 255,", // White stars
          shootingStarColor: "rgba(255, 255, 255,", // White shooting stars
        };
      } else {
        // Light theme: dark stars on light background
        return {
          background: "rgba(250, 250, 250, 1)", // Very light background
          starColor: "rgba(50, 50, 50,", // Dark gray stars
          shootingStarColor: "rgba(30, 30, 30,", // Darker shooting stars
        };
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = Math.max(1, (width * height) / 10000);
      const targetCount = Math.min(
        300,
        Math.max(80, Math.floor((density * area) / 12))
      );

      const newStars: Star[] = [];
      for (let i = 0; i < targetCount; i++) {
        const layer = Math.random() < 0.4 ? 1 : Math.random() < 0.7 ? 2 : 3;
        const sizeBase = layer === 1 ? 0.4 : layer === 2 ? 0.7 : 1.0;
        const driftAngle = Math.random() * Math.PI * 2;
        const baseSpeed = layer * 0.05 + Math.random() * 0.15;

        const s: Star = {
          x: Math.random() * width,
          y: Math.random() * height,
          size: sizeBase + Math.random() * 0.5,
          baseAlpha:
            layer === 1
              ? 0.2 + Math.random() * 0.3
              : layer === 2
              ? 0.3 + Math.random() * 0.35
              : 0.4 + Math.random() * 0.4,
          amp: 0.3 + Math.random() * 0.4,
          speed: 0.4 + Math.random() * 1.0,
          phase: Math.random() * Math.PI * 2,
          vx: Math.cos(driftAngle) * baseSpeed * (0.5 + Math.random() * 0.5),
          vy: Math.sin(driftAngle) * baseSpeed * (0.5 + Math.random() * 0.5),
          layer,
          pulsePhase: Math.random() * Math.PI * 2,
          driftAngle,
          orbitRadius: 0.2 + Math.random() * 0.8,
          twinkleIntensity: 0.6 + Math.random() * 0.4,
        };
        newStars.push(s);
      }
      stars = newStars;
      shootingStars = [];
    };

    const createShootingStar = () => {
      // Start from top-right corner area
      const x = width * 0.7 + Math.random() * width * 0.3; // Right 30% of screen
      const y = -20 + Math.random() * 50; // Near top

      // Move diagonally from top-right to bottom-left
      const vx = -(150 + Math.random() * 100); // Negative for leftward movement
      const vy = 100 + Math.random() * 80; // Downward movement (less than horizontal for diagonal)

      const maxLife = 1.0 + Math.random() * 0.8;
      shootingStars.push({
        x,
        y,
        vx,
        vy,
        life: 0,
        maxLife,
        size: 1.5 + Math.random() * 1.0,
        alpha: 0.9 + Math.random() * 0.1,
        trail: [],
      });
    };

    const draw = (t: number) => {
      const colors = getThemeColors();

      // Theme-appropriate background
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
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

        const orbitX =
          s.x + Math.cos(t * 0.2 + s.driftAngle) * s.orbitRadius * 0.3;
        const orbitY =
          s.y + Math.sin(t * 0.15 + s.driftAngle) * s.orbitRadius * 0.2;
        const starSize = s.size * (0.8 + alpha * 0.4);

        ctx.beginPath();
        ctx.arc(orbitX, orbitY, starSize, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.starColor} ${alpha * 0.9})`;
        ctx.fill();

        if (alpha > 0.5) {
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, starSize * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${colors.starColor} ${alpha * 0.1})`;
          ctx.fill();
          if (alpha > 0.7) {
            ctx.beginPath();
            ctx.arc(orbitX, orbitY, starSize * 4, 0, Math.PI * 2);
            ctx.fillStyle = `${colors.starColor} ${alpha * 0.05})`;
            ctx.fill();
          }
        }
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        const lifeRatio = ss.life / ss.maxLife;
        const fadeAlpha = ss.alpha * (1 - Math.pow(lifeRatio, 2));
        if (fadeAlpha <= 0.01 || ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        for (let j = 0; j < ss.trail.length; j++) {
          const trailPoint = ss.trail[j];
          const trailFade = 1 - j / ss.trail.length;
          const trailAlpha = trailPoint.alpha * fadeAlpha * trailFade * 0.8;
          if (trailAlpha > 0.01) {
            const trailSize = ss.size * (1 - (j / ss.trail.length) * 0.7);
            ctx.beginPath();
            ctx.arc(trailPoint.x, trailPoint.y, trailSize * 2, 0, Math.PI * 2);
            ctx.fillStyle = `${colors.shootingStarColor} ${trailAlpha * 0.2})`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2);
            ctx.fillStyle = `${colors.shootingStarColor} ${trailAlpha})`;
            ctx.fill();
          }
        }

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.shootingStarColor} ${fadeAlpha * 0.15})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.shootingStarColor} ${fadeAlpha * 0.6})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.shootingStarColor} ${fadeAlpha})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.shootingStarColor} ${fadeAlpha * 0.95})`;
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

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.x += s.vx * dt;
          s.y += s.vy * dt;
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
        }

        for (let i = 0; i < shootingStars.length; i++) {
          const ss = shootingStars[i];
          ss.trail.unshift({ x: ss.x, y: ss.y, alpha: 1 });
          if (ss.trail.length > 25) ss.trail.pop();
          ss.x += ss.vx * dt;
          ss.y += ss.vy * dt;
          ss.life += dt;
          for (let j = 0; j < ss.trail.length; j++) {
            ss.trail[j].alpha *= 0.96;
          }
        }

        if (t - lastShootingStarTime > 2 + Math.random() * 2) {
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
