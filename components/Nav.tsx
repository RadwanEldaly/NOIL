"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

const sections = [
  { id: "work", label: "Selected Work", act: "01" },
  { id: "services", label: "Skills", act: "02" },
  { id: "about", label: "About", act: "03" },
  { id: "process", label: "Process", act: "04" },
  ...(testimonials.length > 0 ? [{ id: "testimonials", label: "Testimonials", act: "05" }] : []),
  { id: "contact", label: "Contact", act: testimonials.length > 0 ? "06" : "05" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const targetIdRef = useRef<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  const scrollTo = (id: string) => {
    if (open) {
      targetIdRef.current = id;
      setOpen(false);
    } else {
      handleScroll(id);
    }
  };

  const handleExitComplete = () => {
    if (targetIdRef.current) {
      const id = targetIdRef.current;
      targetIdRef.current = null;
      handleScroll(id);
    }
  };

  const panelVariants = shouldReduceMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        closed: { clipPath: "inset(0 0 100% 0)" },
        open: {
          clipPath: "inset(0 0 0% 0)",
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
          clipPath: "inset(0 0 100% 0)",
          transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
        },
      };

  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.25,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const linkVariants = {
    closed: {
      y: shouldReduceMotion ? 0 : "110%",
      opacity: shouldReduceMotion ? 0 : 1,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 pointer-events-none transition-[padding] duration-500 ease-cinematic ${
          scrolled ? "pt-3" : "pt-5 md:pt-6"
        }`}
      >
        <div
          className={`mx-auto pointer-events-auto flex items-center justify-between transition-all duration-500 ease-cinematic ${
            scrolled
              ? "max-w-5xl w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] px-4 md:px-6 py-2 rounded-full border border-line/70 bg-stage/90 supports-[backdrop-filter]:bg-stage/60 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "max-w-7xl w-full px-6 md:px-12 lg:px-20 py-2 border border-transparent"
          }`}
        >
          <button
            onClick={() => scrollTo("hero")}
            className={`font-display font-medium tracking-tight text-bone hover:text-accent transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
              scrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
            }`}
          >
            Radwan Eldaly
          </button>

          {/* Desktop direct navigation links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("work")}
              className="eyebrow text-bone hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="eyebrow text-bone hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="eyebrow text-bone hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="eyebrow text-bone hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 -mr-2 rounded-sm"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-1.5 w-6 group-hover:scale-105 transition-transform duration-200">
              <span className="h-px w-full bg-bone group-hover:bg-accent transition-colors duration-200" />
              <span className="h-px w-full bg-bone group-hover:bg-accent transition-colors duration-200" />
            </span>
          </button>
        </div>
      </header>

      {/* Desktop side rail */}
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
              {s.act} — {s.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-smoke group-hover:bg-accent transition-colors duration-200" />
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {open && (
          <motion.div
            key="fullscreen-nav-menu"
            initial="closed"
            animate="open"
            exit="exit"
            variants={panelVariants}
            className="fixed inset-0 z-[70] bg-stage flex flex-col justify-between px-6 md:px-16 py-8 md:py-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display font-medium text-xl text-bone">Radwan Eldaly</span>
              <button
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 eyebrow text-bone hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 -mr-2 rounded-sm transition-colors duration-200"
                aria-label="Close menu"
              >
                <span>Close</span>
                <span className="text-base leading-none group-hover:rotate-90 transition-transform duration-300">✕</span>
              </button>
            </div>

            <motion.ul
              variants={listVariants}
              initial="closed"
              animate="open"
              className="flex flex-col gap-3 md:gap-5 my-auto py-4"
            >
              {sections.map((s) => (
                <li key={s.id} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className="flex items-baseline gap-4 sm:gap-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md w-full"
                    >
                      <span className="font-body text-xs sm:text-sm text-smoke shrink-0">{s.act}</span>
                      <span className="font-display font-medium tracking-tightest text-[clamp(2rem,6.5vw,5rem)] leading-[1.05] text-bone group-hover:text-accent transition-colors duration-200 flex-1 min-w-0">
                        {s.label}
                      </span>
                    </button>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="flex flex-col md:flex-row justify-between gap-4 eyebrow mt-6 pt-4 border-t border-line text-smoke"
            >
              <span>Cairo, Egypt — Remote</span>
              <a href="mailto:radwaneldaly14@gmail.com" className="hover:text-accent transition-colors">
                radwaneldaly14@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
