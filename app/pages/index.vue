<script setup lang="ts">
const appConfig = useAppConfig()
// definePageMeta({
//   layout: 'screen'
// })

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(300 - distance.value / 3, 150))

const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.2), 1))

const logo = ref<HTMLElement>()
const logoGradient = computed(() => {
  const rect = logo.value?.getBoundingClientRect()
  const xPos = x.value - (rect?.left ?? 0)
  const yPos = y.value - (rect?.top ?? 0)

  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 20%, transparent 100%)`
})
</script>

<template>
  <div
    class="w-screen min-h-svh flex items-center justify-center relative overflow-hidden bg-[url('@/assets/svg/bg-noise.svg')]"
  >
    <div
      class="absolute bg-primary-300/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }"
    />

    <div
      ref="logo"
      :style="{
        maskImage: logoGradient
      }"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="
            flex
            justify-center
            items-center
            aspect-square
            size-48 md:size-64
            rounded-4xl md:rounded-[4rem]
            bg-linear-to-b from-neutral-600 to-transparent
            p-px
          "
        >
          <span
            class="
              flex
              justify-center
              items-center
              mx-auto
              size-full
              drop-shadow-xl
              drop-shadow-black/40
              rounded-[calc(2rem-1px)] md:rounded-[calc(4rem-1px)]
              bg-linear-to-b from-neutral-800 to-neutral-950
            "
          >
            <UIcon
              name="i-local-tfm"
              class="size-4/7"
            />
          </span>
        </div>

        <!-- TITLE -->
        <h1
          class="
            mt-8 md:mt-10
            font-sans
            text-center
            text-shadow-lg/20
            text-shadow-black
            text-lg md:text-xl
            max-w-52 md:max-w-60
            text-neutral-300
            tracking-tight
            leading-6
          "
          :style="{ opacity }"
        >
          Discover your true power and learn how to use it
        </h1>

        <!-- CTA -->
        <AppPrinciples />
      </div>
    </div>

    <!-- Footer -->
    <div
      class="absolute bottom-0 text-center text-xs leading-4 mb-3 text-neutral-500"
      :style="{ opacity }"
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
    </div>
  </div>
</template>
