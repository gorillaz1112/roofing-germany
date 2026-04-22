'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Lifts on hover with a subtle red shadow. Pure presentational, no content logic.
export function HoverCard({
  children,
  className,
  lift = 6,
}: {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduce ? undefined : { y: -lift }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
