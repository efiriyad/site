<!--suppress JSValidateTypes, JSUnusedGlobalSymbols -->
<script lang="ts">
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { kNavbar } from "konsta/vue";
import { useAccountStore } from "~/stores/account";

export default {
  components: {
    ChevronLeftIcon,
    kNavbar,
  },
  data() {
    return {
      locale: useAccountStore(),
    };
  },
};
</script>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const parseRoute = (route: string) => {
  const parts = route.split("/").slice(-2);

  if (parts[0] === "mobile") {
    return ["efiriyad", parts[1]];
  }

  return [parts[0], parts[1]];
};

// Update the title and subtitle.
const [newTitle, newSubtitle] = parseRoute(route.path);

const title = ref(newTitle);
const subtitle = ref(newSubtitle);

const gotoParentRoute = () => {
  const child = route.path.split("/").slice(-1)[0];
  const newUrl = route.path.replace(`/${child}`, "");

  router.push(newUrl);
};

watch(route, (newRoute) => {
  const [newTitle, newSubtitle] = parseRoute(newRoute.path);

  title.value = newTitle;
  subtitle.value = newSubtitle;
});

// Fetch account profile picture.
const account = useAccountStore();
const data = await account.fetchData();
</script>

<template>
  <k-navbar :title="title ? $t(`tabbar.${title}`) : 'efiriyad'" :subtitle="subtitle ? $t(`tabbar.${subtitle}`) : ''">
    <template #right>
      <NuxtLink to="/mobile/settings/profile" class="mr-2 h-7 w-7 overflow-hidden rounded-full">
        <img v-if="data" :src="data.profile.picture" alt="Profile" height="28" width="28" />
      </NuxtLink>
    </template>
    <template v-if="title !== 'efiriyad'" #left>
      <button class="ml-1 flex text-sm font-bold text-primary" @click="gotoParentRoute()">
        <ChevronLeftIcon class="h-5 w-5" />
        <span>Back</span>
      </button>
    </template>
    <template v-else #left>
      <a class="ml-2">
        <p class="flex items-end font-black">
          <span class="text-xl text-primary">1</span>
          <span class="text-sm text-secondary">A</span>
        </p>
      </a>
    </template>
  </k-navbar>
</template>
