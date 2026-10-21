import Reveal from "./Reveal";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#222] pt-16 pb-8 px-6 md:px-10 overflow-hidden bg-[#0a0a0a]">
      {/* Marquee Banner */}
      <Reveal>
        <div className="relative overflow-hidden border-b border-[#222] pb-16 mb-12 select-none">
          <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused] relative z-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-[clamp(3.5rem,12vw,9.5rem)] leading-none pr-12 text-white select-none tracking-tight font-medium"
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
            <span className="font-display font-medium text-xl text-white">Radwan Eldaly</span>
            <p className="font-body text-sm text-[#999] mt-4 max-w-[28ch]">
              Shopify Developer crafting custom storefronts, responsive UI, and practical store improvements.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">Location</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-[#ccc]">
              <li>Cairo, Egypt</li>
              <li>Remote-first, worldwide clients</li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">Contact</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-[#ccc]">
              <li>
                <a
                  href="mailto:radwaneldaly14@gmail.com"
                  className="hover:text-white transition-colors break-all sm:break-normal"
                >
                  radwaneldaly14@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201123170163"
                  className="hover:text-white transition-colors"
                >
                  +20 112 317 0163
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-2 font-body text-sm text-[#ccc]">
              {socials.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    className="hover:text-white transition-colors"
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

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs tracking-[0.15em] uppercase text-[#666] border-t border-[#222] pt-8">
          <span>© {new Date().getFullYear()}. All rights reserved.</span>
          <span>Designed &amp; built with Next.js &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}

