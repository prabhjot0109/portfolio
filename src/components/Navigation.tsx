import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import SkipNavigation from './SkipNavigation';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <SkipNavigation />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              className="text-2xl font-bold text-portfolio-dark focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded"
              aria-label="Go to homepage"
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-portfolio-accent transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-accent focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border" id="mobile-menu">
              <div className="flex flex-col space-y-4 pt-4" role="menu">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-portfolio-accent transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded"
                    role="menuitem"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;