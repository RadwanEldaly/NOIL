"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "./RevealText";
import { services } from "@/lib/data";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line">
      <div className="mb-16 md:mb-24">
        <span className="eyebrow">Act III — Capabilities</span>
        <RevealText
          text="What I Do"
          as="h2"
          className="font-display italic text-clamp-h1 leading-[0.9] mt-4"
        />
      </div>

      <div className="border-t border-line">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={service.title} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                data-cursor="hover"
                className="w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-sm text-smoke w-10 shrink-0">
                  {service.index}
                </span>
                <span className="font-display italic text-[clamp(1.5rem,4vw,3rem)] leading-none flex-1 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl font-light shrink-0"
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
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-10 md:pl-16 pb-10 md:pb-12 flex flex-col md:flex-row gap-6 md:gap-16">
                      <p className="font-body text-bone-dim leading-relaxed max-w-md">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2 shrink-0">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="eyebrow flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
