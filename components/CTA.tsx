"use client";

import RevealText from "./RevealText";
import { testimonials } from "@/lib/data";

export default function CTA() {
  const act = testimonials.length > 0 ? "Act VII" : "Act VI";

  return (
    <section
      id="contact"
      className="relative py-24 md:py-44 border-t border-line"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col items-start">
        <span className="eyebrow mb-8">{act} — Start Something</span>

        <RevealText
          text="Let's Build Your Next Chapter"
          as="h2"
          className="font-display italic text-clamp-h1 leading-[0.9] max-w-4xl"
        />

        <a
          href="mailto:radwaneldaly14@gmail.com"
          className="group mt-10 md:mt-14 inline-flex items-center justify-between sm:justify-start gap-4 sm:gap-6 border-b border-bone pb-3 max-w-full"
        >
          <span className="font-display italic text-[clamp(1.15rem,4vw,2.5rem)] break-all sm:break-normal">
            radwaneldaly14@gmail.com
          </span>
          <span className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </a>

        <p className="font-body text-bone-dim mt-10 max-w-md">
          Available for Shopify storefront customization, UI implementation, and practical store improvements. Tell me
          about your store goals and timeline — I typically reply within 24 hours.
        </p>
      </div>
    </section>
  );
}
