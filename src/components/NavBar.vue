<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DeviceMobileIcon, MenuIcon, SupportIcon } from "@heroicons/vue/outline";

const config = useRuntimeConfig();
const github = config.public.github;

const navigation = [
  { name: "Demo", icon: DeviceMobileIcon, href: "/mobile", current: true },
  { name: "Support", icon: SupportIcon, href: "#", current: false },
];
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b-[0.5px] bg-white/75 shadow-sm backdrop-blur-md backdrop-saturate-200">
    <div class="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
      <div class="flex items-center gap-4">
        <img alt="Logo" src="/images/logo.png" height="48" width="29" />
        <div class="hidden gap-4 sm:flex">
          <div v-for="nav in navigation" :key="nav" class="hover:text-primary">
            <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
          </div>
        </div>
        <Menu as="div" class="relative block sm:hidden">
          <div class="h-6 w-6">
            <MenuButton class="h-full w-full">
              <MenuIcon />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute mt-2 w-48 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div v-for="nav in navigation" :key="nav" class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <NuxtLink
                    :to="nav.href"
                    class="flex w-full items-center rounded-md px-2 py-2 text-sm"
                    :class="active ? 'bg-primary text-white' : 'text-gray-900'"
                  >
                    <component :is="nav.icon" class="mr-2 h-5 w-5" aria-hidden="true" />
                    {{ nav.name }}
                  </NuxtLink>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <a target="_blank" :href="`https://github.com/${github.owner}/${github.repo}`">
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
