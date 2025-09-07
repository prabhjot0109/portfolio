import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColorSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { name: 'white', primary: '0 0% 0%', accent: '0 0% 0%', glow: '0 0% 20%' },
    { name: 'pink', primary: '330 81% 60%', accent: '330 81% 60%', glow: '330 81% 80%' },
    { name: 'yellow', primary: '45 93% 58%', accent: '45 93% 58%', glow: '45 93% 78%' },
    { name: 'green', primary: '142 71% 45%', accent: '142 71% 45%', glow: '142 71% 65%' },
    { name: 'blue', primary: '217 91% 60%', accent: '217 91% 60%', glow: '217 91% 80%' },
    { name: 'purple', primary: '262 83% 58%', accent: '262 83% 58%', glow: '262 83% 78%' },
  ];

  const handleColorChange = (color: typeof colors[0]) => {
    const root = document.documentElement;
    
    // Update only specific portfolio accent colors
    root.style.setProperty('--portfolio-accent', color.accent);
    root.style.setProperty('--portfolio-glow', color.glow);
    
    // Update link colors and interactive elements
    const style = document.createElement('style');
    style.textContent = `
      .portfolio-link { color: hsl(${color.accent}) !important; }
      .portfolio-icon { color: hsl(${color.accent}) !important; }
      .portfolio-border { border-color: hsl(${color.accent}) !important; }
      .portfolio-bg { background-color: hsl(${color.accent}) !important; }
    `;
    
    // Remove existing portfolio style if any
    const existingStyle = document.getElementById('portfolio-colors');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    style.id = 'portfolio-colors';
    document.head.appendChild(style);
    
    setSelectedColor(color.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent relative h-8 w-8 p-1"
        aria-label="Select portfolio color theme"
        aria-expanded={isOpen}
      >
        <div 
          className="w-4 h-4 rounded-full border-2 border-border/50"
          style={{ 
            backgroundColor: selectedColor === 'white' 
              ? 'hsl(0 0% 100%)' 
              : `hsl(${colors.find(c => c.name === selectedColor)?.primary || '0 0% 100%'})`
          }}
        />
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 p-2 rounded-lg border border-border/50 shadow-lg z-50
                     bg-background/90 backdrop-blur-lg transition-all duration-200 animate-fade-in"
          style={{ minWidth: '120px' }}
        >
          <div className="grid grid-cols-3 gap-1.5">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 hover:shadow-lg
                           ${selectedColor === color.name ? 'border-foreground shadow-md scale-110' : 'border-border/30'}
                           focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
                style={{ 
                  backgroundColor: color.name === 'white' 
                    ? 'hsl(0 0% 100%)' 
                    : `hsl(${color.primary})`,
                  ...(color.name === 'white' && {
                    border: '2px solid hsl(0 0% 80%)'
                  })
                }}
                aria-label={`Select ${color.name} color theme`}
                title={`${color.name} theme`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ColorSelector;