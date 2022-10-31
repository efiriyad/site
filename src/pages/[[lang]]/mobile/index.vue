<!--suppress JSUnresolvedVariable, JSUnresolvedFunction, JSValidateTypes -->
<script lang="ts">
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useAccountStore } from "~/stores/account";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Pagination,
      useAccountStore,
    };
  },
};
</script>

<script setup lang="ts">
definePageMeta({ layout: "phone" });

const account = useAccountStore();
const modules = [Pagination];
const pagination = ref({ activeIndex: 0 });

const onSwiper = (s) => {
  pagination.value = s;
};

const onFinish = () => {
  if (account.token) {
    navigateTo("/mobile/home");
  }
};

onMounted(() => {
  // Generate the client token if it doesn't exist.
  if (!account.token) {
    setTimeout(async () => {
      await account.generateToken();
      await account.fetchData();
    });
  }
});
</script>

<template>
  <div class="h-full w-full">
    <div class="flex h-[45%] flex-col items-center justify-center gap-8 px-12 pt-8">
      <div class="flex h-40 w-40 items-center justify-center">
        <div class="h-14 w-14">
          <nuxt-img src="/logos/efiriyad/text.svg" alt="Logo text" height="72" width="72" />
        </div>
        <div class="animation-logo absolute mx-auto h-40 w-40">
          <nuxt-img src="/logos/efiriyad/outer.svg" alt="Logo outer" height="224" width="224" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center font-bold">
        <div class="text-2xl">Welcome to</div>
        <div class="text-4xl">Efiriyad app</div>
      </div>
    </div>
    <div class="h-[55%] p-4">
      <swiper class="h-5/6" :modules="modules" :pagination="{ clickable: true }" :space-between="50" @swiper="onSwiper">
        <swiper-slide><div class="h-5/6 rounded-md border-4 bg-primary shadow-md" /></swiper-slide>
        <swiper-slide><div class="h-5/6 rounded-md border-4 bg-secondary shadow-md" /></swiper-slide>
        <swiper-slide><div class="h-5/6 rounded-md border-4 bg-primary shadow-md" /></swiper-slide>
      </swiper>
      <div class="flex h-1/6 w-full items-center justify-center">
        <div class="rounded-md bg-primary-light p-1.5 px-4 text-white shadow-md">
          <button v-if="pagination.activeIndex === 2" @click="onFinish">Finish</button>
          <button v-else @click="pagination.slideNext(400)">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
