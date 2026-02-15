<template>
  <header>
    <UButton
      :label="route.name === 'index' ? 'faq' : '/'"
      variant="outline"
      color="neutral"
      size="xs"
      class="fixed top-4 right-6 z-50 font-mono --uppercase scale-90"
      :to="route.name === 'index' ? '/faq' : '/'"
    />
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
