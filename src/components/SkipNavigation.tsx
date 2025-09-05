import React from 'react';

const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-background text-foreground px-4 py-2 rounded-md z-[100] 
                 border-2 border-accent font-medium transition-all duration-200
                 hover:bg-accent hover:text-accent-foreground"
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;