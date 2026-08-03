"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Hero", act: "I" },
  { id: "work", label: "Selected Work", act: "II" },
  { id: "services", label: "Services", act: "III" },
  { id: "about", label: "About", act: "IV" },
  { id: "process", label: "Process", act: "V" },
  { id: "testimonials", label: "Testimonials", act: "VI" },
  { id: "contact", label: "Contact", act: "VII" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
        <button
          onClick={() => scrollTo("hero")}
          data-cursor="hover"
          className="font-display italic text-xl md:text-2xl tracking-tightest text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          NOIR
        </button>

        <button
          onClick={() => setOpen(true)}
          data-cursor="hover"
          className="eyebrow flex items-center gap-3 text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 -mr-2 rounded-sm"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="hidden sm:inline">Index</span>
          <span className="flex flex-col gap-1.5 w-6">
            <span className="h-px w-full bg-bone" />
            <span className="h-px w-full bg-bone" />
          </span>
        </button>
      </header>

      {/* Desktop side rail — quiet, always-present act index */}
      <nav
        aria-label="Section index"
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            data-cursor="hover"
            className="group flex items-center justify-end gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1"
            aria-label={`Go to ${s.label}`}
          >
            <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {s.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-smoke group-hover:bg-accent transition-colors duration-300" />
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[70] bg-stage flex flex-col justify-between px-6 md:px-16 py-10"
          >
            <div className="flex items-center justify-between">
              <span className="font-display italic text-xl">NOIR</span>
              <button
                onClick={() => setOpen(false)}
                data-cursor="hover"
                className="eyebrow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 -mr-2 rounded-sm"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <ul className="flex flex-col gap-2 md:gap-4">
              {sections.map((s, i) => (
                <li key={s.id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scrollTo(s.id)}
                    data-cursor="hover"
                    className="flex items-baseline gap-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md w-full"
                  >
                    <span className="font-mono text-sm text-smoke">{s.act}</span>
                    <span className="font-display italic text-[clamp(2rem,7vw,5rem)] leading-none text-bone group-hover:text-accent transition-colors duration-300">
                      {s.label}
                    </span>
                  </motion.button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row justify-between gap-4 eyebrow">
              <span>Available Worldwide</span>
              <span>hello@noir.studio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
