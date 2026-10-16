import RevealText from "./RevealText";
import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 border-t border-line scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <span className="eyebrow block mb-3">04</span>
          <RevealText
            text="The Process"
            as="h2"
            className="font-display font-medium tracking-tightest text-clamp-h1 leading-[0.95]"
          />
        </div>

        <div className="relative">
          <div className="absolute left-[3.4rem] md:left-[4.4rem] top-0 bottom-0 w-px bg-line hidden sm:block" />
          <div className="flex flex-col">
            {process.map((step, idx) => (
              <Reveal key={step.index} delay={idx * 0.08}>
                <div className="flex items-start gap-4 sm:gap-6 md:gap-10 py-7 md:py-10 border-b border-line last:border-b-0">
                  <span className="font-body text-xs sm:text-sm text-smoke w-8 sm:w-10 md:w-14 shrink-0 pt-1">
                    {step.index}
                  </span>
                  <span
                    className="hidden sm:block w-3 h-3 rounded-full bg-stage border border-accent shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-medium tracking-tightest text-[clamp(1.35rem,4vw,2.75rem)] leading-[1.15] mb-3 text-bone">
                      {step.title}
                    </h3>
                    <p className="font-body text-bone-dim leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
