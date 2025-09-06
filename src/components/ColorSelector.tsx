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
    
    // Update CSS custom properties
    root.style.setProperty('--portfolio-dark', color.primary);
    root.style.setProperty('--portfolio-accent', color.accent);
    root.style.setProperty('--portfolio-glow', color.glow);
    
    // For light mode, update accent as well
    if (!document.documentElement.classList.contains('dark')) {
      root.style.setProperty('--accent', color.accent);
      root.style.setProperty('--primary', color.primary);
    }
    
    setSelectedColor(color.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent relative"
        aria-label="Select portfolio color theme"
        aria-expanded={isOpen}
      >
        <Palette className="h-5 w-5" aria-hidden="true" />
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 p-3 rounded-xl border border-border/50 shadow-lg z-50
                     bg-background/80 backdrop-blur-lg transition-all duration-200 animate-fade-in"
          style={{ minWidth: '140px' }}
        >
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 hover:shadow-lg
                           ${selectedColor === color.name ? 'border-foreground shadow-md' : 'border-border/30'}
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