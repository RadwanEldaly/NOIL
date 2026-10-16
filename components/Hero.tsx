"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      id="hero"
      className="relative min-h-[90svh] md:min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-28 pb-8 md:pb-12 bg-stage scroll-mt-20"
    >
      {/* Centered layout container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex-1 flex flex-col justify-between">
        {/* Top Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex justify-between items-center w-full pt-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="eyebrow text-[0.65rem] sm:text-xs">
              Shopify Developer — Storefront UI &amp; Custom CSS
            </p>
          </div>
          <p className="eyebrow hidden md:flex items-center gap-2 text-accent-dim text-xs">
            Available for new projects
          </p>
        </motion.div>

        {/* Main Content Area: Responsive Grid */}
        <div className="my-auto py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 max-w-xl">
            <h1 className="font-display font-medium leading-[0.95] text-[clamp(2.5rem,6.8vw,6.5rem)] tracking-tightest text-bone">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: shouldReduceMotion ? 0 : "105%", opacity: shouldReduceMotion ? 0 : 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1, ease }}
                >
                  Radwan
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-bone/90"
                  initial={{ y: shouldReduceMotion ? 0 : "105%", opacity: shouldReduceMotion ? 0 : 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease }}
                >
                  Eldaly
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="font-body text-bone-dim leading-relaxed mt-5 md:mt-6 text-sm sm:text-base md:text-[1.05rem] max-w-lg"
            >
              Fixing storefront styling issues, customizing responsive theme layouts, and solving real UI/UX problems for Shopify brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="flex flex-col sm:flex-row items-center gap-3.5 mt-7 md:mt-8 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="eyebrow w-full sm:w-auto text-center border border-line px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent text-xs"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="eyebrow w-full sm:w-auto text-center bg-bone text-stage font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-stage transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent text-xs"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Editorial Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="relative p-4 rounded-2xl bg-stage-raised border border-line group shadow-sm"
            >
              <div className="relative w-[190px] sm:w-[220px] md:w-[240px] lg:w-[255px] aspect-[4/5] rounded-xl overflow-hidden border border-line bg-stage-surface">
                <Image
                  src="/images/radwan-eldaly.jpg"
                  alt="Radwan Eldaly — Shopify Developer"
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 255px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="font-body text-[0.72rem] tracking-tight text-bone font-medium block">
                    Radwan Eldaly
                  </span>
                  <span className="font-body text-[0.62rem] text-accent-dim block">
                    Shopify Theme Specialist
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-stage-surface border border-line text-smoke font-body text-[0.6rem]">
                  Cairo, EG
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="border-t border-line/60 pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-smoke font-body text-[0.68rem] tracking-wider uppercase"
        >
          <span>Portfolio 2026</span>
          <span>Storefront CSS • Theme UI Customization • Responsive Problem Solving</span>
        </motion.div>
      </div>
    </section>
  );
}
