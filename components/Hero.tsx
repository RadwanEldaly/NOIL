import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90svh] md:min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-28 pb-8 md:pb-12"
    >
      {/* Clean, subtle dark backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#121417] via-[#15181E] to-[#121417]" />

      {/* Centered layout container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex-1 flex flex-col justify-between">
        {/* Top Meta Bar */}
        <div className="flex justify-between items-center w-full pt-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="eyebrow text-[0.65rem] sm:text-xs">Shopify Developer — Storefront UI & Custom CSS</p>
          </div>
          <p className="eyebrow hidden md:flex items-center gap-2 text-accent text-xs">
            Available for new projects
          </p>
        </div>

        {/* Main Content Area: Responsive Grid */}
        <div className="my-auto py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Scaled-down Typography & CTAs (-15%) */}
          <div className="lg:col-span-7 max-w-xl">
            <h1 className="font-display italic leading-[0.9] text-[clamp(2.5rem,6.8vw,6.5rem)] tracking-tightest text-bone">
              <span className="block">Radwan</span>
              <span className="block text-bone/90">Eldaly</span>
            </h1>
            <p className="font-body text-bone-dim leading-relaxed mt-5 md:mt-6 text-sm sm:text-base md:text-[1.05rem] max-w-lg">
              Fixing storefront styling issues, customizing responsive theme layouts, and solving real UI/UX problems for Shopify brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-7 md:mt-8 w-full sm:w-auto">
              <a 
                href="#work"
                className="eyebrow w-full sm:w-auto text-center border border-line px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent text-xs"
              >
                View Work
              </a>
              <a 
                href="#contact"
                className="eyebrow w-full sm:w-auto text-center bg-bone text-stage font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-bone transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent text-xs"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Scaled-down Profile Card (-15%) with p-4 internal padding */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-4 rounded-2xl bg-stage-raised/80 border border-line/80 shadow-2xl backdrop-blur-md group">
              <div className="relative w-[190px] sm:w-[220px] md:w-[240px] lg:w-[255px] aspect-[4/5] rounded-xl overflow-hidden border border-line/60 bg-stage">
                <Image
                  src="/images/radwan-eldaly.jpg"
                  alt="Radwan Eldaly — Shopify Developer"
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 255px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stage/85 via-stage/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[0.68rem] tracking-wider text-bone font-medium block">
                      Radwan Eldaly
                    </span>
                    <span className="font-mono text-[0.58rem] text-accent block">
                      Shopify Theme Specialist
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-mono text-[0.55rem]">
                    Cairo, EG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar inside centered container */}
        <div className="border-t border-line/50 pt-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-smoke font-mono text-[0.65rem] tracking-wider uppercase">
          <span>Portfolio 2026</span>
          <span>Storefront CSS • Theme UI Customization • Responsive Problem Solving</span>
        </div>
      </div>
    </section>
  );
}
