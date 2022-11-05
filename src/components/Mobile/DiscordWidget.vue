<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <NuxtLink class="group h-full w-full" :to="config.public.discord.invite" target="_blank">
    <div
      class="relative z-20 h-18 w-full overflow-hidden rounded-md text-[14px]"
      style="font-family: ABC Ginto Normal, Helvetica Neue, Helvetica, Arial, sans-serif"
    >
      <div class="flex shrink-0 items-center bg-[#5865F2] p-5 text-white">
        <nuxt-img src="/logos/discord.svg" alt="Discord logo" height="34" width="124" />
        <span class="flex-1 text-right"><strong>Efiriyad app</strong></span>
      </div>
    </div>
    <iframe
      :src="config.public.discord.widget"
      allowtransparency="true"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      class="relative -mt-18 h-18 w-full transition-all duration-400 group-hover:h-full"
    />
  </NuxtLink>
</template>
