"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const testimonial = testimonials[active];
  if (!testimonial) return null;

  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line overflow-hidden"
    >
      <span className="eyebrow">Act VI — In Their Words</span>

      <div className="min-h-[260px] md:min-h-[220px] flex items-center mt-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            data-cursor="hover"
            className="h-px w-16 bg-line relative overflow-hidden"
          >
            {i === active && (
              <motion.span
                className="absolute inset-0 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
