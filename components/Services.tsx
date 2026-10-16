"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import RevealText from "./RevealText";
import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-24 md:py-36 border-t border-line scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <span className="eyebrow block mb-3">02</span>
          <RevealText
            text="What I Do"
            as="h2"
            className="font-display font-medium tracking-tightest text-clamp-h1 leading-[0.95]"
          />
        </div>

        <div className="border-t border-line">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 sm:gap-6 py-7 md:py-10 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-xs sm:text-sm text-smoke w-8 sm:w-10 shrink-0">
                      {service.index}
                    </span>
                    <span className="font-display font-medium tracking-tightest text-[clamp(1.35rem,4vw,3rem)] leading-[1.15] flex-1 min-w-0 text-bone group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: "easeOut" }}
                      className="text-2xl font-light shrink-0 text-bone"
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 sm:pl-10 md:pl-16 pb-8 md:pb-12 flex flex-col md:flex-row gap-6 md:gap-16">
                          <p className="font-body text-bone-dim leading-relaxed max-w-md">
                            {service.description}
                          </p>
                          <ul className="flex flex-col gap-2 shrink-0">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="eyebrow flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
