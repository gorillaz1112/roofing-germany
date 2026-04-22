'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

// Scroll-triggered fade-up reveal. Honors prefers-reduced-motion.
export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = 'div',
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'li' | 'span' | 'article';
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  const variants: Variants = shouldReduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
