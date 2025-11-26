import React from 'react';

const skipLinks = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#about', label: 'Skip to about' },
  { href: '#projects', label: 'Skip to projects' },
  { href: '#contact', label: 'Skip to contact' },
];

const SkipNavigation = () => {
  return (
    <nav aria-label="Skip navigation" className="sr-only focus-within:not-sr-only">
      <ul className="fixed top-0 left-0 z-[100] flex flex-col gap-1 p-2">
        {skipLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
                         bg-background text-foreground px-4 py-2 rounded-md
                         border-2 border-portfolio-accent font-medium transition-all duration-200
                         hover:bg-accent hover:text-accent-foreground
                         focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2
                         shadow-lg"
              onClick={(e) => {
                const target = document.querySelector(link.href);
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth' });
                  (target as HTMLElement).focus?.();
                }
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SkipNavigation;
