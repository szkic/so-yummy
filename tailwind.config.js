/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {
      colors: {
        "primary-text-color": "#FAFAFA",
        "primary-color": "#8BAA36",
        "light-primary-color": "#EBF3D4",
        "secondary-color": "#22252A",
        "secondary-dark-color": "#1E1F28",
        "secondary-light-color": "#2A2C36",
        "secondary-text-color": "#7E7E7E",
        "light-border-color": "#707070",
        "inactive-color": "#D9D9D9",
        "inactive-text": "#BDBDBD",
        "inactive-text-light": "#E0E0E0",
        "input-primary": "#FFFFFF",
        "input-error": "#E74A3B",
        "input-correct": "#3CBC81",
        "input-warning": "#F6C23E",
      },
      screens: {
        tablet: "768px",
        desktop: "1440px",
        md: "768px",
        "2xl": "1440px",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  darkMode: "class",
});
