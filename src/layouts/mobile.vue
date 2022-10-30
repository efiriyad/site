<script lang="ts">
import { kApp, kPage } from "konsta/vue";

export default {
  components: {
    kApp,
    kPage,
  },
};
</script>

<template>
  <NuxtLayout name="phone">
    <k-app theme="ios">
      <k-page>
        <MobileNavBar />
        <slot />
        <div>
          <MobileTabBar class="fixed bottom-0 max-w-md" />
        </div>
      </k-page>
    </k-app>
  </NuxtLayout>
</template>
