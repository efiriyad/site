import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const app = initializeApp(config.public.firebase.config);
  const messaging = getMessaging(app);

  nuxtApp.provide("firebase", app);
  nuxtApp.provide("firebaseMessaging", messaging);
});
