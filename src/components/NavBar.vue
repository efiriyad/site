<script setup lang="ts">
import { MenuIcon } from "@heroicons/vue/outline";

const config = useRuntimeConfig();
const github = config.public.github;

const navigation = [
  { name: "Documentation", href: "#", current: true },
  { name: "Resources", href: "#", current: false },
];
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white/75 shadow-md backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
      <div class="flex items-center gap-4">
        <img alt="Logo" src="/images/logo.png" height="48" width="29" />
        <div v-for="nav in navigation" :key="nav" class="hidden sm:block">
          <NuxtLink :to="nav.href">
            <div class="hover:text-primary">{{ nav.name }}</div>
          </NuxtLink>
        </div>
        <!--To do: Add navigation menu on button click-->
        <div class="block w-6 sm:hidden">
          <MenuIcon />
        </div>
      </div>
      <a :href="`https://github.com/${github.owner}/${github.repo}`">
        <div class="flex items-center gap-2 font-semibold hover:text-primary">
          <div>{{ github.release }}</div>
          <div class="h-6 w-6">
            <IconGithub></IconGithub>
          </div>
        </div>
      </a>
    </div>
  </nav>
</template>
