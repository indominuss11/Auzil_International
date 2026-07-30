import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Ink" — the darkest text/heading color. A warm near-black with a
        // faint green cast (not blue) so it sits comfortably next to sage.
        ink: {
          DEFAULT: "#1F2A24",
          50: "#F0F2EF",
          100: "#DDE3DE",
          400: "#5C6E63",
          700: "#2B3A32",
          900: "#1F2A24",
        },
        charcoal: "#2A2E2A",
        ivory: "#F8F6F1",
        stone: {
          DEFAULT: "#8C8577",
          100: "#F4F2ED",
          200: "#E6E2D8",
          300: "#D3CCBB",
        },
        // "Sage" — the primary accent (buttons, links, active nav states,
        // dark accent bands). Kept light/saturated enough to read clearly
        // as green against both white and ink-900, rather than blending
        // toward near-black. 700 stays darker for :hover states on buttons.
        sage: {
          DEFAULT: "#4F7A61",
          700: "#3D6049",
        },
        // "Clay" — secondary accent for eyebrows, borders, small details.
        clay: {
          DEFAULT: "#8C7A56",
          light: "#B0A17E",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "logo-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "logo-scroll": "logo-scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
