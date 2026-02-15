<template>
  <footer
    class="absolute bottom-0 flex w-full justify-center items-center gap-1 text-xs leading-4 mb-3 text-neutral-500"
  >
    The <span class="font-semibold text-xs mx-0.25">Freemavens</span> Collective <UBadge
      label="MMXXVI"
      variant="outline"
      color="neutral"
      size="sm"
      class="mx-2"
    />
    <NuxtLink
      :to="appConfig.url.discord"
      target="_blank"
      class="hover:text-neutral-50 transition-colors duration-300"
    >
      Discord
    </NuxtLink> /
    <NuxtLink
      :to="appConfig.url.telegram"
      target="_blank"
      class="hover:text-neutral-50 transition-colors duration-300"
    >
      Telegram
    </NuxtLink> /
    <NuxtLink
      :to="appConfig.url.x"
      target="_blank"
      class="hover:text-neutral-50 transition-colors duration-300"
    >
      X
    </NuxtLink>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>
