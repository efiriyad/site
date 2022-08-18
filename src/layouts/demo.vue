<script lang="ts">
import { kApp, kPage } from "konsta/vue";

export default {
  components: {
    kApp,
    kPage,
  },
};
</script>

<template>
  <k-app theme="ios" :dark="false">
    <k-page>
      <slot />
    </k-page>
  </k-app>
</template>
