import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stage: "#0B0B0C",
        "stage-raised": "#141415",
        bone: "#F2EFEA",
        "bone-dim": "#C9C4BB",
        smoke: "#6E6A64",
        line: "#232324",
        accent: "#FF3B2E",
        "accent-dim": "#7A1F1A",
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
      backgroundImage: {
        grain: "url('/grain.svg')",
        "vignette-radial":
          "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.05), rgba(0,0,0,0) 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grainShift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "30%": { transform: "translate(2%,1%)" },
          "50%": { transform: "translate(-2%,2%)" },
          "70%": { transform: "translate(1%,-1%)" },
          "90%": { transform: "translate(-1%,2%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        grain: "grainShift 8s steps(8) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
