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
        // Base colors
        black: "#0F0F0F",
        white: "#FAFAFA",
        gray: "#A1A1A1",

        // Primary colors
        "light-blue-text": "#71BFFF",
        blue: "#256BED",
        "blue-end": "#004B9E",
        "black-start": "#1A1A1A",
        "black-end": "#000710",

        // Secondary colors
        green: "#0B806A",
        "light-green": "#D7FBE6",
        red: "#B00B0B",
        "light-red": "#FBD7D7",

        //other
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
      gradientColorStops: () => ({
        "gradient-blue-start": "#256BED",
        "gradient-blue-end": "#004B9E",

        "gradient-black-start": "#1A1A1A",
        "gradient-black-end": "#000710",
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
