import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'max-640': {'max': '640px'},
        'max-768': {'max': '768px'},
        'max-920': {'max': '920px'},
        'max-1024': {'max': '1024px'},
      },
    },
  },
  plugins: [],
};
export default config;