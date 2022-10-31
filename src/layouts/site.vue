<script lang="ts">
import { localeMixin } from "~/composables/mixins/locale";
import { themeColors } from "~/composables/constants";

export default {
  mixins: [localeMixin],
  data() {
    return {
      themeColors,
    };
  },
};
</script>

<script setup lang="ts">
const { vueApp } = useNuxtApp();

const colorMode = useColorMode();
const i18n = vueApp.config.globalProperties.$i18n;

useHead({
  title: "Default",
  meta: [{ name: "theme-color", content: () => themeColors[colorMode.value] }],
  htmlAttrs: { lang: () => i18n.locale },
});
</script>

<template>
  <div class="min-h-screen bg-zinc-50">
    <div class="font-inter font-medium text-black">
      <SiteNavBar />
      <slot />
      <SiteFooter />
    </div>
  </div>
</template>
