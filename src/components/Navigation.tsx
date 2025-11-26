import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

interface NavigationProps {
  onOpenCommandPalette?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (href: string, label: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      setIsOpen(false);
      // Announce navigation for screen readers
      const announcement = `Navigating to ${label} section`;
      const ariaLive = document.createElement("div");
      ariaLive.setAttribute("aria-live", "polite");
      ariaLive.setAttribute("aria-atomic", "true");
      ariaLive.className = "sr-only";
      ariaLive.textContent = announcement;
      document.body.appendChild(ariaLive);
      setTimeout(() => document.body.removeChild(ariaLive), 1000);
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled || isOpen
            ? "backdrop-blur-2xl border-b border-border/20 shadow-2xl"
            : "border-b border-border/10"
        }`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          backdropFilter:
            scrolled || isOpen ? "blur(60px) saturate(200%)" : "none",
          WebkitBackdropFilter:
            scrolled || isOpen ? "blur(60px) saturate(200%)" : "none",
          backgroundColor: isOpen
            ? "hsl(var(--background) / 0.95)"
            : scrolled
            ? "hsl(var(--background) / 0.8)"
            : "transparent",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-5 min-h-[4rem] max-w-full">
          <div className="flex items-center justify-between w-full">
            <a
              href="#home"
              className="text-2xl font-space font-bold text-foreground outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 border-none rounded-lg px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home", "Home");
              }}
              aria-label="Portfolio home - Prabhjot Singh Assi"
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <ul
              className="hidden md:flex items-center space-x-8"
              role="menubar"
            >
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <a
                    href={item.href}
                    className={`text-foreground hover:text-portfolio-accent transition-all duration-500 ease-out relative group 
                            outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 border-none px-3 py-2 rounded-lg font-nunito
                            ${
                              activeSection === item.href.substring(1)
                                ? "text-portfolio-accent font-medium"
                                : ""
                            }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.label);
                    }}
                    role="menuitem"
                    aria-current={
                      activeSection === item.href.substring(1)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-3 h-0.5 bg-portfolio-accent transition-all duration-500 ease-out
                            ${
                              activeSection === item.href.substring(1)
                                ? "w-[calc(100%-1.5rem)] opacity-100"
                                : "w-0 opacity-0 group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-100"
                            }`}
                    />
                  </a>
                </li>
              ))}

              {/* Command Palette Button - Removed as requested */}

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                aria-pressed={theme === "dark"}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </ul>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                aria-pressed={theme === "dark"}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-accent"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out w-full ${
              isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
            }`}
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
            aria-hidden={!isOpen}
          >
            <div
              className="border-t border-border/50 pt-4 pb-4 mt-2 w-full bg-background/60 backdrop-blur-xl rounded-b-2xl shadow-lg"
              style={{
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
              }}
            >
              <ul className="flex flex-col space-y-2 w-full" role="none">
                {navItems.map((item, index) => (
                  <li key={item.href} role="none">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.label);
                      }}
                      className={`text-foreground hover:text-portfolio-accent transition-all duration-500 ease-out py-3 px-4 block rounded-lg font-nunito
                              outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0
                              hover:bg-accent/20 hover:shadow-md transform hover:translate-x-2
                              ${
                                activeSection === item.href.substring(1)
                                  ? "text-portfolio-accent font-semibold bg-accent/20 shadow-sm border-l-2 border-portfolio-accent"
                                  : ""
                              }
                              ${prefersReducedMotion ? "" : "animate-fade-in"}
                              `}
                      style={{
                        animationDelay: prefersReducedMotion
                          ? "0ms"
                          : `${index * 100}ms`,
                        animationFillMode: "backwards",
                      }}
                      role="menuitem"
                      aria-current={
                        activeSection === item.href.substring(1)
                          ? "page"
                          : undefined
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
