import { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from '@/utils/performance';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  isInViewport: boolean;
}

interface UseMousePositionOptions {
  throttleMs?: number;
  elementRef?: React.RefObject<HTMLElement>;
}

export const useMousePosition = (options: UseMousePositionOptions = {}) => {
  const { throttleMs = 16, elementRef } = options;
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isInViewport: false,
  });

  const rafRef = useRef<number>();

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const element = elementRef?.current;
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const normalizedX = (x / rect.width) * 2 - 1;
        const normalizedY = (y / rect.height) * 2 - 1;
        const isInViewport = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        setPosition({ x, y, normalizedX, normalizedY, isInViewport });
      } else {
        const normalizedX = (clientX / window.innerWidth) * 2 - 1;
        const normalizedY = (clientY / window.innerHeight) * 2 - 1;

        setPosition({
          x: clientX,
          y: clientY,
          normalizedX,
          normalizedY,
          isInViewport: true,
        });
      }
    });
  }, [elementRef]);

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    }, throttleMs);

    const handleMouseLeave = () => {
      setPosition(prev => ({ ...prev, isInViewport: false }));
    };

    const target = elementRef?.current || window;
    
    target.addEventListener('mousemove', handleMouseMove as EventListener);
    if (elementRef?.current) {
      elementRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
      if (elementRef?.current) {
        elementRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [throttleMs, elementRef, updatePosition]);

  return position;
};

export default useMousePosition;
