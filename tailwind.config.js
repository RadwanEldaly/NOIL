/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light editorial theme: stage is light background, bone is dark ink
        stage: "#F6F5F1", // page background (off-white)
        "stage-raised": "#FFFFFF", // cards
        "stage-surface": "#EDEBE5", // image placeholders / neutral media bg
        bone: "#0B0B0C", // main text
        "bone-dim": "#6B6B70", // body copy
        smoke: "#74747A", // small labels
        line: "#E4E2DB", // borders
        accent: "#00A67E", // dots, fills, hover only
        "accent-dim": "#008060", // accent used as TEXT (AA contrast)
      },
      fontFamily: {
        display: ["var(--font-inter-tight)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "clamp-hero": "clamp(3.5rem, 12vw, 11rem)",
        "clamp-h1": "clamp(2.5rem, 7vw, 6rem)",
        "clamp-h2": "clamp(2rem, 5vw, 4rem)",
        "clamp-body": "clamp(1rem, 1.2vw, 1.15rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
        dolly: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
