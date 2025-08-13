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
      vx: number; // slow drift x
      vy: number; // slow drift y
      layer: number; // 1,2,3 for parallax
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
      const area = Math.max(1, (width * height) / 12000); // normalize
      const targetCount = Math.min(200, Math.max(40, Math.floor((density * area) / 25)));

      const newStars: Star[] = [];
      for (let i = 0; i < targetCount; i++) {
        // Layers: far -> near
        const layer = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
        const sizeBase = layer === 1 ? 0.6 : layer === 2 ? 0.9 : 1.2;
        const s: Star = {
          x: Math.random() * width,
          y: Math.random() * height,
          size: sizeBase + Math.random() * 0.8, // 0.6 - ~2.0
          baseAlpha: layer === 1 ? 0.2 + Math.random() * 0.2 : layer === 2 ? 0.3 + Math.random() * 0.2 : 0.4 + Math.random() * 0.3,
          amp: 0.15 + Math.random() * 0.25, // More expressive twinkling
          speed: 0.8 + Math.random() * 1.2, // Faster twinkle speed
          phase: Math.random() * Math.PI * 2,
          vx: (layer * 0.08 + Math.random() * 0.12) * (Math.random() > 0.5 ? 1 : -1), // Faster horizontal drift
          vy: (layer * 0.15 + Math.random() * 0.2), // Faster vertical drift
          layer
        };
        newStars.push(s);
      }
      stars = newStars;
    };

    const draw = (t: number) => {
      // Clear fully but keep background from parent
      ctx.clearRect(0, 0, width, height);

      // Use muted foreground for softer star tone in dark theme
      const starColorBase = getHslaFromVar('--muted-foreground', 1);
      // Extract HSL from the computed var by reusing same HSLA string but swapping alpha per star
      // We'll set fillStyle each star with alpha applied

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Twinkle based on time
        const twinkle = s.baseAlpha + s.amp * Math.sin(s.phase + t * s.speed);
        const alpha = Math.max(0, Math.min(1, twinkle));

        // Draw
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        // Replace alpha in hsla string by building from CSS var each time
        ctx.fillStyle = getHslaFromVar('--foreground', alpha * 0.8); // slightly brighter than muted
        ctx.fill();

        // Subtle core highlight for nearest layer
        if (s.layer === 3 && alpha > 0.4) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = getHslaFromVar('--accent', Math.min(0.25, alpha * 0.25));
          ctx.fill();
        }
      }
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
          if (s.x < -2) s.x = width + 2;
          if (s.x > width + 2) s.x = -2;
          if (s.y > height + 2) {
            s.y = -2;
            s.x = Math.random() * width;
          }
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

