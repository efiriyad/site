// When the user updates the locale, the store is updated and persisted to localStorage.
// Using a localeMixin, i18n updates instantly in every page.
import { defineStore } from "pinia";

// Use a wrapper in order to first load the localStorage.
export const useLocaleStore = () => {
  const localStorageStore = defineStore("locale", {
    state: () => {
      return {
        lang: "",
      };
    },

    actions: {
      updateLang(lang) {
        if (process.client) {
          localStorage.setItem("locale", lang);
        }

        this.lang = lang;
      },
    },

    persist: false,
  });

  const store = localStorageStore();

  // Load values from localStorage.
  if (process.client) {
    if (!store.lang) {
      store.lang = localStorage.getItem("locale") || "en";
    }
  }

  return store;
};
