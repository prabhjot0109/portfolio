import React from "react";
import { Moon, Sun, Search, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface NavigationProps {
  onOpenCommandPalette?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled
            ? "border-b border-border/10 shadow-sm"
            : "border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          backgroundColor: scrolled
            ? "hsl(var(--background) / 0.6)"
            : "transparent",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 min-h-[3.5rem] sm:min-h-[4rem] max-w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <a
              href="#home"
              className="text-xl sm:text-2xl font-space font-bold text-foreground outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 border-none rounded-lg px-2 py-1 shrink-0"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              aria-label="Portfolio home - Prabhjot Singh Assi"
            >
              Portfolio
            </a>

            {/* Search / Command Palette Trigger - Apple Liquid Glass Design */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5
                       liquid-glass-search
                       flex-1 max-w-md mx-auto
                       focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-0"
              aria-label="Search and Command Palette"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
              <span className="flex-1 text-left text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200 truncate font-medium">
                Navigate and search...
              </span>
              <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-muted-foreground liquid-glass-kbd">
                ⌘ + K / Ctrl + K
              </kbd>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent shrink-0 w-9 h-9 sm:w-10 sm:h-10"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
