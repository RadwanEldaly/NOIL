"use client";

import React, { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as: Component = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

type RevealStaggerProps = {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function RevealStagger({
  children,
  stagger = 0.1,
  delay = 0,
  className = "",
  as: Component = "div",
}: RevealStaggerProps) {
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  y?: number;
  className?: string;
  as?: ElementType;
};

export function RevealItem({
  children,
  y = 28,
  className = "",
  as: Component = "div",
}: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion(Component as any);

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionComponent variants={variants} className={className}>
      {children}
    </MotionComponent>
  );
}
export { Reveal };
