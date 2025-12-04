import React from "react";
import { prefersReducedMotion, getDevicePixelRatio } from "@/utils/performance";

interface ShootingStarsProps {
	active?: boolean; // Control animation state
	speed?: number; // Speed factor to match starfield (default 0.4)
}

interface ShootingStar {
	x: number;
	y: number;
	dx: number;
	dy: number;
	life: number;
	maxLife: number;
	initialLength: number;
	speed: number;
}

/**
 * ShootingStars: Realistic shooting stars effect
 * - Moves diagonally from top-right to bottom-left
 * - Tapered tail that gets shorter as it travels
 * - Appears at intervals (~4-5 seconds)
 * - Speed matches the starfield effect
 */
const ShootingStars: React.FC<ShootingStarsProps> = ({
	active = true,
	speed = 0.4,
}) => {
	const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
	const shootingStarsRef = React.useRef<ShootingStar[]>([]);
	const animationRef = React.useRef<number>();
	const lastTimeRef = React.useRef<number>(0);

	React.useEffect(() => {
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

		const handleResize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = width + "px";
			canvas.style.height = height + "px";
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.scale(dpr, dpr);
		};

		window.addEventListener("resize", handleResize);

		const reduced = prefersReducedMotion();

		const createShootingStar = () => {
			const startX = width * (0.7 + Math.random() * 0.3); // 70-100% from left (top right)
			const startY = height * (Math.random() * 0.1 - 0.05); // -5% to 5% from top

			// Angle pointing down-left (135 deg) from top right
			const angle = Math.PI * 0.75;
			const shootingSpeed = 10 * (speed / 0.4);
			const dx = Math.cos(angle) * shootingSpeed;
			const dy = Math.sin(angle) * shootingSpeed;

			const initialLength = 120 + Math.random() * 80; // 120-200px initial tail
			const maxLife = 80 + Math.random() * 40; // Frames to live

			shootingStarsRef.current.push({
				x: startX,
				y: startY,
				dx,
				dy,
				life: maxLife,
				maxLife,
				initialLength,
				speed: shootingSpeed,
			});
		};

		const animate = (time: number) => {
			if (!active || reduced) {
				animationRef.current = requestAnimationFrame(animate);
				return;
			}

			const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
			lastTimeRef.current = time;

			ctx.clearRect(0, 0, width, height);

			// Update and draw shooting stars
			for (let i = shootingStarsRef.current.length - 1; i >= 0; i--) {
				const star = shootingStarsRef.current[i];

				// Update position
				const moveFactor = delta / 16; // Normalize to ~60fps
				star.x += star.dx * moveFactor;
				star.y += star.dy * moveFactor;
				star.life -= 1 * moveFactor;

				// Remove if dead or off-screen
				if (
					star.life <= 0 ||
					star.x < -star.initialLength ||
					star.y > height + star.initialLength
				) {
					shootingStarsRef.current.splice(i, 1);
					continue;
				}

				// Calculate tail length (decreases as life decreases)
				const lifeRatio = star.life / star.maxLife;
				const fadeOutCurve = lifeRatio ** 0.7; // Slower fade initially
				const currentLength = star.initialLength * fadeOutCurve;

				// Calculate tail end position
				const angle = Math.atan2(star.dy, star.dx);
				const tailEndX = star.x - Math.cos(angle) * currentLength;
				const tailEndY = star.y - Math.sin(angle) * currentLength;

				// Draw shooting star with gradient tail
				const gradient = ctx.createLinearGradient(
					star.x,
					star.y,
					tailEndX,
					tailEndY,
				);

				const alpha = Math.min(1, lifeRatio * 1.2); // Slight alpha boost
				gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
				gradient.addColorStop(0.3, `rgba(200, 220, 255, ${alpha * 0.8})`);
				gradient.addColorStop(0.7, `rgba(150, 180, 255, ${alpha * 0.4})`);
				gradient.addColorStop(1, `rgba(100, 150, 255, 0)`);

				// Draw the tail
				ctx.beginPath();
				ctx.moveTo(star.x, star.y);
				ctx.lineTo(tailEndX, tailEndY);
				ctx.strokeStyle = gradient;
				ctx.lineWidth = 2.5 * fadeOutCurve; // Taper width
				ctx.lineCap = "round";
				ctx.shadowBlur = 8 * fadeOutCurve;
				ctx.shadowColor = `rgba(200, 220, 255, ${alpha * 0.8})`;
				ctx.stroke();
				ctx.shadowBlur = 0;

				// Draw bright head point
				ctx.beginPath();
				ctx.arc(star.x, star.y, 1.5 * fadeOutCurve, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
				ctx.shadowBlur = 10 * fadeOutCurve;
				ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
				ctx.fill();
				ctx.shadowBlur = 0;
			}

			// Randomly create new shooting stars (~1 every 4-5 seconds)
			if (Math.random() < 0.005) {
				createShootingStar();
			}

			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener("resize", handleResize);
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [active, speed]);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none"
			style={{ zIndex: 0 }}
			aria-hidden="true"
		/>
	);
};

export default ShootingStars;
