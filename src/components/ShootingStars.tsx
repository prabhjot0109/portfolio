import React, { useEffect, useRef } from 'react';

// Minimal, high-performance starfield inspired by Grok AI
// - Plain background (comes from page's bg)
// - Small twinkling stars with subtle parallax drift
// - Honors prefers-reduced-motion
// - Colors pulled from theme tokens for perfect integration
const ShootingStars: React.FC<{ density?: number }> = ({ density = 140 }) => {
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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return; // Respect reduced motion

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = {
      x: number;
      y: number;
      size: number; // radius in px
      baseAlpha: number;
      amp: number; // twinkle amplitude
      speed: number; // twinkle speed
      phase: number; // starting phase for variety
      vx: number; // horizontal velocity
      vy: number; // vertical velocity
      layer: number; // 1,2,3 for parallax
      pulsePhase: number; // secondary pulse for more natural twinkle
      driftAngle: number; // natural drift direction
      orbitRadius: number; // subtle orbital motion
    };

    let stars: Star[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recreate stars according to viewport with slight scaling by area
      const area = Math.max(1, (width * height) / 12000); // normalize with higher threshold
      const targetCount = Math.min(200, Math.max(50, Math.floor((density * area) / 25))); // More stars

      const newStars: Star[] = [];
      for (let i = 0; i < targetCount; i++) {
        // Layers: far -> near
        const layer = Math.random() < 0.5 ? 1 : Math.random() < 0.8 ? 2 : 3;
        const sizeBase = layer === 1 ? 0.4 : layer === 2 ? 0.7 : 1.0;
        const driftAngle = Math.random() * Math.PI * 2;
        const baseSpeed = layer * 0.1 + Math.random() * 0.3;
        
        const s: Star = {
          x: Math.random() * width,
          y: Math.random() * height,
          size: sizeBase + Math.random() * 0.5,
          baseAlpha: layer === 1 ? 0.2 + Math.random() * 0.3 : layer === 2 ? 0.3 + Math.random() * 0.3 : 0.4 + Math.random() * 0.4,
          amp: 0.3 + Math.random() * 0.5, // More natural twinkling
          speed: 0.5 + Math.random() * 1.5, // Natural twinkle rhythm
          phase: Math.random() * Math.PI * 2,
          vx: Math.cos(driftAngle) * baseSpeed * (0.8 + Math.random() * 0.4), // Natural flowing movement
          vy: Math.sin(driftAngle) * baseSpeed * (0.8 + Math.random() * 0.4), // Natural flowing movement
          layer,
          pulsePhase: Math.random() * Math.PI * 2, // Secondary pulse for natural effect
          driftAngle,
          orbitRadius: 0.5 + Math.random() * 1.5 // Subtle orbital motion
        };
        newStars.push(s);
      }
      stars = newStars;
    };

    const draw = (t: number) => {
      // Clear fully but keep background from parent
      ctx.clearRect(0, 0, width, height);

      // Batch drawing operations for better performance
      ctx.globalCompositeOperation = 'lighter';
      
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Natural multi-layered twinkling like Grok
        const primaryTwinkle = Math.sin(s.phase + t * s.speed);
        const secondaryPulse = Math.sin(s.pulsePhase + t * s.speed * 0.7) * 0.3;
        const twinkle = s.baseAlpha + s.amp * (primaryTwinkle + secondaryPulse);
        const alpha = Math.max(0, Math.min(1, twinkle));

        // Skip drawing if alpha is too low (performance optimization)
        if (alpha < 0.02) continue;

        // Subtle orbital motion for natural feel
        const orbitX = s.x + Math.cos(t * 0.3 + s.driftAngle) * s.orbitRadius * 0.2;
        const orbitY = s.y + Math.sin(t * 0.3 + s.driftAngle) * s.orbitRadius * 0.1;

        // Draw main star with soft glow
        const starSize = s.size * (0.8 + alpha * 0.4); // Size varies with twinkle
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, starSize, 0, Math.PI * 2);
        ctx.fillStyle = getHslaFromVar('--foreground', alpha * 0.9);
        ctx.fill();

        // Enhanced glow effect for brighter stars
        if (alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, starSize * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = getHslaFromVar('--foreground', alpha * 0.1);
          ctx.fill();
        }

        // Accent core for nearest layer stars
        if (s.layer === 3 && alpha > 0.7) {
          ctx.beginPath();
          ctx.arc(orbitX, orbitY, starSize * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = getHslaFromVar('--accent', Math.min(0.3, alpha * 0.3));
          ctx.fill();
        }
      }
      
      ctx.globalCompositeOperation = 'source-over';
    };

    const step = (() => {
      let last = performance.now();
      return (now: number) => {
        if (!runningRef.current) return;
        const dt = Math.min(50, now - last) / 1000; // seconds
        last = now;
        const t = now / 1000; // seconds for twinkle

        // Update positions
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.x += s.vx * dt;
          s.y += s.vy * dt;

          // Wrap around edges for continuous flow
          if (s.x < -5) s.x = width + 5;
          if (s.x > width + 5) s.x = -5;
          if (s.y < -5) s.y = height + 5;
          if (s.y > height + 5) s.y = -5;
        }

        draw(t);
        rafRef.current = requestAnimationFrame(step);
      };
    })();

    const onVisibility = () => {
      runningRef.current = document.visibilityState === 'visible';
      if (runningRef.current) {
        rafRef.current = requestAnimationFrame(step);
      } else if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true" role="img">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ShootingStars;

