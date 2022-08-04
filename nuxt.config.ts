import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  build: { transpile: ["konsta"] },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  modules: [
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],

  colorMode: { classSuffix: "" },
  tailwindcss: { cssPath: "~/assets/css/main.scss" },

  ssr: false,
  target: "static",

  pwa: {
    workbox: {
      enabled: true,
    },
  },
});
