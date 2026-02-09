<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[
      {
        label: 'Discord',
        to: '/login/1',
        color: 'neutral'
      },
      {
        label: 'Telegram',
        to: '/login/2'
      },
      {
        label: 'x',
        to: '/login/3'
      }
    ]"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      label="@"
      variant="outline"
      color="neutral"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-neutral-500/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
