// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  build: { transpile: ["@heroicons/vue", "konsta"] },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  modules: ["@intlify/nuxt3", "@nuxt/image-edge", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "Efiriyad app",
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#2563eb" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap",
        },
      ],
      meta: [
        { name: "description", content: "A revolutionary school tracking app for Efiriyad students." },
        { name: "msapplication-TileColor", content: "#2563eb" },
        { name: "theme-color", content: "#f7f7f8" },
      ],
      script: [{ children: "if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js') }" }],
    },
  },

  colorMode: { classSuffix: "", storageKey: "theme" },
  css: ["~/assets/css/main.scss"],

  image: {
    dir: "public/images",
    provider: process.env.NODE_ENV === "production" ? "imgix" : "ipx",

    // Using imgix settings for our custom cdn.
    imgix: {
      baseURL: "https://cdn.efiriyad.tech/images",
    },
  },

  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
    },
  },

  runtimeConfig: {
    public: {
      // Required config.
      apiBase: "https://api.efiriyad.tech/v1",
      firebase: {
        config: {
          apiKey: "AIzaSyASQrwJjpT0zHkwzu33sU7FBCA5y81b2Y4",
          authDomain: "efiriyad.firebaseapp.com",
          projectId: "efiriyad",
          storageBucket: "efiriyad.appspot.com",
          messagingSenderId: "799528008421",
          appId: "1:799528008421:web:385b7dab9e9b502f97f20c",
          measurementId: "G-8SH5VPT952",
        },
        vapidKey: "BNIF-8UEQVZ1kCJhoC-GCvL3917D-21OC9J59VA-PYbAxjTS24D8On9tvTMSbkMpkqqNI1lTA7iZ96ml45ncWX0",
      },

      // Less important config.
      github: {
        owner: "efiriyad",
        repo: "site",
        release: {
          tag: "v0.1.1",
          date: { en: "August 5, 2022", fr: "5 Août, 2022" },
        },
      },

      discord: {
        invite: "https://discord.gg/ym4TVdvUw4",
        widget: "https://discord.com/widget?id=1038068762487836752&theme=dark",
      },

      twitter: "https://twitter.com/menai_rami",
    },
  },
});
