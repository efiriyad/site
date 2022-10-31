<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { kBlockTitle, kList, kListInput } from "konsta/vue";
import { useAccountStore } from "~/stores/account";

export default {
  components: {
    kBlockTitle,
    kList,
    kListInput,
  },
  data() {
    return {
      useAccountStore,
    };
  },
};
</script>

<script setup lang="ts">
definePageMeta({ layout: "mobile" });
useHead({ title: "Settings - Profile" });

// Fetch the profile picture.
const account = useAccountStore();
const data = await account.fetchData();
</script>

<template>
  <div>
    <k-block-title>{{ $t("settings.profile") }}</k-block-title>
    <k-list inset>
      <k-list-input type="text" placeholder="Your name">
        <template #media>
          <div class="mr-2 h-7 w-7 overflow-hidden rounded-full">
            <img height="28" width="28" :src="data.profile.picture" alt="Profile" />
          </div>
        </template>
      </k-list-input>
    </k-list>
  </div>
</template>
