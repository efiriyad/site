<script lang="ts">
import { kNavbar } from "konsta/vue";
import { ChevronLeftIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronLeftIcon,
    kNavbar,
  },
  data() {
    return { title: "Efiriyad", subtitle: "Classes" };
  },
  watch: {
    "$route.path"(newRoute) {
      const [title, subtitle] = this.parseRoute(newRoute);

      this.title = title;
      this.subtitle = subtitle;
    },
  },
  mounted() {
    const [title, subtitle] = this.parseRoute(this.$route.path);

    this.title = title;
    this.subtitle = subtitle;
  },
  methods: {
    capitalize(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    parseRoute(route: string) {
      const parts = route.split("/").slice(-2);

      if (parts[0] === "mobile") {
        return ["Efiriyad", this.capitalize(parts[1])];
      }

      return [this.capitalize(parts[0]), this.capitalize(parts[1])];
    },
  },
};
</script>

<template>
  <k-navbar :title="title" :subtitle="subtitle" class="sticky top-0">
    <template v-if="title !== 'Efiriyad'" #left>
      <button class="ml-1 flex text-sm font-bold text-primary" @click="$router.back()">
        <ChevronLeftIcon class="h-5 w-5" />
        <span>Back</span>
      </button>
    </template>
  </k-navbar>
</template>
