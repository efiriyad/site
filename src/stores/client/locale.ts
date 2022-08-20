// When the user updates the locale, the store is updated and persisted to localStorage.
// Using a localeMixin, i18n updates instantly in every page.
import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", {
  state: () => {
    return {
      lang: "en",
    };
  },

  actions: {
    updateLang(lang) {
      this.lang = lang;
    },
  },

  persist: true,
});
