<script lang="ts">
import { kPage } from "konsta/vue";

export default {
  components: {
    kPage,
  },
};
</script>

<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <NuxtLayout name="mobile">
    <k-page>
      <Home />
    </k-page>
  </NuxtLayout>
</template>
