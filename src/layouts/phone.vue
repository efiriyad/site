<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { localeMixin } from "~/composables/mixins/locale";
import { themeColors } from "~/composables/constants";
import { useAccountStore } from "~/stores/account";

export default {
  mixins: [localeMixin],
  data() {
    return {
      themeColors,
      useAccountStore,
    };
  },
};
</script>

<script setup lang="ts">
const { vueApp } = useNuxtApp();

const colorMode = useColorMode();
const i18n = vueApp.config.globalProperties.$i18n;

// Prefetch account data.
const account = useAccountStore();

if (account.token) {
  await account.fetchData();
}

useHead({
  titleTemplate: "Mobile - %s",
  meta: [{ name: "theme-color", content: () => themeColors[colorMode.value] }],
  htmlAttrs: { lang: () => i18n.locale },
});
</script>

<template>
  <div class="relative mx-auto h-full min-h-screen md:max-w-md">
    <div class="absolute h-full w-full text-black">
      <slot />
    </div>
  </div>
</template>
