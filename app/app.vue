<script setup lang="ts">
const appConfig = useAppConfig()
// const colorMode = useColorMode()

// const color = computed(() => colorMode.value === 'dark' ? '#0D0C15' : 'white')

useHead({
  title: appConfig.title,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    // { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth dark'
  }
  // bodyAttrs: {
  // }
})

useSeoMeta({
  // titleTemplate: '%s - The Free Mavens',
  titleTemplate: '%s',
  ogImage: '/og-image.webp',
  ogUrl: appConfig.url.home,
  twitterImage: '/og-image.webp',
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.url.home,
  twitterCreator: '@thefreemavens',
  title: appConfig.title,
  description: appConfig.description,
  ogTitle: appConfig.title,
  ogDescription: appConfig.description,
  twitterTitle: appConfig.title,
  twitterDescription: appConfig.description
  // ogType: 'website'
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="#fbfaff" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.666s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.666rem);
}
</style>
