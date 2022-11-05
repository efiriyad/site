<!--suppress JSValidateTypes, JSUnusedGlobalSymbols -->
<script lang="ts">
import { kTabbar, kTabbarLink, kIcon } from "konsta/vue";
import { AdjustmentsHorizontalIcon, BeakerIcon, HomeIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    kTabbar,
    kTabbarLink,
    kIcon,
    AdjustmentsHorizontalIcon,
    BeakerIcon,
    HomeIcon,
  },
  methods: {
    isActive(href) {
      const route = this.$route.path.replace("/fr", "");
      return route.startsWith(href);
    },
  },
};
</script>

<script setup lang="ts">
const tabs = [
  {
    icon: BeakerIcon,
    label: "tabbar.features",
    href: "/mobile/features",
  },
  {
    icon: HomeIcon,
    label: "tabbar.home",
    href: "/mobile/home",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    label: "tabbar.settings",
    href: "/mobile/settings",
  },
];

defineProps({
  notification: {
    type: String,
    default: "",
  },
  href: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <k-tabbar v-if="href" :labels="true">
    <NuxtLink
      v-for="tab in tabs"
      :key="tab"
      :to="tab.href"
      class="relative inline-flex h-full w-full cursor-pointer select-none items-center justify-center space-x-1"
    >
      <k-tabbar-link component="div" :active="isActive(tab.href)" :label="$t(tab.label)">
        <template #icon>
          <k-icon
            v-if="tab.href === '/mobile/home' && notification"
            :badge="notification"
            :badge-colors="{ bg: 'bg-secondary dark:bg-secondary-dark mt-0.5' }"
          >
            <component :is="tab.icon" class="h-6 w-6" :aria-label="tab.label" />
          </k-icon>
          <k-icon v-else>
            <component :is="tab.icon" class="h-6 w-6" :aria-label="tab.label" />
          </k-icon>
        </template>
      </k-tabbar-link>
    </NuxtLink>
  </k-tabbar>
  <div
    v-else
    class="relative flex h-full h-12.5 w-full w-full items-center justify-between overflow-hidden bg-bars-ios-light hairline-t pr-2-safe pl-2-safe translucent dark:bg-bars-ios-dark"
  >
    <div
      v-for="tab in tabs"
      :key="tab"
      class="relative inline-flex h-full w-full cursor-pointer select-none items-center justify-center space-x-1"
    >
      <k-tabbar-link component="div" :active="tab.label === 'tabbar.home'" :label="$t(tab.label)">
        <template #icon>
          <k-icon
            v-if="tab.href === '/mobile/home' && notification"
            :badge="notification"
            :badge-colors="{ bg: 'bg-secondary dark:bg-secondary-dark mt-0.5' }"
          >
            <component :is="tab.icon" class="h-6 w-6" :aria-label="tab.label" />
          </k-icon>
          <k-icon v-else>
            <component :is="tab.icon" class="h-6 w-6" :aria-label="tab.label" />
          </k-icon>
        </template>
      </k-tabbar-link>
    </div>
  </div>
</template>
