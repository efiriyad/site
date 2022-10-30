<script lang="ts">
import { kApp, kNavbar, kPage } from "konsta/vue";

export default {
  components: {
    kApp,
    kNavbar,
    kPage,
  },
};
</script>

<template>
  <k-app theme="ios" :dark="false">
    <k-page>
      <k-navbar title="Efiriyad PWA" />
    </k-page>
  </k-app>
</template>
