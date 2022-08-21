import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  build: { transpile: ["konsta", "@heroicons/vue"] },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  modules: [
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@intlify/nuxt3",
  ],

  image: {
    dir: "public/images",
    provider: process.env.NODE_ENV === "production" ? "cloudimage" : "ipx",
    cloudimage: {
      cdnURL: "https://ayarjnqkqr.cloudimg.io/",
      baseURL: "_images",
    },
  },

  colorMode: { classSuffix: "", storageKey: "theme" },
  tailwindcss: { cssPath: "~/assets/css/main.scss" },

  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
    },
  },

  pwa: {
    icon: {
      fileName: "android-chrome-512x512.png",
    },
    manifest: {
      name: "Efiriyad",
      start_url: "/mobile/",
      background_color: "#ff0000",
    },
    workbox: { enabled: true },
  },

  runtimeConfig: {
    public: {
      github: {
        owner: "efiriyad",
        repo: "site",
        release: {
          tag: "v0.1.1",
          date: "August 5, 2022",
        },
      },
    },
  },
});
