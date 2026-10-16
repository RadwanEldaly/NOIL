"use client";

import React from "react";
import RevealText from "./RevealText";
import Reveal from "./Reveal";
import { services, type Service } from "@/lib/data";

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<Service["icon"], React.ReactNode> = {
  shopify: (
    <svg {...iconProps}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  code: (
    <svg {...iconProps}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 6-3 12" />
    </svg>
  ),
  responsive: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="13" height="10" rx="1.5" />
      <rect x="14" y="9" width="7" height="11" rx="1.5" />
    </svg>
  ),
  growth: (
    <svg {...iconProps}>
      <path d="m4 16 5-5 4 4 7-8" />
      <path d="M15 7h5v5" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-y-12 gap-x-6">
          {/* Left: number + heading (sticky on desktop) */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <span className="eyebrow block mb-3">02 — Skills</span>
            <RevealText
              text="Skills"
              as="h2"
              className="font-display font-semibold text-clamp-h1 mt-3"
            />
            <p className="mt-6 max-w-sm text-bone-dim leading-relaxed">
              The tools and craft I use to build fast, polished e-commerce storefronts.
            </p>
          </div>

          {/* Right: stacked cards */}
          <ul className="md:col-span-7 lg:col-span-6 lg:col-start-7 flex flex-col gap-4">
            {services.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.06}>
                  <article className="rounded-3xl bg-stage-raised border border-line p-5 md:p-6 transition-colors duration-300 hover:border-bone/20">
                    <div className="flex items-center gap-4 md:gap-5">
                      <span
                        className={`grid place-items-center w-12 h-12 shrink-0 rounded-xl text-white ${s.tone}`}
                      >
                        {icons[s.icon]}
                      </span>
                      <h3 className="font-display font-medium text-xl md:text-2xl text-bone leading-tight">
                        {s.title}
                      </h3>
                    </div>

                    <p className="mt-4 md:pl-[68px] text-bone-dim leading-relaxed">
                      {s.description}
                    </p>

                    <ul className="mt-4 md:pl-[68px] flex flex-wrap gap-2">
                      {s.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="rounded-full bg-stage-surface px-3 py-1 text-xs text-bone-dim"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
