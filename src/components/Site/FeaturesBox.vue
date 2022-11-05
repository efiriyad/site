<!--suppress JSValidateTypes -->
<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const features = [[], [], [], [], []];
const colors = [
  { icon: "text-pronote-400", bg: ["bg-pronote-400", "bg-pronote-300", "bg-pronote-200", "bg-pronote-400"] },
  { icon: "text-skolengo-400", bg: ["bg-skolengo-100", "bg-skolengo-200", "bg-skolengo-300", "bg-skolengo-400"] },
];

// Tabs utilities.
const selectedTab = ref(0);
const changeTab = (index) => {
  selectedTab.value = index;
};

defineProps({
  right: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <div ref="featuresBox" class="relative flex flex-col gap-2.5">
    <div class="flex flex-col gap-2.5" :class="right ? 'items-start' : 'items-end'">
      <div class="animation-features-box-0 h-3 w-3 rounded-lg opacity-0 shadow-md" :class="colors[right]['bg'][0]" />
      <div class="animation-features-box-1 h-3 w-12 rounded-lg opacity-0 shadow-md" :class="colors[right]['bg'][1]" />
      <div class="animation-features-box-2 h-3 w-24 rounded-lg opacity-0 shadow-md" :class="colors[right]['bg'][2]" />
    </div>
    <TabGroup :selected-index="selectedTab" @change="changeTab">
      <div
        class="animation-features-box-3 h-[350px] w-[550px] overflow-hidden rounded-lg border-[1px] opacity-0 shadow-lg"
      >
        <TabPanels class="flex h-[300px] items-center justify-center bg-opacity-50" :class="colors[right]['bg'][3]">
          <TabPanel v-for="feature in features" :key="feature" />
        </TabPanels>
        <TabList class="flex h-[50px] items-center justify-center gap-4 bg-opacity-60" :class="colors[right]['bg'][3]">
          <button
            class="h-8 w-8 disabled:opacity-35"
            :disabled="selectedTab === 0"
            @click="selectedTab > 0 ? selectedTab-- : 0"
          >
            <ChevronLeftIcon :class="colors[right]['icon']" />
          </button>
          <div class="flex items-center justify-center gap-4">
            <Tab v-for="feature in features" :key="feature" v-slot="{ selected }" as="template">
              <button
                class="delay-50 h-3 w-3 rounded-full outline-0 transition-all duration-150"
                :class="selected ? colors[right]['bg'][3] + ' opacity-100' : colors[right]['bg'][3] + ' opacity-45'"
              />
            </Tab>
          </div>
          <button
            class="h-8 w-8 disabled:opacity-35"
            :disabled="selectedTab === features.length - 1"
            @click="selectedTab < features.length - 1 ? selectedTab++ : 0"
          >
            <ChevronRightIcon :class="colors[right]['icon']" />
          </button>
        </TabList>
      </div>
    </TabGroup>
  </div>
</template>
