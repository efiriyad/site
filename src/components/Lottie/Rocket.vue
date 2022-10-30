<script setup lang="ts">
import { loadLottie } from "~/composables/lottie";

const animationContainer = ref(null);

onMounted(() => {
  loadLottie(animationContainer.value, "rocket");
});
</script>

<template>
  <div ref="animationContainer"></div>
</template>
