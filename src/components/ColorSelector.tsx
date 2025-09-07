import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColorSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('none');

  const colors = [
    { name: 'none', primary: '', accent: '', glow: '', display: 'Default' },
    { name: 'pink', primary: '330 81% 60%', accent: '330 81% 60%', glow: '330 81% 80%', display: 'Pink' },
    { name: 'orange', primary: '25 95% 53%', accent: '25 95% 53%', glow: '25 95% 73%', display: 'Orange' },
    { name: 'green', primary: '142 71% 45%', accent: '142 71% 45%', glow: '142 71% 65%', display: 'Green' },
    { name: 'yellow', primary: '45 93% 58%', accent: '45 93% 58%', glow: '45 93% 78%', display: 'Yellow' },
  ];

  const handleColorChange = (color: typeof colors[0]) => {
    const root = document.documentElement;
    
    // Remove existing portfolio style if any
    const existingStyle = document.getElementById('portfolio-colors');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    if (color.name === 'none') {
      // Reset to default theme colors
      setSelectedColor(color.name);
      setIsOpen(false);
      return;
    }
    
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
            backgroundColor: selectedColor === 'none' 
              ? 'hsl(var(--foreground))' 
              : `hsl(${colors.find(c => c.name === selectedColor)?.primary || 'var(--foreground)'})`
          }}
        />
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 p-3 rounded-xl border border-border/30 shadow-2xl z-50
                     bg-background/95 backdrop-blur-xl transition-all duration-200 animate-fade-in"
          style={{ minWidth: '48px' }}
        >
          <div className="grid grid-cols-1 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-lg border-2 transition-all duration-200 hover:scale-105 hover:shadow-md
                           ${selectedColor === color.name ? 'border-foreground shadow-lg scale-105 ring-2 ring-accent/50' : 'border-border/40'}
                           focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
                style={{ 
                  backgroundColor: color.name === 'none' 
                    ? 'hsl(var(--foreground))' 
                    : `hsl(${color.primary})`,
                }}
                aria-label={`Select ${color.display} color theme`}
                title={`${color.display} theme`}
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