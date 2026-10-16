import Reveal from "./Reveal";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line pt-16 pb-8 px-6 md:px-10 overflow-hidden bg-stage">
      {/* Marquee Banner */}
      <Reveal>
        <div className="relative overflow-hidden border-b border-line pb-16 mb-12 select-none">
          <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused] relative z-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-[clamp(3.5rem,12vw,9.5rem)] leading-none pr-12 text-bone select-none tracking-tight font-medium"
                aria-hidden={i === 1}
              >
                LET&apos;S TALK — LET&apos;S TALK —{" "}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <span className="font-display font-medium text-xl text-bone">Radwan Eldaly</span>
            <p className="font-body text-sm text-bone-dim mt-4 max-w-[28ch]">
              Shopify Developer crafting custom storefronts, responsive UI, and practical store improvements.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Location</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-bone-dim">
              <li>Cairo, Egypt</li>
              <li>Remote-first, worldwide clients</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-bone-dim">
              <li>
                <a
                  href="mailto:radwaneldaly14@gmail.com"
                  className="hover:text-accent transition-colors break-all sm:break-normal"
                >
                  radwaneldaly14@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-bone-dim">
              {socials.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    className="hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 eyebrow border-t border-line pt-8">
          <span>© {new Date().getFullYear()}. All rights reserved.</span>
          <span>Designed &amp; built with Next.js &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}
