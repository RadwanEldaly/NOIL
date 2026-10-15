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
        stage: "#121417",
        "stage-raised": "#181B20",
        "stage-surface": "#20242C",
        bone: "#F4F4F5",
        "bone-dim": "#A1A1AA",
        smoke: "#71717A",
        line: "#27272A",
        accent: "#00A67E",
        "accent-dim": "#008060",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
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
