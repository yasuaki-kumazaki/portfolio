import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        helvetica_neue: "Helvetica Neue",
        minionPro: "Minion Pro",
      },
      width: {
        '2/10': '20%',
        '3/10': '30%',
        '7/10': '70%',
        '8/10': '80%',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
