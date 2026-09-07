"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

/**
 * Subtle fade-up on scroll. Uses LazyMotion to ship only the DOM animation
 * features (keeps the bundle small for Lighthouse). Respects reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Tag = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <Tag
        className={className}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </Tag>
    </LazyMotion>
  );
}
