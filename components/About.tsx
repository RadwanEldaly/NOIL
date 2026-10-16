"use client";

import Image from "next/image";
import RevealText from "./RevealText";
import Reveal from "./Reveal";
import { socials } from "@/lib/data";

const stats = [
  { value: "30+", label: "Projects Completed" },
  { value: "2", label: "Years of Experience" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* LEFT (col-span-6 on desktop) */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal>
              <span className="eyebrow block mb-4">03 — About</span>
              <RevealText
                text="About Me"
                as="h2"
                className="font-display font-semibold tracking-tightest text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9]"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-body text-bone-dim text-base md:text-lg leading-relaxed mt-8 max-w-xl">
                Hey, I&apos;m Radwan Eldaly, a Shopify developer with 2 years of hands-on experience building custom storefront sections, responsive UI, and theme improvements for e-commerce brands. I work with store owners who want clean Liquid, fast mobile experiences, and practical changes that help shoppers buy.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 border-y border-line py-8 mt-10">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i === 0 ? "pr-6" : "border-l border-line pl-6"}
                  >
                    <p className="text-4xl md:text-5xl font-display font-medium text-bone">
                      {stat.value}
                    </p>
                    <p className="text-sm text-bone mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Mobile photo placed directly after stats */}
            <div className="block lg:hidden my-10">
              <Reveal delay={0.25}>
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-stage-surface grayscale w-full">
                  <Image
                    src="/images/radwan-eldaly.jpg"
                    alt="Radwan Eldaly — Shopify Developer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-8 mt-4 lg:mt-10">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase text-sm tracking-wide text-bone hover:underline transition-all"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT (col-span-5, col-start-8 on desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <div className="relative aspect-square md:aspect-[1/1] rounded-3xl overflow-hidden bg-stage-surface grayscale w-full">
                <Image
                  src="/images/radwan-eldaly.jpg"
                  alt="Radwan Eldaly — Shopify Developer"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
