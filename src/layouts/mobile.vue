<script lang="ts">
import { kApp } from "konsta/vue";

export default {
  components: {
    kApp,
  },
};
</script>

<script setup lang="ts">
useHead({
  titleTemplate: "%s",
  htmlAttrs: { lang: "en" },
});
</script>

<template>
  <k-app theme="ios">
    <slot />
  </k-app>
</template>
