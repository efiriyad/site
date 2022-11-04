<script setup lang="ts">
import { IconDiscord, IconGithub, IconTwitter } from "#components";

const config = useRuntimeConfig();
const socialMedias = [
  { icon: IconTwitter, name: "twitter", href: config.public.twitter },
  { icon: IconDiscord, name: "discord", href: config.public.discord.invite },
  { icon: IconGithub, name: "github", href: `https://github.com/${config.public.github.owner}/` },
];
</script>

<template>
  <div class="border-t-[0.5px] border-black border-opacity-10 py-8">
    <div class="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 px-4 sm:px-8 md:flex-row">
      <div class="text-gray-500">{{ $t("home.copyright") }}</div>
      <div class="flex gap-4 text-gray-500 md:gap-6 lg:gap-8">
        <div v-for="social in socialMedias" :key="social" class="odd:hover:text-primary even:hover:text-secondary">
          <a :href="social.href" target="_blank" :aria-label="social.name">
            <component :is="social.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
