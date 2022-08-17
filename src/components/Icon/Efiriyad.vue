<script setup lang="ts">
defineProps({
  part: {
    type: String,
    default: "full",
  },
});
</script>

<template>
  <nuxt-img :src="`/images/logos/efiriyad/${part}.svg`" />
</template>
