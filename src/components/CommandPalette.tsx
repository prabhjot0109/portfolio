import React, { useState, useCallback, useEffect } from "react";
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

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

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
    [onClose]
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
            (i) => (i - 1 + flatItems.length) % flatItems.length
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
    [flatItems, selectedIndex, executeCommand, onClose]
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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={focusTrapRef}
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-55%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-55%" }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/2 left-1/2 w-full max-w-lg z-50 px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="bg-background/20 backdrop-blur-3xl border border-white/10 dark:border-white/5 rounded-xl shadow-[0_8px_32px_0_rgba(30,38,135,0.07)] overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 dark:border-white/5">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Navigate and search..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
                  autoFocus
                  aria-label="Search commands"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-white/10 dark:bg-white/5 rounded border border-white/10 dark:border-white/5">
                   ⌘ + K / Ctrl + K
                </kbd>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/10 dark:hover:bg-white/5 rounded transition-colors"
                  aria-label="Close command palette"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto py-2" role="listbox">
                {isPending && (
                  <div className="px-4 py-2 text-sm text-muted-foreground">
                    Searching...
                  </div>
                )}
                {!isPending && flatItems.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    No results found for "{query}"
                  </div>
                )}
                {Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category}>
                    <div className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {categoryLabels[category]}
                    </div>
                    {items.map((item) => {
                      const globalIndex = flatItems.indexOf(item);
                      const isSelected = globalIndex === selectedIndex;
                      return (
                        <button
                          key={item.id}
                          onClick={() => executeCommand(item)}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                            isSelected
                              ? "bg-black/10 dark:bg-white/10 text-foreground"
                              : "hover:bg-black/10 dark:hover:bg-black/5"
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="flex-1 text-sm">{item.label}</span>
                          {isSelected && (
                            <kbd className="text-xs text-muted-foreground">
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 dark:border-white/5 text-xs text-muted-foreground bg-white/5 dark:bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/10 dark:bg-white/5 rounded border border-white/10 dark:border-white/5">
                      ↑↓
                    </kbd>{" "}
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/10 dark:bg-white/5 rounded border border-white/10 dark:border-white/5">
                      ↵
                    </kbd>{" "}
                    Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/10 dark:bg-white/5 rounded border border-white/10 dark:border-white/5">
                      Esc
                    </kbd>{" "}
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
