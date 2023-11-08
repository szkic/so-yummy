/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text-color": "#FAFAFA",
        "primary-color": "#8BAA36",
        "light-primary-color": "#EBF3D4",
        "secondary-color": "#22252A",
        "secondary-dark-color": "#1E1F28",
        "secondary-light-color": "#2A2C36",
        "inactive-color": "#D9D9D9",
        "inactive-text": "#BDBDBD",
        "input-primary": "#FFFFFF",
        "input-error": "#E74A3B",
        "input-correct": "#3CBC81",
        "input-warning": "#F6C23E",
      },
      screens: {
        tablet: "768px",
        desktop: "1440px",
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
  plugins: [],
};
