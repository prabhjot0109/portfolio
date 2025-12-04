import { useCallback } from "react";

type ViewTransitionCallback = () => void | Promise<void>;

declare global {
	interface Document {
		startViewTransition?: (callback: ViewTransitionCallback) => {
			finished: Promise<void>;
			ready: Promise<void>;
			updateCallbackDone: Promise<void>;
		};
	}
}

export const useViewTransition = () => {
	const startTransition = useCallback((callback: ViewTransitionCallback) => {
		if (document.startViewTransition) {
			return document.startViewTransition(callback);
		}
		// Fallback for browsers without View Transitions API
		callback();
		return {
			finished: Promise.resolve(),
			ready: Promise.resolve(),
			updateCallbackDone: Promise.resolve(),
		};
	}, []);

	const isSupported =
		typeof document !== "undefined" && "startViewTransition" in document;

	return { startTransition, isSupported };
};

export default useViewTransition;
