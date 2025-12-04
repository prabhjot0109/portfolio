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
	trail: { x: number; y: number; alpha: number }[]; // Trail positions
	hue: number; // Individual hue offset for color variation
	pulsePhase: number; // Phase for pulsing effect
	mass: number; // Star mass for gravitational interactions
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
				Math.floor((width * height * currentEffectiveDensity) / 120),
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
					orbitSpeed: 0.015 + Math.random() * 0.025,
					trail: [] as { x: number; y: number; alpha: number }[],
					hue: Math.random() * 60 - 30, // -30 to +30 hue variation
					pulsePhase: Math.random() * Math.PI * 2,
					mass: 0.5 + Math.random() * 1.5, // Mass for gravitational pull
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
		let globalTime = 0;

		const animate = (time: number) => {
			if (!active || reduced) {
				animationRef.current = requestAnimationFrame(animate);
				return;
			}
			const delta = lastTimeRef.current ? time - lastTimeRef.current : 16;
			const deltaFactor = delta / 16; // Normalize to 60fps
			lastTimeRef.current = time;
			globalTime += delta * 0.001; // Time in seconds
			ctx.clearRect(0, 0, width, height);

			// Smoothly fade effect strength based on mouse movement
			const targetStrength = isMouseMovingRef.current ? 1 : 0;
			const strengthLerpSpeed = isMouseMovingRef.current ? 0.12 : 0.03; // Smoother transitions
			effectStrengthRef.current +=
				(targetStrength - effectStrengthRef.current) * strengthLerpSpeed;

			// Ultra-smooth mouse interpolation with velocity tracking
			const mouseLerpFactor = 0.12;
			const rawMouseX = mouseRef.current.x;
			const rawMouseY = mouseRef.current.y;

			// Track mouse velocity for momentum with smoothing
			const newVelX = (rawMouseX - lastMouseX) * 0.4;
			const newVelY = (rawMouseY - lastMouseY) * 0.4;
			mouseVelocityRef.x = mouseVelocityRef.x * 0.7 + newVelX * 0.3;
			mouseVelocityRef.y = mouseVelocityRef.y * 0.7 + newVelY * 0.3;
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

			// ENHANCED EFFECT PARAMETERS
			const effectRadius = 350; // Area of effect
			const innerGlowRadius = 80; // Inner zone for intense glow
			const orbitRadius = 200; // Radius where orbital effect is strongest
			const gravitationalPull = 0.8; // Gentle attraction strength
			const swirlStrength = 2.5; // Swirl/vortex effect
			const repulsionCore = 50; // Very close stars get pushed out

			// Calculate mouse speed for dynamic effects
			const mouseSpeed = Math.sqrt(
				mouseVelocityRef.x * mouseVelocityRef.x +
					mouseVelocityRef.y * mouseVelocityRef.y,
			);

			// Collect nearby stars for constellation effect
			const nearbyStars: { star: Star; dist: number; x: number; y: number }[] =
				[];

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
				const angle = Math.atan2(dy, dx);

				// Reset targets
				s.targetVx = 0;
				s.targetVy = 0;

				// Only apply effect when mouse is moving (effectStrength > 0) and mouse is on screen
				const effectActive =
					effectStrengthRef.current > 0.01 && smoothMouseRef.x > 0;

				if (dist < effectRadius && effectActive) {
					const normalizedDist = dist / effectRadius;
					const effectStrength = effectStrengthRef.current;

					// 1. ORBITAL/SWIRL EFFECT - Stars orbit around cursor
					s.orbitAngle += s.orbitSpeed * deltaFactor * (1 + mouseSpeed * 0.02);
					const orbitInfluence = (1 - normalizedDist) ** 1.5 * effectStrength;
					const orbitOffsetX =
						Math.cos(s.orbitAngle + angle) *
						swirlStrength *
						orbitInfluence *
						s.z;
					const orbitOffsetY =
						Math.sin(s.orbitAngle + angle) *
						swirlStrength *
						orbitInfluence *
						s.z;
					s.targetVx += orbitOffsetX;
					s.targetVy += orbitOffsetY;

					// 2. MAGNETIC VORTEX - Perpendicular force creates swirling motion
					const perpX = -Math.sin(angle);
					const perpY = Math.cos(angle);
					const vortexStrength =
						(1 - normalizedDist) ** 2 * 3 * effectStrength * s.z;
					s.targetVx +=
						perpX * vortexStrength * (s.orbitAngle > Math.PI ? 1 : -1);
					s.targetVy +=
						perpY * vortexStrength * (s.orbitAngle > Math.PI ? 1 : -1);

					// 3. GENTLE GRAVITATIONAL ATTRACTION to orbit zone
					if (dist > orbitRadius * 0.5 && dist < effectRadius) {
						const attractionForce =
							gravitationalPull *
							(1 - normalizedDist) ** 1.2 *
							effectStrength *
							s.mass;
						s.targetVx += Math.cos(angle) * attractionForce;
						s.targetVy += Math.sin(angle) * attractionForce;
					}

					// 4. REPULSION from core - prevents clumping at center
					if (dist < repulsionCore) {
						const coreForce =
							((repulsionCore - dist) / repulsionCore) *
							8 *
							effectStrength *
							s.z;
						s.targetVx -= Math.cos(angle) * coreForce;
						s.targetVy -= Math.sin(angle) * coreForce;
					}

					// 5. MOMENTUM INFLUENCE - stars follow cursor movement direction
					const dragInfluence =
						(1 - normalizedDist) ** 1.5 * 1.2 * effectStrength;
					s.targetVx += mouseVelocityRef.x * dragInfluence;
					s.targetVy += mouseVelocityRef.y * dragInfluence;

					// Collect nearby stars for constellation connections
					if (dist < innerGlowRadius * 2.5 && s.z > 0.8) {
						nearbyStars.push({
							star: s,
							dist,
							x: starPosX + s.vx,
							y: starPosY + s.vy,
						});
					}
				}

				// Calculate proximity factor for visual enhancements
				const proximityFactor =
					dist < effectRadius && effectActive
						? (1 - dist / effectRadius) ** 1.8 * effectStrengthRef.current
						: 0;

				// Spring physics with variable stiffness
				const springStrength = 0.08 + proximityFactor * 0.06;
				const damping = 0.92 - proximityFactor * 0.04;

				// Apply spring force toward target
				const springForceX = (s.targetVx - s.vx) * springStrength;
				const springForceY = (s.targetVy - s.vy) * springStrength;

				s.vx = s.vx * damping + springForceX;
				s.vy = s.vy * damping + springForceY;

				// Final position
				s.x = starPosX + s.vx;
				s.y = starPosY + s.vy;

				// Update trail (for motion blur effect)
				if (proximityFactor > 0.2) {
					s.trail.unshift({ x: s.x, y: s.y, alpha: proximityFactor * 0.6 });
					if (s.trail.length > 5) s.trail.pop();
				} else {
					// Fade out trail when not near cursor
					s.trail = s.trail.filter((t) => {
						t.alpha *= 0.85;
						return t.alpha > 0.02;
					});
				}

				// Update pulse phase
				s.pulsePhase += 0.03 + proximityFactor * 0.05;

				// Enhanced twinkle with pulse
				const twinkle = Math.sin(s.p + globalTime * 2);
				const pulse = Math.sin(s.pulsePhase) * 0.5 + 0.5;
				s.p += 0.015 + proximityFactor * 0.03 + Math.random() * 0.008;

				let alpha = s.baseAlpha * (0.75 + twinkle * 0.25);
				alpha *= Math.min(1, s.z * 0.85);
				// Brightness boost with pulsing near cursor
				alpha = Math.min(1, alpha + proximityFactor * 0.4 * pulse);

				if (alpha < 0) alpha = 0;
				if (alpha > 1) alpha = 1;

				// Dynamic size based on proximity and velocity
				const velocityMagnitude = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
				const velocityScale = Math.min(1, velocityMagnitude / 10) * 0.3;
				const sizeMultiplier = 1 + proximityFactor * 0.8 + velocityScale;
				const currentRadius = s.r * sizeMultiplier;

				// Draw trail first (behind the star)
				if (s.trail.length > 1) {
					ctx.beginPath();
					ctx.moveTo(s.trail[0].x, s.trail[0].y);
					for (let i = 1; i < s.trail.length; i++) {
						ctx.lineTo(s.trail[i].x, s.trail[i].y);
					}
					ctx.strokeStyle = `rgba(${s.color}, ${alpha * 0.3})`;
					ctx.lineWidth = currentRadius * 0.6;
					ctx.lineCap = "round";
					ctx.stroke();
				}

				// Draw main star with enhanced visuals
				ctx.beginPath();

				// Velocity-based stretching effect
				if (velocityMagnitude > 3 && proximityFactor > 0.1) {
					const stretchFactor = Math.min(2.5, 1 + velocityMagnitude / 15);
					const velocityAngle = Math.atan2(s.vy, s.vx);
					ctx.save();
					ctx.translate(s.x, s.y);
					ctx.rotate(velocityAngle);
					ctx.scale(stretchFactor, 1);
					ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
					ctx.restore();
				} else {
					ctx.arc(s.x, s.y, currentRadius, 0, Math.PI * 2);
				}

				ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
				ctx.fill();

				// Multi-layer glow effect for stars near cursor
				const glowIntensity = proximityFactor * (1 + pulse * 0.5);
				if (glowIntensity > 0.15) {
					// Outer soft glow
					ctx.shadowBlur = currentRadius * 8 * glowIntensity;
					ctx.shadowColor = `rgba(${s.color}, ${alpha * 0.4})`;
					ctx.fill();

					// Middle glow with color shift
					ctx.shadowBlur = currentRadius * 4 * glowIntensity;
					const glowHue = theme === "dark" ? "200, 220, 255" : "100, 150, 220";
					ctx.shadowColor = `rgba(${glowHue}, ${alpha * 0.6})`;
					ctx.fill();

					// Inner bright core
					if (glowIntensity > 0.4) {
						ctx.shadowBlur = currentRadius * 2;
						ctx.shadowColor = `rgba(255, 255, 255, ${
							alpha * 0.8 * glowIntensity
						})`;
						ctx.fill();
					}
					ctx.shadowBlur = 0;
				} else if (s.z > 1.0 && alpha > 0.5) {
					// Normal glow for bright distant stars
					ctx.shadowBlur = currentRadius * 3;
					ctx.shadowColor = `rgba(${s.color}, ${alpha * 0.6})`;
					ctx.fill();
					ctx.shadowBlur = 0;
				}
			}

			// Draw constellation connections between nearby stars
			if (nearbyStars.length > 1 && effectStrengthRef.current > 0.3) {
				for (let i = 0; i < nearbyStars.length; i++) {
					for (let j = i + 1; j < nearbyStars.length; j++) {
						const a = nearbyStars[i];
						const b = nearbyStars[j];
						const connDist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
						const maxConnDist = 80;
						if (connDist < maxConnDist) {
							const connAlpha =
								(1 - connDist / maxConnDist) * 0.25 * effectStrengthRef.current;
							ctx.beginPath();
							ctx.moveTo(a.x, a.y);
							ctx.lineTo(b.x, b.y);
							ctx.strokeStyle =
								theme === "dark"
									? `rgba(180, 200, 255, ${connAlpha})`
									: `rgba(100, 130, 180, ${connAlpha})`;
							ctx.lineWidth = 0.5;
							ctx.stroke();
						}
					}
				}
			}

			// Draw cursor glow aura when active
			if (effectStrengthRef.current > 0.1 && smoothMouseRef.x > 0) {
				const auraAlpha = effectStrengthRef.current * 0.08;
				const gradient = ctx.createRadialGradient(
					smoothMouseRef.x,
					smoothMouseRef.y,
					0,
					smoothMouseRef.x,
					smoothMouseRef.y,
					innerGlowRadius,
				);
				gradient.addColorStop(
					0,
					theme === "dark"
						? `rgba(100, 150, 255, ${auraAlpha * 0.5})`
						: `rgba(150, 200, 255, ${auraAlpha * 0.3})`,
				);
				gradient.addColorStop(0.5, `rgba(150, 180, 255, ${auraAlpha * 0.2})`);
				gradient.addColorStop(1, "rgba(150, 180, 255, 0)");
				ctx.beginPath();
				ctx.arc(
					smoothMouseRef.x,
					smoothMouseRef.y,
					innerGlowRadius,
					0,
					Math.PI * 2,
				);
				ctx.fillStyle = gradient;
				ctx.fill();
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
