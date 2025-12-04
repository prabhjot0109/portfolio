import type React from "react";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Search,
	Home,
	User,
	Code,
	Trophy,
	Briefcase,
	Mail,
	Moon,
	Sun,
	Download,
	Github,
	Linkedin,
	X,
	Command,
} from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useDeferredSearch } from "@/hooks/useDeferredSearch";
import { useTheme } from "@/components/ThemeProvider";

interface CommandItem {
	id: string;
	label: string;
	description?: string;
	icon: React.ElementType;
	action: () => void;
	keywords?: string[];
	category: "navigation" | "actions" | "social";
}

interface CommandPaletteProps {
	isOpen: boolean;
	onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
	const { actualTheme, toggleTheme } = useTheme();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const focusTrapRef = useFocusTrap(isOpen);

	const commands: CommandItem[] = [
		// Navigation
		{
			id: "home",
			label: "Go to Home",
			icon: Home,
			category: "navigation",
			action: () =>
				document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["top", "start", "hero"],
		},
		{
			id: "about",
			label: "Go to About",
			icon: User,
			category: "navigation",
			action: () =>
				document
					.getElementById("about")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["bio", "me", "introduction"],
		},
		{
			id: "skills",
			label: "Go to Skills",
			icon: Code,
			category: "navigation",
			action: () =>
				document
					.getElementById("skills")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["tech", "stack", "technologies"],
		},
		{
			id: "achievements",
			label: "Go to Achievements",
			icon: Trophy,
			category: "navigation",
			action: () =>
				document
					.getElementById("achievements")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["awards", "wins", "hackathon"],
		},
		{
			id: "projects",
			label: "Go to Projects",
			icon: Briefcase,
			category: "navigation",
			action: () =>
				document
					.getElementById("projects")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["work", "portfolio", "apps"],
		},
		{
			id: "experience",
			label: "Go to Experience",
			icon: Briefcase,
			category: "navigation",
			action: () =>
				document
					.getElementById("experience")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["jobs", "work", "career"],
		},
		{
			id: "contact",
			label: "Go to Contact",
			icon: Mail,
			category: "navigation",
			action: () =>
				document
					.getElementById("contact")
					?.scrollIntoView({ behavior: "smooth" }),
			keywords: ["email", "reach", "message"],
		},

		// Actions
		{
			id: "theme",
			label: `Switch to ${actualTheme === "dark" ? "Light" : "Dark"} Mode`,
			icon: actualTheme === "dark" ? Sun : Moon,
			category: "actions",
			action: toggleTheme,
			keywords: ["dark", "light", "mode", "theme"],
		},
		{
			id: "resume",
			label: "Download Resume",
			icon: Download,
			category: "actions",
			action: () => window.open("/resume.pdf", "_blank"),
			keywords: ["cv", "pdf", "download"],
		},

		// Social
		{
			id: "github",
			label: "Open GitHub",
			icon: Github,
			category: "social",
			action: () => window.open("https://github.com/prabhjot0109", "_blank"),
			keywords: ["code", "repo", "source"],
		},
		{
			id: "linkedin",
			label: "Open LinkedIn",
			icon: Linkedin,
			category: "social",
			action: () =>
				window.open("https://linkedin.com/in/prabhjotsinghassi", "_blank"),
			keywords: ["connect", "network", "professional"],
		},
	];

	const { query, setQuery, filteredItems, isPending } = useDeferredSearch({
		items: commands,
		searchFn: (item, q) => {
			const searchTerm = q.toLowerCase();
			return (
				item.label.toLowerCase().includes(searchTerm) ||
				item.description?.toLowerCase().includes(searchTerm) ||
				item.keywords?.some((k) => k.toLowerCase().includes(searchTerm)) ||
				false
			);
		},
	});

	const groupedItems = filteredItems.reduce(
		(acc, item) => {
			if (!acc[item.category]) acc[item.category] = [];
			acc[item.category].push(item);
			return acc;
		},
		{} as Record<string, CommandItem[]>,
	);

	const flatItems = Object.values(groupedItems).flat();

	useEffect(() => {
		setSelectedIndex(0);
	}, [query]);

	useEffect(() => {
		if (!isOpen) {
			setQuery("");
			setSelectedIndex(0);
		}
	}, [isOpen, setQuery]);

	const executeCommand = useCallback(
		(item: CommandItem) => {
			item.action();
			onClose();
		},
		[onClose],
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault();
					setSelectedIndex((i) => (i + 1) % flatItems.length);
					break;
				case "ArrowUp":
					e.preventDefault();
					setSelectedIndex(
						(i) => (i - 1 + flatItems.length) % flatItems.length,
					);
					break;
				case "Enter":
					e.preventDefault();
					if (flatItems[selectedIndex]) {
						executeCommand(flatItems[selectedIndex]);
					}
					break;
				case "Escape":
					e.preventDefault();
					onClose();
					break;
			}
		},
		[flatItems, selectedIndex, executeCommand, onClose],
	);

	const categoryLabels: Record<string, string> = {
		navigation: "Navigation",
		actions: "Actions",
		social: "Social",
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
						className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xl z-50"
						onClick={onClose}
						aria-hidden="true"
					/>
					<motion.div
						ref={focusTrapRef}
						initial={{ opacity: 0, scale: 0.96, y: "-48%", x: "-50%" }}
						animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
						exit={{ opacity: 0, scale: 0.96, y: "-48%", x: "-50%" }}
						transition={{
							duration: 0.35,
							ease: [0.32, 0.72, 0, 1],
							opacity: { duration: 0.2 },
						}}
						className="fixed top-1/2 left-1/2 w-full max-w-lg z-50 px-4"
						role="dialog"
						aria-modal="true"
						aria-label="Command palette"
					>
						<div className="liquid-glass-modal">
							{/* Search Input - Liquid Glass Style */}
							<div className="flex items-center gap-3 px-5 py-4 border-b liquid-glass-divider">
								<Search className="w-5 h-5 text-muted-foreground/80" />
								<input
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									onKeyDown={handleKeyDown}
									placeholder="Navigate and search..."
									className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/70 outline-none text-[15px] font-medium"
									autoFocus
									aria-label="Search commands"
								/>
								<kbd className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-muted-foreground/70 liquid-glass-kbd">
									⌘ + K / Ctrl + K
								</kbd>
								<button
									type="button"
									onClick={onClose}
									className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-all duration-200"
									aria-label="Close command palette"
								>
									<X className="w-4 h-4 text-muted-foreground/70 hover:text-foreground transition-colors" />
								</button>
							</div>

							{/* Results - Liquid Glass Style */}
							<div
								className="max-h-80 overflow-y-auto py-2 px-2"
								role="listbox"
							>
								{isPending && (
									<div className="px-4 py-3 text-sm text-muted-foreground/70 font-medium">
										Searching...
									</div>
								)}
								{!isPending && flatItems.length === 0 && (
									<div className="px-4 py-10 text-center text-muted-foreground/70">
										<p className="text-sm font-medium">
											No results found for "{query}"
										</p>
									</div>
								)}
								{Object.entries(groupedItems).map(([category, items]) => (
									<div key={category} className="mb-1">
										<div className="px-3 py-2 text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest">
											{categoryLabels[category]}
										</div>
										{items.map((item) => {
											const globalIndex = flatItems.indexOf(item);
											const isSelected = globalIndex === selectedIndex;
											return (
												<button
													type="button"
													key={item.id}
													onClick={() => executeCommand(item)}
													onMouseEnter={() => setSelectedIndex(globalIndex)}
													className={`liquid-glass-item w-full flex items-center gap-3 px-3 py-2.5 mx-1 text-left transition-all duration-150 ${
														isSelected ? "active" : ""
													}`}
													role="option"
													aria-selected={isSelected}
												>
													<div
														className={`p-1.5 rounded-lg transition-colors duration-150 ${
															isSelected ? "bg-foreground/10" : "bg-transparent"
														}`}
													>
														<item.icon
															className={`w-4 h-4 transition-colors duration-150 ${
																isSelected
																	? "text-foreground"
																	: "text-muted-foreground/70"
															}`}
														/>
													</div>
													<span
														className={`flex-1 text-sm font-medium transition-colors duration-150 ${
															isSelected
																? "text-foreground"
																: "text-foreground/80"
														}`}
													>
														{item.label}
													</span>
													{isSelected && (
														<kbd className="text-xs text-muted-foreground/60 font-semibold liquid-glass-kbd px-2 py-0.5">
															↵
														</kbd>
													)}
												</button>
											);
										})}
									</div>
								))}
							</div>

							{/* Footer - Liquid Glass Style */}
							<div className="flex items-center justify-between px-5 py-3 border-t liquid-glass-divider">
								<div className="flex items-center gap-5">
									<span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-medium">
										<kbd className="px-1.5 py-0.5 liquid-glass-kbd text-[10px] font-semibold">
											↑↓
										</kbd>
										Navigate
									</span>
									<span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-medium">
										<kbd className="px-1.5 py-0.5 liquid-glass-kbd text-[10px] font-semibold">
											↵
										</kbd>
										Select
									</span>
									<span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-medium">
										<kbd className="px-1.5 py-0.5 liquid-glass-kbd text-[10px] font-semibold">
											Esc
										</kbd>
										Close
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default CommandPalette;
