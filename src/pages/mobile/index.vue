<script lang="ts">
import { kPage } from "konsta/vue";

export default {
  components: {
    kPage,
  },
};
</script>

<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});

useHead({
  title: "Mobile",
});
</script>

<template>
  <k-page>
    <Home />
  </k-page>
</template>
