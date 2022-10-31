<!--suppress JSUnusedGlobalSymbols -->
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
  <div class="relative mx-auto h-full min-h-screen md:max-w-md">
    <div class="absolute h-full w-full">
      <slot />
    </div>
  </div>
</template>
