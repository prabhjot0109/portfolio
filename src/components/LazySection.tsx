import React, { Suspense, ReactNode } from "react";
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/utils/performance";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}

const LoadingSkeleton = () => (
  <div className="w-full py-20">
    <div className="container mx-auto px-6">
      <div className="animate-pulse space-y-8">
        <div className="text-center mb-16">
          <div className="h-8 bg-muted rounded-lg w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="portfolio-card p-6">
              <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <LoadingSkeleton />,
  className,
}) => {
  const reducedMotion = prefersReducedMotion();

  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </Suspense>
    </div>
  );
};

export default LazySection;
