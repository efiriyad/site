<script lang="ts">
import { kBlockTitle, kList, kListInput, kBlock, kButton } from "konsta/vue";
import { TranslateIcon, MoonIcon, SunIcon } from "@heroicons/vue/outline";
import { speChoices } from "~/composables/constants";

import { useAccountStore } from "~/stores/account";
import { useLocaleStore } from "~/stores/client/locale";

export default {
  components: {
    MoonIcon,
    SunIcon,
    TranslateIcon,
    kBlock,
    kBlockTitle,
    kButton,
    kList,
    kListInput,
  },
  data() {
    return {
      speChoices,
    };
  },
};
</script>

<script setup lang="ts">
definePageMeta({ layout: "mobile" });
useHead({ title: "Settings" });

// User account and settings.
const account = useAccountStore();
const locale = useLocaleStore();
const colorMode = useColorMode();

// Used to temporarily store the user's choices.
const select = reactive({
  lvb: account.lvb,
  lvc: account.lvc,
  specialties: account.specialities,
});

// Page main element used to hide the settings until the options has been loaded.
const settingsEl = ref(null);

// General select refs.
const themeSelect = ref(null);
const localeSelect = ref(null);

// Languages select refs.
const lvbSelect = ref(null);
const lvcSelect = ref(null);

onMounted(() => {
  // Load current user settings into the forms.
  localeSelect.value.inputElRef.value = locale.lang;
  themeSelect.value.inputElRef.value = colorMode.preference;

  lvbSelect.value.inputElRef.value = select.lvb;
  lvcSelect.value.inputElRef.value = select.lvc;

  // When the settings are loaded, show the settings.
  settingsEl.value.style.display = "block";
});
</script>

<template>
  <div ref="settingsEl" class="hidden">
    <k-block-title>General</k-block-title>
    <k-list inset :hairlines="true">
      <k-list-input ref="localeSelect" type="select" dropdown @change="(e) => locale.updateLang(e.target.value)">
        <template #media>
          <TranslateIcon class="h-5 w-5" />
        </template>
        <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">{{ $t(`locale.${lang}`) }}</option>
      </k-list-input>
      <k-list-input ref="themeSelect" type="select" dropdown @change="(e) => ($colorMode.preference = e.target.value)">
        <template #media>
          <div v-if="$colorMode.value === 'light'">
            <SunIcon class="h-5 w-5" />
          </div>
          <div v-if="$colorMode.value === 'dark'">
            <MoonIcon class="h-5 w-5" />
          </div>
        </template>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </k-list-input>
    </k-list>

    <k-block-title>Languages</k-block-title>
    <k-list inset :hairlines="true">
      <k-list-input ref="lvbSelect" label="LVB" type="select" dropdown @change="(e) => (select.lvb = e.target.value)">
        <option v-for="choice in speChoices.lvb" :key="choice" :value="choice.value">
          {{ choice.label }}
        </option>
      </k-list-input>
      <k-list-input ref="lvcSelect" label="LVC" type="select" dropdown @change="(e) => (select.lvc = e.target.value)">
        <option v-for="choice in speChoices.lvc" :key="choice" :value="choice.value">
          {{ choice.label }}
        </option>
      </k-list-input>
    </k-list>

    <k-block v-if="select.lvb !== account.lvb || select.lvc !== account.lvc" class="-mt-4 flex flex-row gap-4">
      <k-button class="h-12 w-20" @click="account.updateLanguages(select.lvb, select.lvc)">Save</k-button>
    </k-block>
  </div>
</template>
