import React, { useEffect, useRef } from 'react';

// Lightweight, high-performance shooting stars effect inspired by Grok AI
// Uses canvas for smooth animation and minimal DOM overhead
const ShootingStars: React.FC<{ density?: number }>
  = ({ density = 18 }) => {
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
      vx: number;
      vy: number;
      length: number;
      width: number;
      opacity: number;
      life: number;
      maxLife: number;
    };

    const stars: Star[] = [];
    const maxStars = density; // parallelizable by prop

    const angle = (35 * Math.PI) / 180; // ~35deg downward, right->left
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnStar = () => {
      const speed = 300 + Math.random() * 600; // px/s
      const length = 80 + Math.random() * 160; // px
      const w = Math.random() < 0.8 ? 1 : 2; // subtle thin lines
      // Start from right/top quadrant
      const startX = width * (0.8 + Math.random() * 0.5);
      const startY = -50 + Math.random() * height * 0.4;

      const vx = -cos * speed;
      const vy = sin * speed;

      const life = (length / speed) * (800 + Math.random() * 600); // ms, scaled by tail

      stars.push({
        x: startX,
        y: startY,
        vx,
        vy,
        length,
        width: w,
        opacity: 0.5 + Math.random() * 0.4,
        life: 0,
        maxLife: life,
      });
    };

    let last = performance.now();

    const draw = (dt: number) => {
      // Clear with subtle fade to create natural trails blending
      ctx.clearRect(0, 0, width, height);

      const headColor = getHslaFromVar('--foreground', 0.95);
      const tailColor = getHslaFromVar('--foreground', 0);

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.life += dt;
        s.x += s.vx * (dt / 1000);
        s.y += s.vy * (dt / 1000);

        // Tail vector (along motion direction)
        const tx = s.x + cos * s.length;
        const ty = s.y - sin * s.length; // subtract to go opposite direction for tail

        // Fade in/out based on life
        const lifeT = s.life / s.maxLife;
        const alpha = lifeT < 0.2
          ? (lifeT / 0.2) * s.opacity
          : lifeT > 0.8
          ? ((1 - lifeT) / 0.2) * s.opacity
          : s.opacity;

        // Gradient tail
        const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
        grad.addColorStop(0, headColor);
        grad.addColorStop(1, tailColor);

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.globalAlpha = alpha;
        ctx.stroke();

        // occasional sparkle head
        if (Math.random() < 0.05) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.width + 0.5, 0, Math.PI * 2);
          ctx.fillStyle = getHslaFromVar('--accent', Math.min(1, alpha + 0.2));
          ctx.fill();
        }

        // Remove when offscreen or life done
        if (
          s.life >= s.maxLife ||
          s.x < -200 ||
          s.y > height + 200
        ) {
          stars.splice(i, 1);
        }
      }
    };

    const tick = (now: number) => {
      if (!runningRef.current) return;
      const dt = Math.min(50, now - last); // cap dt for stability
      last = now;

      // Spawn
      if (stars.length < maxStars) {
        // Spawn probabilistically to avoid bursts
        if (Math.random() < 0.8) spawnStar();
      }

      draw(dt);
      rafRef.current = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      runningRef.current = document.visibilityState === 'visible';
      if (runningRef.current) {
        last = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      } else if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
};

export default ShootingStars;
