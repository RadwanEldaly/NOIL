"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line">
      <div className="mb-16 md:mb-24">
        <span className="eyebrow">Act V — How I Work</span>
        <RevealText
          text="The Process"
          as="h2"
          className="font-display italic text-clamp-h1 leading-[0.9] mt-4"
        />
      </div>

      <div className="relative">
        <div className="absolute left-[3.4rem] md:left-[4.4rem] top-0 bottom-0 w-px bg-line hidden sm:block" />
        <div className="flex flex-col">
          {process.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="flex items-start gap-6 md:gap-10 py-8 md:py-10 border-b border-line last:border-b-0"
            >
              <span className="font-mono text-sm text-smoke w-10 md:w-14 shrink-0 pt-1">
                {step.index}
              </span>
              <span
                className="hidden sm:block w-3 h-3 rounded-full bg-stage border border-accent shrink-0 mt-2"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display italic text-[clamp(1.5rem,4vw,2.75rem)] leading-none mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-bone-dim leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
