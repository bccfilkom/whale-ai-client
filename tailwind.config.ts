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
        "primary-cream": "#F4F4F4",
        "primary-dark-blue": "#022D42",
        "secondary-pale-cream": "#DADAC9",
        "secondary-pale-yellow": "#F4FFC4",
        "secondary-pale-blue": "#DADFDF",
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
