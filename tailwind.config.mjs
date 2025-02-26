/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      violet: "#111428",
      smoke: "#95A5B5",
      mist: "#E2E8EF",
      lavender: "#9880E8",
      orchid: "#E666CC",
      flamingo: "#FA9AA2",
      turquoise: "#55CEDA",
      /* Resume PDF */
      amethyst: "#7220D2",
      slate: "#4B5565",
      charcoal: "#10182F",
    },
    fontFamily: {
      header: ['"Space Grotesk"', "Atkinson", "sans-serif"],
      body: ["Atkinson", "sans-serif"],
    },
    fontSize: {
      xs: ["0.85rem", "0.9rem"],
      sm: ["1rem", "1.15rem"],
      base: ["1.2rem", "1.35rem"],
      lg: ["1.75rem", "1.8rem"],
      xl: ["2rem", "2rem"],
      "2xl": ["2.7rem", "2.3rem"],
      "3xl": ["3.5rem", "3.5rem"],
      "pdf-sm": ["0.7rem", "0.7rem"],
      "pdf-base": ["0.8rem", "0.9rem"],
      "pdf-lg": ["1.2rem", "1.2rem"],
      "pdf-xl": ["2rem", "2rem"],
      "pdf-xxl": ["3rem", "2rem"],
    },
    lineHeight: {
      normal: "1.13",
      relaxed: "1.25",
      loose: "1.32",
    },
    textDecorationThickness: {
      underline: "2px",
      "underline-thick": "4px",
    },
    screens: {
      sm: "384px",
      md: "512px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
