export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[580px] h-[100svh] w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Clean, subtle dark backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#121417] via-[#16191F] to-[#121417]" />

      <div className="pt-28 px-6 md:px-10 flex justify-between items-start">
        <p className="eyebrow max-w-[32ch]">Shopify Developer — Storefront UI</p>
        <p className="eyebrow hidden md:block text-accent">Available for work</p>
      </div>

      <div className="px-6 md:px-10">
        <h1 className="font-display italic leading-[0.88] text-[clamp(2.75rem,9.5vw,9rem)] tracking-tightest text-bone">
          <span className="block">Radwan</span>
          <span className="block text-bone/90">Eldaly</span>
        </h1>
      </div>

      <div
        className="px-6 md:px-10 pb-10 md:pb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <p className="font-body text-clamp-body text-bone-dim max-w-lg leading-relaxed">
          Building custom Shopify storefront experiences with a focus on responsive UI,
          usability, and thoughtful theme customization.
        </p>
        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto gap-4 mt-6 md:mt-0">
          <a 
            href="#work"
            className="eyebrow w-full sm:w-auto text-center border border-line px-5 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View Work
          </a>
          <a 
            href="#contact"
            className="eyebrow w-full sm:w-auto text-center bg-bone text-stage px-5 py-3 rounded-full hover:bg-accent hover:text-bone transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
