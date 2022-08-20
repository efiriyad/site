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
      this.$i18n.locale = newLang;
    },
  },
  created() {
    this.$i18n.locale = this.locale.lang;
  },
};
