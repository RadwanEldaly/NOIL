"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  once = true,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      <span className="block overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once, amount: 0.4 }}
          transition={{
            duration: 0.9,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {text}
        </motion.span>
      </span>
    </Tag>
  );
}
