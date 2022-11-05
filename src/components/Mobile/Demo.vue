<script lang="ts">
import { kApp, kNavbar, kPage } from "konsta/vue";

export default {
  components: {
    kApp,
    kNavbar,
    kPage,
  },
};
</script>

<template>
  <k-app class="min-h-max" theme="ios" :dark="false" style="min-height: 0">
    <k-page>
      <div class="flex h-full flex-col items-center justify-center">
        <k-navbar title="Efiriyad" class="h-18 first:pt-7" />
        <div class="grow"></div>
        <MobileTabBar :href="false" notification="1" class="bottom-0 mb-1 max-w-md pt-1" />
      </div>
    </k-page>
  </k-app>
</template>
