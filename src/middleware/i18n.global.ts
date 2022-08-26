import { useLocaleStore } from "~/stores/client/locale";

export default defineNuxtRouteMiddleware((to) => {
  const locale = useLocaleStore();

  if (to.params.lang && to.params.lang !== "fr" && to.params.lang !== "en") {
    return abortNavigation("Page not found");
  }

  // Redirect en lang.
  if (to.params.lang === "en") {
    const path = to.path.replace("/en", "");
    return navigateTo(path);
  }

  if (locale.lang === "fr") {
    if (!to.params.lang) {
      const path = "/fr" + to.path;
      return navigateTo(path);
    }
  }
});
