// This mixin is used to load and update the $i18n locale.
import { useLocaleStore } from "~/stores/client/locale";

export const localeMixin = {
  data() {
    return {
      locale: useLocaleStore(),
    };
  },
  watch: {
    "locale.lang": function (newLang) {
      // Change the page lang to apply the changes.
      let route = this.$route.path;

      switch (newLang) {
        case "en":
          route = route.replace("/fr", "");
          break;
        case "fr":
          if (!route.startsWith("/fr")) {
            route = "/fr" + route;
          }
          break;
      }

      return navigateTo(route);
    },
    "$route.params.lang": function (newLang) {
      this.$i18n.locale = newLang || "en";
    },
  },
  created() {
    this.$i18n.locale = this.$route.params.lang || "en";
  },
};
