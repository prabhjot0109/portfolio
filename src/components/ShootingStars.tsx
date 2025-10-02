import React from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  life: number;
  maxLife: number;
  length: number;
}

const ShootingStars: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      // Adjust density as needed
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Shooting stars array
    const shootingStars: ShootingStar[] = [];

    const createShootingStar = () => {
      const angle = Math.PI / 4 + ((Math.random() - 0.5) * Math.PI) / 2; // Diagonal directions
      const speed = 8 + Math.random() * 12;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      const length = 80 + Math.random() * 120;
      const maxLife = 60 + Math.random() * 40; // Frames to live

      shootingStars.push({
        x: Math.random() * canvas.width * 0.2 - length, // Start off-screen left/top
        y: Math.random() * canvas.height * 0.3,
        dx,
        dy,
        life: maxLife,
        maxLife,
        length,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sky gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#000022"); // Dark navy
      gradient.addColorStop(1, "#000044"); // Deeper blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and twinkle stars
      for (const star of stars) {
        star.phase += 0.005 + Math.random() * 0.005; // Slow twinkle
        const twinkleAlpha = 0.6 + Math.sin(star.phase) * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleAlpha})`;
        ctx.fill();
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.dx;
        s.y += s.dy;
        s.life -= 1;

        if (
          s.life <= 0 ||
          s.x > canvas.width + s.length ||
          s.y > canvas.height + s.length
        ) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw the shooting star as a line with fade
        const alpha = s.life / s.maxLife;
        const speed = Math.sqrt(s.dx * s.dx + s.dy * s.dy);
        const tailX = s.x - (s.length * s.dx) / speed;
        const tailY = s.y - (s.length * s.dy) / speed;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 2 * alpha; // Thinner as it fades
        ctx.stroke();
      }

      // Randomly create new shooting stars (adjust probability for frequency)
      if (Math.random() < 0.02) {
        // ~1-2 per second at 60fps
        createShootingStar();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ShootingStars;
