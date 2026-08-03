"use client";

import RevealText from "./RevealText";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "100%", label: "Job Success Score" },
  { value: "Top", label: "Rated Upwork Freelancer" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-10 border-t border-line">
      <div className="grid md:grid-cols-12 gap-y-16 gap-x-6">
        <div className="md:col-span-4">
          <span className="eyebrow">Act IV — About Me</span>
          <RevealText
            text="Craft & Code"
            as="h2"
            className="font-display italic text-clamp-h1 leading-[0.9] mt-4"
          />
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="font-body text-clamp-body text-bone-dim leading-relaxed max-w-2xl">
            I am a senior frontend engineer and UX designer. Working with me means direct communication—no account managers, no junior hand-offs. I take on a select number of freelance projects so every codebase gets my obsessive attention to performance, motion, and craft.
          </p>
          <p className="font-body text-clamp-body text-bone-dim leading-relaxed max-w-2xl mt-6">
            I partner with founders, agencies, and brand teams who want their digital presence to feel undeniably premium. If you need a developer who understands design as much as code, we should talk.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mt-16 pt-10 border-t border-line">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display italic text-3xl md:text-4xl text-bone">
                  {stat.value}
                </p>
                <p className="eyebrow mt-2 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
