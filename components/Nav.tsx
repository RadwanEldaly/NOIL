"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials, socials, projects } from "@/lib/data";
import Image from "next/image";

const sections = [
  { id: "work", label: "Selected Work", act: "01" },
  { id: "services", label: "Skills", act: "02" },
  { id: "about", label: "About", act: "03" },
  { id: "process", label: "Process", act: "04" },
  ...(testimonials.length > 0 ? [{ id: "testimonials", label: "Testimonials", act: "05" }] : []),
  { id: "contact", label: "Contact", act: testimonials.length > 0 ? "06" : "05" },
];

const menuLinks = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Works" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Collect all project images for the slideshow
const projectImages = projects
  .filter((p) => p.coverImage || (p.mediaType === "image" && p.coverVideo))
  .map((p) => ({
    src: p.coverImage || p.coverVideo,
    alt: p.shortTitle || p.title,
  }));

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Cairo",
        hour12: false,
      });
      const offset = "+3";
      setTime(`${formatter.format(now)} (GMT${offset})`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}

function ProjectSlideshow({ className, sizes }: { className?: string; sizes: string }) {
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const next = useCallback(() => {
    if (projectImages.length <= 1) return;
    setCurrent((prev) => (prev + 1) % projectImages.length);
  }, []);

  useEffect(() => {
    if (!isActive || projectImages.length <= 1) return;
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [isActive, next]);

  if (projectImages.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className || ""}`}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={projectImages[current].src}
            alt={projectImages[current].alt}
            fill
            className="object-cover"
            sizes={sizes}
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {projectImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-4"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Show project ${i + 1}`}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/20 pointer-events-none" />
    </div>
  );
}

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
        staggerChildren: 0.08,
        delayChildren: 0.3,
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
            className="fixed inset-0 z-[70] bg-[#0a0a0a] flex flex-col overflow-y-auto"
          >
            {/* Top bar: Logo + Location/Time + Close */}
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6 shrink-0">
              <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                Radwan Eldaly
              </span>

              {/* Center: Based in Egypt + Flag + Time */}
              <div className="hidden md:flex items-center gap-3 text-[#999] text-xs tracking-[0.15em] uppercase">
                <span>Based in Egypt</span>
                <span className="text-base" role="img" aria-label="Egyptian flag">🇪🇬</span>
                <LiveClock />
              </div>

              <button
                onClick={() => setOpen(false)}
                className="group text-white hover:text-[#00A67E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A67E] p-2 -mr-2 rounded-sm transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>

            {/* Mobile: Based in Egypt (below header) */}
            <div className="flex md:hidden items-center gap-3 px-6 pb-4 text-[#999] text-xs tracking-[0.15em] uppercase">
              <span>Based in Egypt</span>
              <span className="text-base" role="img" aria-label="Egyptian flag">🇪🇬</span>
              <LiveClock />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 gap-8 lg:gap-12">
              {/* Left column: Image (desktop) + Nav links */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
                {/* Animated project slideshow — hidden on mobile, shown on desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hidden lg:flex items-center w-[280px] xl:w-[340px] shrink-0"
                >
                  <ProjectSlideshow
                    className="w-full aspect-[4/3]"
                    sizes="340px"
                  />
                </motion.div>

                {/* Navigation links */}
                <motion.ul
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  className="flex flex-col gap-2 md:gap-4 lg:justify-center"
                >
                  {menuLinks.map((s) => (
                    <li key={s.id} className="overflow-hidden">
                      <motion.div variants={linkVariants}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A67E] rounded-md w-full"
                        >
                          <span className="font-display font-medium tracking-tight text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-white group-hover:text-[#00A67E] transition-colors duration-200">
                            {s.label}
                          </span>
                        </button>
                      </motion.div>
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* Right column: Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col justify-center gap-4 lg:gap-6 lg:items-start lg:min-w-[320px]"
              >
                <a
                  href="mailto:radwaneldaly14@gmail.com"
                  className="font-display text-lg md:text-xl lg:text-2xl text-white hover:text-[#00A67E] transition-colors duration-200 break-all sm:break-normal"
                >
                  radwaneldaly14@gmail.com
                </a>
                <a
                  href="tel:+201123170163"
                  className="font-display text-lg md:text-xl lg:text-2xl text-white hover:text-[#00A67E] transition-colors duration-200"
                >
                  +20 112 317 0163
                </a>
              </motion.div>
            </div>

            {/* Animated project slideshow — shown only on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:hidden px-6 md:px-12 py-4"
            >
              <ProjectSlideshow
                className="w-full max-w-[320px] aspect-[4/3]"
                sizes="320px"
              />
            </motion.div>

            {/* Bottom: Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="px-6 md:px-12 lg:px-16 py-6 md:py-8 shrink-0"
            >
              {/* Desktop: horizontal row */}
              <div className="hidden md:flex items-center gap-8 border-t border-[#222] pt-6">
                {socials.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-[#999] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Mobile: vertical list with dividers */}
              <div className="flex md:hidden flex-col">
                {socials.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-[#999] hover:text-white transition-colors duration-200 py-4 border-t border-[#222]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
