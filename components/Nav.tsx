"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

const baseSections = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Selected Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  ...(testimonials.length > 0 ? [{ id: "testimonials", label: "Testimonials" }] : []),
  { id: "contact", label: "Contact" },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
const sections = baseSections.map((s, idx) => ({
  ...s,
  act: romanNumerals[idx] || `${idx + 1}`,
}));

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  // Close menu on Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display italic text-lg md:text-xl tracking-tight text-bone hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          Radwan Eldaly
        </button>

        {/* Desktop direct navigation links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("work")}
            className="eyebrow hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="eyebrow hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="eyebrow hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="eyebrow hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => setOpen(true)}
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
            className="group flex items-center justify-end gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1"
            aria-label={`Go to ${s.label}`}
          >
            <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {s.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-smoke group-hover:bg-accent transition-colors duration-200" />
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[70] bg-stage flex flex-col justify-between px-6 md:px-16 py-8 md:py-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display italic text-xl">Radwan Eldaly</span>
              <button
                onClick={() => setOpen(false)}
                className="eyebrow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 -mr-2 rounded-sm"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>

            <ul className="flex flex-col gap-2 md:gap-4 my-auto py-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="flex items-baseline gap-4 sm:gap-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md w-full"
                  >
                    <span className="font-mono text-xs sm:text-sm text-smoke shrink-0">{s.act}</span>
                    <span className="font-display italic text-[clamp(1.75rem,6vw,5rem)] leading-[1.1] text-bone group-hover:text-accent transition-colors duration-200 flex-1 min-w-0">
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row justify-between gap-4 eyebrow mt-6 pt-4 border-t border-line/40">
              <span>Cairo, Egypt — Remote</span>
              <a href="mailto:radwaneldaly14@gmail.com" className="hover:text-accent transition-colors">
                radwaneldaly14@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
