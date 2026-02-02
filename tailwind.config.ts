import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eed600",
        secondary: "#4f2b01",
        color1: "#fffab8",
        color2: "#faf5a9",
        color3: "#ffe600",
        color4: "#6d5404",
        color5: "#4f2b01",
      },
      screens: {
        md: "990px",
      },
      backgroundImage: {
        drawer: "url('/images/main/bg-drawer.png')",
      },
    },
  },
  plugins: [],
};

export default config;

