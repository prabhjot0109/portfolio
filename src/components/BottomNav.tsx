import React from "react";
import {
  Home,
  User,
  Code,
  Trophy,
  Briefcase,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  Command,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BottomNavProps {
  onOpenCommandPalette?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "skills", label: "Skills", icon: Code, href: "#skills" },
  {
    id: "achievements",
    label: "Achievements",
    icon: Trophy,
    href: "#achievements",
  },
  { id: "projects", label: "Projects", icon: FolderKanban, href: "#projects" },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    href: "#experience",
  },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

const BottomNav: React.FC<BottomNavProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = React.useState("home");

  // Track active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check if we are at the bottom of the page
      if (scrollPosition + windowHeight >= docHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // Check each section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the top of the section is above the threshold (e.g., 40% of viewport)
          if (rect.top <= windowHeight * 0.4) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
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
    <div className="fixed bottom-6 sm:bottom-3 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="pointer-events-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="liquid-glass-nav flex items-center justify-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-2 sm:py-2">
          {/* Navigation Items */}
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={`nav-item group relative flex flex-row items-center justify-center gap-1 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-xl transition-all duration-200
							${isActive ? "nav-item-active" : ""}
						`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={`w-5 h-5 sm:w-5 sm:h-5 transition-all duration-200
									${isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                    }
								`}
                  aria-hidden="true"
                />
                {/* Label - Hidden on mobile, shown on right side on desktop */}
                <span
                  className={`hidden sm:inline text-xs font-medium transition-colors duration-200
									${isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                    }
								`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            className="nav-item group flex flex-row items-center justify-center gap-1 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? (
              <Sun
                className="w-5 h-5 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                aria-hidden="true"
              />
            ) : (
              <Moon
                className="w-5 h-5 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                aria-hidden="true"
              />
            )}
            <span className="hidden sm:inline text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Theme
            </span>
          </motion.button>

          {/* Command Palette Toggle */}
          <motion.button
            type="button"
            onClick={onOpenCommandPalette}
            className="nav-item group flex flex-row items-center justify-center gap-1 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Open command palette (Ctrl+K or Cmd+K)"
          >
            <Command
              className="w-5 h-5 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200"
              aria-hidden="true"
            />
            <span className="hidden sm:inline text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Menu
            </span>
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

export default BottomNav;
