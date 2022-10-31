// This store manages the user's server settings that are required for the application to function.
// We use pinia-plugin-persistedstate to persist the store to localStorage.
// noinspection JSUnusedGlobalSymbols

import { defineStore, StateTree } from "pinia";

export const useAccountStore = defineStore("token", {
  state: () => {
    return {
      token: "",
    };
  },

  actions: {
    async generateToken() {
      const { data: client } = await useServerFetch("/client", {
        key: "client-token",
        method: "POST",
      });

      // @ts-ignore
      this.token = client.value.token;
    },

    async fetchData() {
      const { data: client } = await useServerFetch("/client", {
        key: "client-data",
        method: "GET",
        params: { token: this.token },
      });

      return client.value;
    },

    async updateData(body) {
      await useServerFetch("/client", {
        method: "PUT",
        params: { token: this.token },
        initialCache: false,
        body,
      });
    },
  },

  persist: {
    serializer: {
      serialize: (value: StateTree) => value.token,
      deserialize: (value: string) => {
        const account = useAccountStore();
        account.token = value;

        return account.$state;
      },
    },
  },
});

// languages: { lva: "english_lva", lvb: "arabic_lvb" },
// options: { op1: "", op2: "" },
// specialties: { sp1: "math", sp2: "physics", sp3: "svt" },
