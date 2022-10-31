<!--suppress JSUnusedGlobalSymbols, JSValidateTypes, JSUnresolvedVariable -->
<script lang="ts">
import { LanguageIcon, MoonIcon, SunIcon, UserIcon, AcademicCapIcon } from "@heroicons/vue/24/outline";
import { getToken } from "firebase/messaging";
import {
  kBlockTitle,
  kList,
  kListInput,
  kListItem,
  kBlock,
  kSegmented,
  kSegmentedButton,
  kBadge,
  kToggle,
  kCard,
} from "konsta/vue";
import { useAccountStore } from "~/stores/account";
import { useLocaleStore } from "~/stores/client/locale";

export default {
  components: {
    MoonIcon,
    SunIcon,
    UserIcon,
    LanguageIcon,
    AcademicCapIcon,
    kBlockTitle,
    kList,
    kListInput,
    kListItem,
    kBlock,
    kSegmented,
    kSegmentedButton,
    kBadge,
    kToggle,
    kCard,
  },
  data() {
    return {
      getToken,
      useAccountStore,
      useLocaleStore,
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
const activeTab = ref(0);

const { $firebaseMessaging: messaging } = useNuxtApp();
const config = useRuntimeConfig();

// Fetch account data.
const accountData = await account.fetchData();

const onPushToggle = async () => {
  // Toggle and update the push notification status.
  accountData.notifications.push.enabled = !accountData.notifications.push.enabled;
  await account.updateData(accountData);

  // Get the notification token if not available.
  if (accountData.notifications.push.enabled && !accountData.notifications.push.token) {
    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        getToken(messaging, { vapidKey: config.public.firebase.vapidKey }).then(async (currentToken) => {
          if (currentToken) {
            // Update the token in the server.
            accountData.notifications.push.token = currentToken;
            await account.updateData(accountData);
          }
        });
      } else {
        // Turn the toggle off if the permission is not granted.
        accountData.notifications.push.enabled = false;
        await account.updateData(accountData);
      }
    });
  }
};
</script>

<template>
  <div>
    <ClientOnly>
      <k-block-title>{{ $t("settings.general") }}</k-block-title>
      <k-list inset>
        <NuxtLink to="/mobile/settings/profile">
          <k-list-item link-component="div" :title="$t('tabbar.profile')" link>
            <template #media>
              <UserIcon class="h-5 w-5" />
            </template>
          </k-list-item>
        </NuxtLink>
        <NuxtLink to="/mobile/settings/classes">
          <k-list-item link-component="div" :title="$t('tabbar.classes')" class="hairline-transparent" link>
            <template #media>
              <AcademicCapIcon class="h-5 w-5" />
            </template>
          </k-list-item>
        </NuxtLink>
      </k-list>

      <k-block-title>{{ $t("settings.appearance") }}</k-block-title>
      <k-list inset>
        <k-list-input type="select" dropdown @change="(e) => locale.updateLang(e.target.value)">
          <template #media><LanguageIcon class="h-5 w-5" /></template>
          <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang" :selected="lang === locale.lang">
            {{ $t(`locale.${lang}`) }}
          </option>
        </k-list-input>
        <k-list-input type="select" dropdown @change="(e) => ($colorMode.preference = e.target.value)">
          <template #media>
            <div v-if="$colorMode.value === 'light'"><SunIcon class="h-5 w-5" /></div>
            <div v-if="$colorMode.value === 'dark'"><MoonIcon class="h-5 w-5" /></div>
          </template>
          <option value="system" :selected="$colorMode.preference === 'system'">{{ $t("theme.system") }}</option>
          <option value="light" :selected="$colorMode.preference === 'light'">{{ $t("theme.light") }}</option>
          <option value="dark" :selected="$colorMode.preference === 'dark'">{{ $t("theme.dark") }}</option>
        </k-list-input>
      </k-list>

      <k-block-title>{{ $t("settings.notifications.title") }}</k-block-title>
      <k-block inset class="space-y-4 px-0">
        <k-segmented inset strong>
          <k-segmented-button strong :active="activeTab === 0" @click="activeTab = 0">
            <div>{{ $t("settings.notifications.email.title") }}</div>
          </k-segmented-button>
          <k-segmented-button strong :active="activeTab === 1" @click="activeTab = 1">
            <div>Discord</div>
          </k-segmented-button>
          <k-segmented-button strong :active="activeTab === 2" @click="activeTab = 2">
            <div class="flex space-x-1.5">
              <div>{{ $t("settings.notifications.push.title") }}</div>
              <k-badge :colors="{ bg: 'bg-secondary' }"> Beta </k-badge>
            </div>
          </k-segmented-button>
        </k-segmented>
      </k-block>
      <div class="-mt-4">
        <k-card v-if="activeTab === 0">
          {{ $t("settings.notifications.email.description") }}
        </k-card>
        <k-card v-if="activeTab === 2">
          <div>{{ $t("settings.notifications.push.description") }}</div>
          <template #footer>
            <div class="flex items-center gap-2">
              <p class="grow text-lg">{{ $t("settings.notifications.push.subtitle") }}</p>
              <k-toggle component="div" :checked="accountData.notifications.push.enabled" @click="onPushToggle" />
            </div>
          </template>
        </k-card>
      </div>
    </ClientOnly>
  </div>
</template>
