import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-black": "#0F0F0F",
        "base-white": "#FBFBFB",
        "primary-cream": "#ECECE3",
        "primary-dark-blue": "#022D42",
        "secondary-pale-cream": "#DADAC9",
        "secondary-pale-yellow": "#F4FFC4",
        "secondary-pale-blue": "#DADFDF",
        success: {
          "100": "#20793A",
          "80": "#2AA24E",
          "60": "#62D083",
          "40": "#89DCA2",
          "20": "#EBFAF0",
        },
        danger: {
          "100": "#990000",
          "80": "#CC0100",
          "60": "#FF666A",
          "40": "#FF9999",
          "20": "#FFE5E5",
        },
        warning: {
          "100": "#CB9701",
          "80": "#FFBD00",
          "60": "#FFD766",
          "40": "#FFE599",
          "20": "#FFF8E5",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "6.375rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
