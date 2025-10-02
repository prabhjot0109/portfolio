import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
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

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "md:backdrop-blur-2xl border-b border-border/20 shadow-2xl"
          : "border-b border-border/10"
      }`}
      role="navigation"
      aria-label="Main navigation"
      style={
        scrolled
          ? {
              backdropFilter: "blur(32px) saturate(200%)",
              WebkitBackdropFilter: "blur(32px) saturate(200%)",
            }
          : {}
      }
    >
      <div className="container mx-auto px-6 py-5 min-h-[4rem]">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-space font-bold text-foreground focus:outline-none focus:ring-0 focus:ring-offset-0 rounded-lg px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home", "Home");
            }}
            aria-label="Portfolio home - Prabhjot Singh Assi"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className={`text-foreground hover:text-portfolio-accent transition-all duration-500 ease-out relative group 
                            focus:outline-none focus:ring-0 focus:ring-offset-0 px-3 py-2 rounded-lg font-nunito
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
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation menu"
          aria-hidden={!isOpen}
        >
          <div className="border-t border-border/30 pt-4 pb-4 backdrop-blur-xl bg-background/95 rounded-b-xl mt-2 shadow-lg">
            <ul className="flex flex-col space-y-2" role="none">
              {navItems.map((item, index) => (
                <li key={item.href} role="none">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.label);
                    }}
                    className={`text-foreground hover:text-portfolio-accent transition-all duration-500 ease-out py-3 px-4 block rounded-lg font-nunito
                              focus:outline-none focus:ring-0 focus:ring-offset-0
                              hover:bg-accent/10 transform hover:translate-x-2
                              ${
                                activeSection === item.href.substring(1)
                                  ? "text-portfolio-accent font-medium bg-accent/10"
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
  );
};

export default Navigation;
