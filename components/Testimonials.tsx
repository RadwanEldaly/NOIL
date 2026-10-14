"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  if (!testimonials || testimonials.length === 0) return null;
  const testimonial = testimonials[active];
  if (!testimonial) return null;

  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line overflow-hidden"
    >
      <span className="eyebrow">Act VI — In Their Words</span>

      <div
        className="min-h-[260px] md:min-h-[220px] flex items-center mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="font-display italic text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] text-bone">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 eyebrow flex items-center gap-3">
              <span className="text-bone normal-case tracking-normal font-body text-sm">
                {testimonial.name}
              </span>
              <span aria-hidden="true">—</span>
              <span>
                {testimonial.role}, {testimonial.company}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-12" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            role="tab"
            aria-selected={i === active}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setActive(i)}
            className="h-10 w-16 flex items-center relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="h-px w-full bg-line relative overflow-hidden block">
              {i === active && (
                <motion.span
                  className="absolute inset-0 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
