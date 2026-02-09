<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})
</script>

<template>
  <div>
    <UMain>
      <UContainer>
        <UPage>
          <UError
            redirect="/"
            :error="error"
            :clear="{
              color: 'neutral',
              variant: 'outline',
              size: 'sm',
              class: ''
            }"
          />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>
