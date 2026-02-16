<template>
  <header>
    <UButton
      :label="route.name === 'index' ? 'HELP' : '/'"
      variant="outline"
      color="neutral"
      size="xs"
      class="fixed top-3 right-3 z-50 font-mono --uppercase scale-90"
      :to="route.name === 'index' ? '/help' : '/'"
    />
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
