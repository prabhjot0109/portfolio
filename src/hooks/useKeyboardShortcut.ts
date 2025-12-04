import { useEffect, useCallback } from "react";

type KeyCombo = {
	key: string;
	ctrl?: boolean;
	meta?: boolean;
	shift?: boolean;
	alt?: boolean;
};

type ShortcutHandler = (e: KeyboardEvent) => void;

export const useKeyboardShortcut = (
	keyCombo: KeyCombo | KeyCombo[],
	handler: ShortcutHandler,
	options: { enabled?: boolean; preventDefault?: boolean } = {},
) => {
	const { enabled = true, preventDefault = true } = options;

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!enabled) return;

			const combos = Array.isArray(keyCombo) ? keyCombo : [keyCombo];

			for (const combo of combos) {
				const keyMatch = e.key.toLowerCase() === combo.key.toLowerCase();
				const ctrlMatch = combo.ctrl ? e.ctrlKey : !e.ctrlKey;
				const metaMatch = combo.meta ? e.metaKey : !e.metaKey;
				const shiftMatch = combo.shift ? e.shiftKey : !e.shiftKey;
				const altMatch = combo.alt ? e.altKey : !e.altKey;

				// For cmd/ctrl shortcuts, allow either
				const modifierMatch =
					combo.meta || combo.ctrl
						? e.metaKey || e.ctrlKey
						: ctrlMatch && metaMatch;

				if (keyMatch && modifierMatch && shiftMatch && altMatch) {
					if (preventDefault) {
						e.preventDefault();
					}
					handler(e);
					return;
				}
			}
		},
		[keyCombo, handler, enabled, preventDefault],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);
};

export default useKeyboardShortcut;
