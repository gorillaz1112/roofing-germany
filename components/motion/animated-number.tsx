'use client';

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

// Counts up to `value` when the component scrolls into view.
// `suffix`/`prefix` are rendered verbatim (e.g. "+", "%").
export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 1.6,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduce = useReducedMotion();
  const motionValue = useMotionValue(shouldReduce ? value : 0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString('de-DE'),
  );

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
