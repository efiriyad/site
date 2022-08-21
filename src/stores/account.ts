// This store manages the user's server settings that are required for the application to function.
// We use pinia-plugin-persistedstate to persist the store to localStorage.
import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      languages: { lva: "english_lva", lvb: "arabic_lvb" },
      options: { op1: "", op2: "" },
      specialties: { sp1: "math", sp2: "physics", sp3: "svt" },
    };
  },

  actions: {
    updateLanguages(languages) {
      this.languages.lva = languages.lva;
      this.languages.lvb = languages.lvb;
    },
    updateOptions(options) {
      this.options.op1 = options.op1;
      this.options.op2 = options.op2;
    },
    updateSpecialties(specialties) {
      this.specialties.sp1 = specialties.sp1;
      this.specialties.sp2 = specialties.sp2;
      this.specialties.sp3 = specialties.sp3;
    },
  },

  persist: true,
});
