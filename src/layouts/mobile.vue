<script lang="ts">
import { kApp, kPage } from "konsta/vue";
import { localeMixin } from "~/composables/mixins/locale";

export default {
  components: {
    kApp,
    kPage,
  },
  mixins: [localeMixin],
};
</script>

<template>
  <k-app theme="ios">
    <Head>
      <Title>Mobile</Title>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
      <Meta name="msapplication-TileColor" content="#2563eb" />
      <Meta name="theme-color" content="#ffffff" />
    </Head>

    <k-page>
      <MobileNavBar />
      <slot />
      <MobileTabBar />
    </k-page>
  </k-app>
</template>
