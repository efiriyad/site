<script setup lang="ts">
useHead({
  title: "Error - 404",
});
</script>

<template>
  <main class="flex h-screen flex-col items-center justify-center gap-4">
    <section class="flex flex-col items-center justify-center gap-2">
      <span class="text-4xl">404</span>
      <div class="h-0.5 w-28 bg-gray-100"></div>
      <p class="text-lg">The requested path could not be found</p>
    </section>
    <NuxtLink to="/" class="text-lg">
      <button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">Go to home</button>
    </NuxtLink>
  </main>
</template>
