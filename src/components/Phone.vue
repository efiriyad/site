<template>
  <div class="grid place-items-center">
    <div
      class="relative mx-auto h-[712px] w-[350px] overflow-hidden rounded-[60px] border-[14px] border-black bg-black shadow-xl ring ring-gray-400"
    >
      <div class="absolute inset-x-0 top-0 z-30">
        <div class="mx-auto h-6 w-40 rounded-b-3xl bg-black"></div>
      </div>
      <div class="h-full w-full">
        <slot />
      </div>
      <div class="absolute inset-x-0 bottom-1">
        <div class="mx-auto h-1 w-28 rounded bg-white"></div>
      </div>
    </div>
  </div>
</template>
