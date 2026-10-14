"use client";

import Image from "next/image";
import RevealText from "./RevealText";

const focusAreas = [
  { value: "Liquid", label: "Custom Theme Code" },
  { value: "Sections", label: "Modular Storefront UI" },
  { value: "Mobile", label: "Responsive Design & QA" },
  { value: "UX", label: "Practical Store Improvements" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line">
      <div className="grid md:grid-cols-12 gap-y-12 md:gap-y-16 gap-x-6">
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <span className="eyebrow">Act IV — About Me</span>
            <RevealText
              text="Craft & Code"
              as="h2"
              className="font-display italic text-clamp-h1 leading-[0.9] mt-4"
            />
          </div>

          <div className="mt-8 md:mt-12 relative w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5] rounded-lg overflow-hidden border border-line bg-stage-raised shadow-xl">
            <Image
              src="/images/radwan-eldaly.jpg"
              alt="Radwan Eldaly — Shopify Developer"
              fill
              sizes="(max-width: 768px) 260px, 300px"
              className="object-cover object-top"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stage/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="font-mono text-[0.68rem] tracking-wider text-bone/90 block">
                Radwan Eldaly
              </span>
              <span className="font-mono text-[0.62rem] text-accent block">
                Shopify Developer
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="font-body text-clamp-body text-bone-dim leading-relaxed max-w-2xl">
            I am Radwan Eldaly, a Shopify developer focused on building practical storefront experiences and tailoring theme code to meet real e-commerce needs. Working with me means direct communication and honest execution—writing clean Liquid, implementing responsive UI designs, and solving usability issues that affect shoppers.
          </p>
          <p className="font-body text-clamp-body text-bone-dim leading-relaxed max-w-2xl mt-6">
            I partner with independent brands and store owners who want custom Shopify sections, thoughtful layout improvements, and dependable theme modifications that perform smoothly across devices. Whether customizing navigation architecture, implementing custom collection filters, or enhancing product cards, I treat every codebase with precision and care.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-6 mt-16 pt-10 border-t border-line">
            {focusAreas.map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="font-display italic text-[clamp(1.35rem,4.5vw,2.25rem)] md:text-3xl text-bone leading-tight">
                  {item.value}
                </p>
                <p className="eyebrow mt-2 leading-relaxed text-[0.65rem] sm:text-[0.7rem]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
