// Performance optimization utilities

// Debounce function for resize events
export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
	func: T,
	limit: number,
): ((...args: Parameters<T>) => void) => {
	let inThrottle: boolean;
	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};

// Request animation frame wrapper for better performance
export const raf = (callback: () => void) => {
	if (typeof window !== "undefined") {
		return requestAnimationFrame(callback);
	}
	return setTimeout(callback, 16); // Fallback for SSR
};

// Cancel animation frame wrapper
export const cancelRaf = (id: number) => {
	if (typeof window !== "undefined") {
		cancelAnimationFrame(id);
	} else {
		clearTimeout(id);
	}
};

// Intersection Observer helper for lazy loading
export const createIntersectionObserver = (
	callback: IntersectionObserverCallback,
	options: IntersectionObserverInit = {},
) => {
	if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
		return null;
	}

	return new IntersectionObserver(callback, {
		threshold: 0.1,
		rootMargin: "50px",
		...options,
	});
};

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve();
		img.onerror = reject;
		img.src = src;
	});
};

// Memory-efficient array chunking for large datasets
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
	const chunks: T[][] = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get device pixel ratio with fallback
export const getDevicePixelRatio = (): number => {
	if (typeof window === "undefined") return 1;
	return Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
};
