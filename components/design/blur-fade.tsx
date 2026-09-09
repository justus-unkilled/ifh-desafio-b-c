'use client';
// Adapted from Magic UI / Dillion Verma (MIT). See licenses/Magic-UI.md.
// https://21st.dev/@dillionverma/components/blur-fade
import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export function BlurFade({
  children,
  className = '',
  delay = 0,
  inView = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-35px' });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={`blur-fade ${className}`}
      initial={
        reduce || !inView ? false : { y: 14, opacity: 0, filter: 'blur(5px)' }
      }
      animate={
        !inView || isInView || reduce
          ? { y: 0, opacity: 1, filter: 'blur(0px)' }
          : undefined
      }
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
