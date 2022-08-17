<template>
  <section class="mx-auto my-24 max-w-8xl px-4 sm:px-6 md:my-32 lg:px-8 xl:px-10">
    <h2 class="mb-8 text-center text-4xl font-bold text-primary sm:text-5xl">
      <slot name="title" />
    </h2>
    <p class="mx-auto mb-8 max-w-screen-lg text-center text-lg font-medium sm:text-xl md:text-2xl md:leading-relaxed">
      <slot name="description" />
    </p>
    <div class="flex flex-wrap content-center items-center justify-center">
      <slot name="content" />
    </div>
  </section>
</template>
