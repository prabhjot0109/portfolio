// Utility for better lazy loading with preloading hints
export const preloadComponent = (importFn: () => Promise<any>) => {
	const component = importFn();
	return component;
};

// Preload critical components
export const preloadCriticalComponents = () => {
	if (typeof window !== "undefined") {
		// Preload About component as it's first below the fold
		import("@/components/About");
	}
};
