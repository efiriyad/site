import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  build: { transpile: ["konsta", "@heroicons/vue"] },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  modules: [
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],

  colorMode: { classSuffix: "" },
  tailwindcss: { cssPath: "~/assets/css/main.scss" },

  pwa: {
    manifest: {
      name: "Efiriyad",
      short_name: "Efir",
      start_url: "/mobile/",
    },
    meta: { theme_color: "#fff" },
    workbox: { enabled: true },
  },

  runtimeConfig: {
    public: {
      github: {
        owner: "efiriyad",
        repo: "site",
        release: "v0.1.0",
      },
    },
  },
});
