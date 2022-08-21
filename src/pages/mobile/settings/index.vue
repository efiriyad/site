<script lang="ts">
import { kBlockTitle, kList, kListInput, kListItem } from "konsta/vue";
import { TranslateIcon, MoonIcon, SunIcon, UserIcon, AcademicCapIcon } from "@heroicons/vue/outline";

import { useLocaleStore } from "~/stores/client/locale";

export default {
  components: {
    MoonIcon,
    SunIcon,
    UserIcon,
    TranslateIcon,
    AcademicCapIcon,
    kBlockTitle,
    kList,
    kListInput,
    kListItem,
  },
};
</script>

<script setup lang="ts">
definePageMeta({ layout: "mobile" });
useHead({ title: "Settings" });

// User account and settings.
const locale = useLocaleStore();
const colorMode = useColorMode();

// Page main element used to hide the settings until the options has been loaded.
const settingsEl = ref(null);

// General select refs.
const themeSelect = ref(null);
const localeSelect = ref(null);

onMounted(() => {
  // Load current user settings into the forms.
  localeSelect.value.inputElRef.value = locale.lang;
  themeSelect.value.inputElRef.value = colorMode.preference;

  // When the settings are loaded, show the settings.
  settingsEl.value.style.display = "block";
});
</script>

<template>
  <div ref="settingsEl" class="hidden">
    <k-block-title>{{ $t("settings.general") }}</k-block-title>
    <k-list inset :hairlines="true">
      <NuxtLink to="/mobile/settings/profile">
        <k-list-item link-component="div" title="Profile" link>
          <template #media>
            <UserIcon class="h-5 w-5" />
          </template>
        </k-list-item>
      </NuxtLink>
      <NuxtLink to="/mobile/settings/classes">
        <k-list-item link-component="div" title="Classes" class="hairline-transparent" link>
          <template #media>
            <AcademicCapIcon class="h-5 w-5" />
          </template>
        </k-list-item>
      </NuxtLink>
    </k-list>

    <k-block-title>{{ $t("settings.appearance") }}</k-block-title>
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
        <option value="system">{{ $t("theme.system") }}</option>
        <option value="light">{{ $t("theme.light") }}</option>
        <option value="dark">{{ $t("theme.dark") }}</option>
      </k-list-input>
    </k-list>
  </div>
</template>
