<template>
  <NuxtLayout>
    <div class="min-h-screen bg-zinc-50">
      <div class="font-inter font-medium text-black">
        <SiteNavBar />
        <slot />
        <SiteFooter />
      </div>
    </div>
  </NuxtLayout>
</template>
