"use client";

import { motion } from "framer-motion";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Splits text into words and reveals them with a staggered clip-path
 * animation as the element scrolls into view. Used for headline moments.
 */
export default function RevealText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  once = true,
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, amount: 0.8 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
