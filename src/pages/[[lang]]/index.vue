<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { SiteSection } from "#components";

import { animate as animateLogo } from "~/composables/animations/logo";
import { animate as animateFeaturesBox } from "~/composables/animations/featuresBox";

definePageMeta({ layout: "site" });
useHead({ title: "Home" });

const config = useRuntimeConfig();
const github = config.public.github;

const featuresBox = ref(null);

onMounted(() => {
  // Animate the logo when the page is mounted.
  animateLogo();

  // Animate the features box when it appears on screen.
  const { stop } = useIntersectionObserver(
    featuresBox.value,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        animateFeaturesBox();
        stop();
      }
    },
    { threshold: 0.5 }
  );
});
</script>

<template>
  <div class="h-full w-full">
    <section
      class="mx-auto mt-8 mb-16 flex max-w-8xl flex-col items-center px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left xl:px-12"
    >
      <div class="max-w-2xl lg:pl-16">
        <div class="shrink-0">
          <div class="relative mx-auto flex h-40 w-40 items-center justify-center md:h-56 md:w-56 lg:ml-auto lg:mr-0">
            <div class="h-14 w-14 md:h-18 md:w-18">
              <nuxt-img src="/logos/efiriyad/inner.svg" alt="Logo text" height="72" width="72" />
            </div>
            <div class="animation-logo absolute mx-auto h-40 w-40 md:h-56 md:w-56 lg:ml-auto lg:mr-0">
              <nuxt-img src="/logos/efiriyad/outer.svg" alt="Logo outer" height="224" width="224" />
            </div>
          </div>
        </div>
        <div class="w-full shrink lg:text-right">
          <div class="mt-10 text-5xl font-bold leading-none text-primary sm:text-6xl">
            Efir<span class="hidden lg:inline">iyad</span> <span class="text-secondary">app</span>
          </div>
          <div class="my-8 text-3xl font-bold text-black sm:text-4xl sm:leading-snug">
            {{ $t("home.description") }}
          </div>
          <div class="my-8 text-xl font-semibold text-gray-500 lg:text-2xl lg:leading-normal">
            {{ $t("home.subtitle") }}
          </div>
          <div class="my-8 flex flex-col items-center justify-center space-x-4 sm:flex-row lg:justify-end">
            <NuxtLink
              to="/mobile/home"
              class="flex h-12 cursor-pointer select-none items-center rounded-full bg-primary px-8 text-xl font-bold text-white duration-200 hover:bg-primary-light active:bg-primary-dark active:ring-4 active:ring-primary active:ring-opacity-50 lg:px-6 xl:px-8"
            >
              {{ $t("home.button") }}
            </NuxtLink>
            <div
              class="hidden h-12 items-center rounded-xl border border-secondary bg-secondary bg-opacity-10 px-4 font-mono text-lg text-black sm:flex"
            >
              <span class="pt-1">{{ $t("home.link") }}</span
              ><span
                class="ml-3 transform-gpu cursor-pointer select-none opacity-50 duration-200 hover:text-secondary hover:opacity-100"
              >
                <a href="/support" target="_blank">
                  <ArrowTopRightOnSquareIcon class="h-4.5 w-4.5" />
                </a>
              </span>
            </div>
          </div>
          <div class="mt-4 hidden font-light text-gray-500 sm:block">
            {{ $t("home.version", { version: github.release.tag, date: github.release.date[$i18n.locale] }) }}
          </div>
          <div class="mt-1 hidden font-light text-gray-500 md:block">{{ $t("home.copyright") }}</div>
        </div>
      </div>
      <div class="ml-16 hidden lg:block">
        <Phone>
          <MobileDemo />
        </Phone>
      </div>
    </section>
    <SiteSection ref="featuresBox">
      <template #title>
        <p v-html="$t('features.title')" />
      </template>
      <template #description>{{ $t("features.description") }}</template>
      <template #content>
        <div class="flex items-center gap-16 sm:gap-32">
          <div class="flex flex-col items-end gap-3">
            <div class="-mr-1 h-24 w-24 md:h-32 md:w-32">
              <nuxt-img loading="lazy" src="/logos/pronote.png" alt="Pronote" height="128" width="128" />
            </div>
            <SiteFeaturesBox :right="0" class="mr-14 hidden h-[416px] w-[550px] xl:flex" />
          </div>
          <div class="flex flex-col items-start gap-3">
            <div class="h-24 w-24 md:h-32 md:w-32">
              <nuxt-img loading="lazy" src="/logos/skolengo.png" alt="Skolengo" height="128" width="128" />
            </div>
            <SiteFeaturesBox class="ml-14 hidden h-[416px] w-[550px] xl:flex" />
          </div>
        </div>
      </template>
    </SiteSection>
    <SiteSection>
      <template #title>{{ $t("notifications.title") }}</template>
      <template #description>{{ $t("notifications.description") }}</template>
      <template #content>
        <div class="w-[440px] sm:w-[540px] md:w-[740px]">
          <nuxt-img loading="lazy" src="/notifications.svg" width="740" />
        </div>
      </template>
    </SiteSection>
  </div>
</template>
