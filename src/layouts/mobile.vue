<script lang="ts">
import { kApp } from "konsta/vue";

export default {
  components: {
    kApp,
  },
};
</script>

<template>
  <k-app theme="ios">
    <slot />
  </k-app>
</template>
