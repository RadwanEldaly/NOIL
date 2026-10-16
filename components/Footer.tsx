export default function Footer() {
  const socials = [
    { label: "LinkedIn", url: "https://linkedin.com/in/radwan-eldaly-a0b079353" },
    { label: "X", url: "https://x.com/EldalyRadwan" },
    { label: "Instagram", url: "https://instagram.com/radwan.eldaly.1" },
  ];

  return (
    <footer className="relative border-t border-line pt-16 pb-8 px-6 md:px-10 overflow-hidden">
      {/* Sunlight Aura & Atmospheric Flare */}
      <div className="relative overflow-hidden border-b border-line pb-16 mb-12 select-none">
        {/* Soft radial golden sun beam */}
        <div
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.22)_0%,_rgba(245,158,11,0.12)_35%,_rgba(217,119,6,0.04)_65%,_transparent_80%)] blur-3xl"
          aria-hidden="true"
        />
        {/* Radiant core sun intensity */}
        <div
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[440px] h-[150px] rounded-full bg-gradient-to-b from-amber-100/40 via-amber-300/20 to-transparent blur-2xl"
          aria-hidden="true"
        />
        {/* Diagonal sunlight ray streak */}
        <div
          className="pointer-events-none absolute -top-20 left-[42%] w-[190px] h-[400px] -rotate-12 bg-gradient-to-b from-amber-100/25 via-amber-400/8 to-transparent blur-2xl"
          aria-hidden="true"
        />

        <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused] relative z-10">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="font-display italic text-[clamp(3.5rem,12vw,9.5rem)] leading-none pr-12 text-[#FFF7ED] select-none tracking-tight font-medium"
              style={{
                textShadow:
                  "0 0 25px rgba(254, 240, 138, 0.55), 0 0 60px rgba(251, 191, 36, 0.4), 0 0 110px rgba(245, 158, 11, 0.25)",
                WebkitTextStroke: "1px rgba(254, 243, 199, 0.45)",
              }}
              aria-hidden={i === 1}
            >
              LET&apos;S TALK — LET&apos;S TALK —{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <span className="font-display italic text-xl">Radwan Eldaly</span>
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
                <a href="mailto:radwaneldaly14@gmail.com" className="hover:text-accent transition-colors break-all sm:break-normal">
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
                  <a href={url} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 eyebrow border-t border-line/40 pt-8">
          <span>© {new Date().getFullYear()}. All rights reserved.</span>
          <span>Designed &amp; built with Next.js &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}
