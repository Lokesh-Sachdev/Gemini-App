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
        green: "#a4b575",
        footerBlack: "#646464",
        copyrightBlack: "#1b1a20",
        greyText: "#a7a7a7",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        fadeInUp: "fadeInUp 1s ease-in",
        fadeInRight: "fadeInRight 1s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-gradient": "linear-gradient(60deg, #a4b575 0%, #252621 100%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
