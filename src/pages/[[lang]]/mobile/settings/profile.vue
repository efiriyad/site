<!--suppress JSUnusedGlobalSymbols, JSUndeclaredVariable, JSValidateTypes -->
<script lang="ts">
import { kBlock, kBlockTitle, kButton, kList, kListInput, kPreloader } from "konsta/vue";
import { useAccountStore } from "~/stores/account";

export default {
  components: {
    kBlock,
    kBlockTitle,
    kButton,
    kList,
    kListInput,
    kPreloader,
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
useHead({ title: "Profile" });

// Fetch the profile picture.
const account = useAccountStore();
const data = await account.fetchData();

// Used to temporarily store the user's input.
const select = reactive({
  name: data.profile.name,
  picture: null,
  pictureUrl: data.profile.picture,
});

const onSave = async () => {
  data.profile.name = resolveUnref(select.name);

  if (select.pictureUrl !== data.profile.picture) {
    pending.value = true;

    const formData = new FormData();
    formData.append("file", select.picture);

    // Set the data picture to the public generated url.
    const picture = await account.uploadImage(formData);

    select.pictureUrl = picture.url;
    data.profile.picture = picture.url;
  }

  await account.updateData(data);
  pending.value = false;
};

const onClear = () => {
  select.name = data.profile.name;
  select.pictureUrl = data.profile.picture;
};

const { files, open: openFileDialog } = useFileDialog({ multiple: false, accept: "image/*" });
const pending = ref(false);

// Update select with file.
watch(files, () => {
  select.picture = files.value[0];
  select.pictureUrl = useObjectUrl(files.value[0]).value;
});
</script>

<template>
  <div>
    <k-block-title>{{ $t("settings.profile") }}</k-block-title>
    <k-list inset>
      <k-list-input
        type="text"
        :placeholder="$t('settings.name')"
        :value="select.name"
        @input="(e) => (select.name = e.target.value)"
      >
        <template #media>
          <div class="mr-2 h-7 w-7 overflow-hidden rounded-full">
            <button @click="openFileDialog">
              <img height="28" width="28" :src="select.pictureUrl" alt="Profile" />
            </button>
          </div>
        </template>
      </k-list-input>
    </k-list>

    <k-block
      v-if="select.name !== data.profile.name || select.pictureUrl !== data.profile.picture"
      class="-mt-4 flex flex-row items-center gap-4"
    >
      <k-button class="h-8 w-auto px-3" @click="onSave">
        {{ $t("settings.save") }}
      </k-button>
      <k-button
        :colors="{ bg: 'bg-secondary', activeBgDark: 'active:bg-secondary-dark' }"
        class="h-8 w-auto px-3"
        @click="onClear"
      >
        {{ $t("settings.clear") }}
      </k-button>
      <k-preloader v-if="pending" style="width: 1.5rem; height: 1.5rem" />
    </k-block>
  </div>
</template>
