<script setup lang="ts">
import { ExternalLinkIcon } from "@heroicons/vue/outline";
import { SiteSection } from "#components";

import { animate as animateLogo } from "~/composables/animations/logo";

const config = useRuntimeConfig();
const github = config.public.github;

onMounted(() => {
  animateLogo();
});

useHead({
  title: "Home",
  htmlAttrs: {
    class: "scroll-smooth",
  },
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
              <nuxt-img src="/images/logos/efiriyad/text.svg" alt="Logo text" height="72" width="72" />
            </div>
            <div class="animation-logo absolute mx-auto h-40 w-40 md:h-56 md:w-56 lg:ml-auto lg:mr-0">
              <nuxt-img src="/images/logos/efiriyad/outer.svg" alt="Logo outer" height="224" width="224" />
            </div>
          </div>
        </div>
        <div class="w-full shrink lg:text-right">
          <div class="mt-10 text-5xl font-bold leading-none text-primary sm:text-6xl">
            Efir<span class="hidden lg:inline">iyad</span> <span class="text-secondary">app</span>
          </div>
          <div class="my-8 text-3xl font-bold text-black sm:text-4xl sm:leading-snug">
            Revolutionary school tracking app for Efiriyad students
          </div>
          <div class="my-8 text-xl font-semibold text-gray-500 lg:text-2xl lg:leading-normal">
            With iOS & Android offline app support
          </div>
          <div class="my-8 flex flex-col items-center justify-center space-x-4 sm:flex-row lg:justify-end">
            <NuxtLink
              to="/mobile"
              class="flex h-12 cursor-pointer select-none items-center rounded-full bg-primary px-8 text-xl font-bold text-white duration-200 hover:bg-primary-light active:bg-primary-dark active:ring-4 active:ring-primary active:ring-opacity-50 lg:px-6 xl:px-8"
            >
              Get started
            </NuxtLink>
            <div
              class="hidden h-12 items-center rounded-xl border border-secondary bg-secondary bg-opacity-10 px-4 font-mono text-lg text-black sm:flex"
            >
              <span class="pt-1">Find support</span
              ><span
                class="ml-3 transform-gpu cursor-pointer select-none opacity-50 duration-200 hover:text-secondary hover:opacity-100"
              >
                <a href="/support" target="_blank">
                  <ExternalLinkIcon class="h-4.5 w-4.5" />
                </a>
              </span>
            </div>
          </div>
          <div class="mt-4 hidden font-light text-gray-500 sm:block">
            MIT Licensed, {{ github.release.tag }} released on {{ github.release.date }}
          </div>
          <div class="mt-1 hidden font-light text-gray-500 md:block">© 2022 Efiriyad, Inc. All rights reserved</div>
        </div>
      </div>
      <div class="ml-16 hidden lg:block">
        <Phone>
          <NuxtLayout name="demo">
            <div class="h-8 w-full bg-bars-ios-light"></div>
            <MobileDemo />
          </NuxtLayout>
        </Phone>
      </div>
    </section>
    <SiteSection>
      <template #title> All in <span class="text-secondary">one</span> place </template>
      <template #description>
        Efiriyad app comes with all the features of Pronote and Skolengo combined. You will find everything you need to
        lead a successfully school year, all in one app.
      </template>
      <template #content>
        <div class="flex items-center gap-16 sm:gap-32">
          <div class="flex flex-col items-end gap-3">
            <div class="-mr-1 h-24 w-24 md:h-32 md:w-32">
              <nuxt-img src="/images/logos/pronote.png" alt="Pronote" height="128" width="128" />
            </div>
            <FeaturesBox :right="0" class="mr-14 hidden h-[416px] w-[550px] xl:flex" />
          </div>
          <div class="flex flex-col items-start gap-3">
            <div class="h-24 w-24 md:h-32 md:w-32">
              <nuxt-img src="/images/logos/skolengo.png" alt="Pronote" height="128" width="128" />
            </div>
            <FeaturesBox class="ml-14 hidden h-[416px] w-[550px] xl:flex" />
          </div>
        </div>
      </template>
    </SiteSection>
    <SiteSection>
      <template #title> Realtime notifications </template>
      <template #description>
        Efiriyad app is built to support realtime notifications. We will notify you when a new activity appears, such as
        a new grade or a new homework.
      </template>
      <template #content>
        <div ref="notificationShowdown" class="relative mt-6 flex">
          <LottieNotifications />
        </div>
      </template>
    </SiteSection>
  </div>
</template>
