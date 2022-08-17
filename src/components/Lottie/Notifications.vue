<script setup lang="ts">
import { loadLottie } from "~/composables/lottie";

const animationContainer = ref(null);

onMounted(() => {
  loadLottie(animationContainer.value, "notifications");
});
</script>

<template>
  <div ref="animationContainer" class="-mx-24 -my-4 w-[320px] md:w-[520px]"></div>
</template>
