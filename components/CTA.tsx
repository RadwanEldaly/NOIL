"use client";

import RevealText from "./RevealText";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-56 px-6 md:px-10 border-t border-line flex flex-col items-start"
    >
      <span className="eyebrow mb-8">Act VII — Start Something</span>

      <RevealText
        text="Let's Build Your Next Chapter"
        as="h2"
        className="font-display italic text-clamp-h1 leading-[0.9] max-w-4xl"
      />

      <a
        href="radwaneldaly14@gmail.com"
        data-cursor="hover"
        className="group mt-14 inline-flex items-center gap-6 border-b border-bone pb-3"
      >
        <span className="font-display italic text-[clamp(1.5rem,4vw,2.5rem)]">
          radwaneldaly14@gmail.com
        </span>
        <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
          →
        </span>
      </a>

      <p className="font-body text-bone-dim mt-10 max-w-md">
        I take on a limited number of new freelance projects each quarter. Tell me
        about your brand and timeline — I typically reply within 24 hours.
      </p>
    </section>
  );
}
