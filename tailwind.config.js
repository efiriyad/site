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
  theme: {
    extend: {},
  },
  plugins: [],
});
