"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The signature moment: NOIR set in stacked, oversized Fraunces italic,
 * scrubbed by scroll position rather than time — as the visitor scrolls,
 * the wordmark pulls apart, the backdrop drifts, and the eyebrow copy
 * fades to reveal the next section beneath it.
 *
 * Art direction note: the backdrop is a slow-panning generative gradient
 * standing in for a to-be-shot cinematic plate. See /docs/higgsfield-prompts.md
 * for the exact prompt used to generate the production hero loop.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Generative backdrop plate */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#141014] to-[#0B0B0C]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(122,31,26,0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(255,59,46,0.12), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-vignette-radial" />
      </motion.div>

      <div className="pt-28 px-6 md:px-10 flex justify-between items-start">
        <p className="eyebrow max-w-[20ch]">Senior Frontend & Shopify Developer</p>
        <p className="eyebrow hidden md:block text-accent">Available for work</p>
      </div>

      <motion.div style={{ y: titleY, opacity }} className="px-6 md:px-10">
        <h1 className="font-display italic leading-[0.85] text-clamp-hero tracking-tightest text-bone select-none">
          {["NO", "IR"].map((chunk, i) => (
            <span key={chunk} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {chunk}
              </motion.span>
            </span>
          ))}
        </h1>
      </motion.div>

      <motion.div
        style={{ y: subY, opacity }}
        className="px-6 md:px-10 pb-10 md:pb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <p className="font-body text-clamp-body text-bone-dim max-w-md leading-relaxed">
          I engineer premium digital experiences for brands that refuse
          to look ordinary — specializing in Next.js, React, and headless Shopify.
        </p>
        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto gap-4 mt-6 md:mt-0">
          <a 
            href="#work"
            data-cursor="hover"
            className="eyebrow w-full sm:w-auto text-center border border-line px-5 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            data-cursor="hover"
            className="eyebrow w-full sm:w-auto text-center bg-bone text-stage px-5 py-3 rounded-full hover:bg-accent hover:text-bone transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
