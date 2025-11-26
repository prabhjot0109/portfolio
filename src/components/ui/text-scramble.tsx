import { useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";

interface TextScrambleProps extends MotionProps {
  children: string;
  duration?: number;
  speed?: number;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
}

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  className,
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    setIsAnimating(true);

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        children
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return children[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= children.length) {
        clearInterval(interval);
        setIsAnimating(false);
        if (onScrambleComplete) onScrambleComplete();
      }

      iteration += 1 / 3; // Slower reveal
    }, 30);

    return () => clearInterval(interval);
  }, [trigger, children]);

  return (
    <motion.span className={className} {...props}>
      {displayText}
    </motion.span>
  );
}
