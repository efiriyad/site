<script lang="ts">
import { localeMixin } from "~/composables/mixins/locale";
import { themeColors } from "~/composables/constants";

export default {
  mixins: [localeMixin],
  data() {
    return {
      themeColors,
    };
  },
};
</script>

<template>
  <div class="min-h-screen bg-zinc-50">
    <Head>
      <Title>Default</Title>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
      <Meta name="msapplication-TileColor" content="#2563eb" />
      <Meta name="theme-color" :content="themeColors[$colorMode.value]" />
    </Head>

    <div class="font-inter font-medium text-black">
      <SiteNavBar />
      <main>
        <slot />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
