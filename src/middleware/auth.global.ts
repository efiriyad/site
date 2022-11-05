import { useAccountStore } from "~/stores/account";

export default defineNuxtRouteMiddleware((to) => {
  const account = useAccountStore();

  if (!account.token) {
    if (to.path.startsWith("/mobile/") || to.path.startsWith("/fr/mobile/")) {
      return navigateTo("/mobile");
    }
  }
});
