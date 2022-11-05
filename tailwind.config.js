const konstaConfig = require("konsta/config");

/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
  content: [
    "./src/components/**/*.{vue,js}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/composables/**/*.{js,ts}",
    "./src/plugins/**/*.{js,ts}",
    "./src/App.{js,ts,vue}",
    "./src/app.{js,ts,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0481d3",
          DEFAULT: "#0071bc",
          dark: "#194ea5",
        },
        secondary: {
          light: "#f62a31",
          DEFAULT: "#ed1c24",
          dark: "#b71c24",
        },
        pronote: {
          100: "#ffea00",
          200: "#9cb613",
          300: "#c0c708",
          400: "#11864f",
        },
        skolengo: {
          100: "#f0eb71",
          200: "#73c6d0",
          300: "#5996b7",
          400: "#33385e",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
});
