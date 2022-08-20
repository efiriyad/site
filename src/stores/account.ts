// This store manages the user's server settings that are required for the application to function.
// We use pinia-plugin-persistedstate to persist the store to localStorage.
import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      lvb: "",
      lvc: "",
      specialities: ["math", "physics", "svt"],
    };
  },

  actions: {
    updateLanguages(lvb, lvc) {
      this.lvb = lvb;
      this.lvc = lvc;
    },
  },

  persist: true,
});
