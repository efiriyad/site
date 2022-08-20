<script lang="ts">
import { kTabbar, kTabbarLink, kIcon } from "konsta/vue";
import { BeakerIcon, HomeIcon, AdjustmentsIcon } from "@heroicons/vue/outline";

export default {
  components: {
    kTabbar,
    kTabbarLink,
    kIcon,
    BeakerIcon,
    HomeIcon,
    AdjustmentsIcon,
  },
};
</script>

<script setup lang="ts">
const tabs = [
  {
    icon: BeakerIcon,
    label: "Features",
    href: "/mobile/features",
  },
  {
    icon: HomeIcon,
    label: "Home",
    href: "/mobile/home",
  },
  {
    icon: AdjustmentsIcon,
    label: "Settings",
    href: "/mobile/settings",
  },
];
</script>

<template>
  <k-tabbar :labels="true" class="fixed left-0 bottom-0">
    <NuxtLink
      v-for="tab in tabs"
      :key="tab"
      :to="tab.href"
      class="relative inline-flex h-full w-full cursor-pointer select-none items-center justify-center space-x-1"
    >
      <k-tabbar-link component="div" :active="$route.path.startsWith(tab.href)" :label="tab.label">
        <template #icon>
          <k-icon>
            <component :is="tab.icon" class="h-6 w-6" :aria-label="tab.label" />
          </k-icon>
        </template>
      </k-tabbar-link>
    </NuxtLink>
  </k-tabbar>
</template>