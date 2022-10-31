import { createNuxtPersistedState } from "pinia-plugin-persistedstate/nuxt";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createNuxtPersistedState(useCookie, {
      cookieOptions: {
        maxAge: 10 * 365 * 24 * 60 * 60,
        sameSite: true,
      },
    })
  );
});
