<script setup lang="ts">
// const appConfig = useAppConfig()
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

const principles = [
  { id: 1, title: 'Mentalism', slug: 'mentalism' },
  { id: 2, title: 'Correspondence', slug: 'correspondence' },
  { id: 3, title: 'Vibration', slug: 'vibration' },
  { id: 4, title: 'Polarity', slug: 'polarity' },
  { id: 5, title: 'Rhythm', slug: 'rhythm' },
  { id: 6, title: 'Causality', slug: 'causality' },
  { id: 7, title: 'Gender', slug: 'gender' },
  { id: 8, title: 'Care', slug: 'care' }
]
</script>

<template>
  <div
    class="w-screen h-svh flex items-center justify-center relative overflow-hidden"
  >
    <!-- <AppHeader /> -->
    <section
      class="w-screen min-h-svh flex items-center justify-center relative --overflow-hidden bg-[url('@/assets/svg/bg-noise.svg')]"
    >
      <!-- Spotlight Effect -->
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
      <!-- Logo -->
      <div
        ref="logo"
        :style="{
          maskImage: logoGradient
        }"
      >
        <div class="flex flex-col justify-center items-center">
          <div
            class="
            flex justify-center items-center
            size-48 md:size-64
            aspect-square
            rounded-4xl md:rounded-[4rem]
            bg-linear-to-b from-neutral-600 to-transparent
            p-px
          "
          >
            <span
              class="
              flex justify-center items-center
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
          <NuxtLink
            to="https://doctrine.thefreemavens.org/"
            target="_blank"
            class="group flex flex-col items-center"
          >
            <UIcon
              name="i-local-lex"
              class="size-8 mx-auto flex text-neutral-300 mt-8"
            />
            <span
              class="text-xs mt-2 text-neutral-500 text-shadow-sm/40
            text-shadow-black"
            >
              Introducing The
            </span>
            <h1
              class="
            mt-0.5
            font-sans
            font-bold
            text-center
            text-shadow-lg/40
            text-shadow-black
            text-lg md:text-xl
            max-w-52 md:max-w-60
            text-neutral-200
            tracking-tight
            leading-5 md:leading-6
          "
              :style="{ opacity }"
            >
              Open <span class="text-neutral-200">Doctrine</span>
            </h1>

            <!-- Principles -->
            <div
              class="
                mt-4
                flex
                justify-center
                items-center
                w-36
                mx-auto
                h-8
                rounded-full
                bg-linear-to-t from-neutral-700 to-transparent
                p-px
              "
            >
              <div
                class="w-full flex h-[30px] justify-center items-center rounded-[20px] bg-neutral-950 inset-shadow-sm inset-shadow-black"
              >
                <UMarquee
                  overlay
                  class="overflow-hidden mx-1"
                  :ui="{
                    root: '[--duration:28s]'
                  }"
                >
                  <UIcon
                    v-for="principle in principles"
                    :key="principle.id"
                    :name="'i-local-picon-' + principle.slug"
                    class="size-3.5"
                  />
                </UMarquee>
              </div>
            </div>

            <!-- Tagline -->
            <div
              class="font-sans text-xs pt-4 px-4 pb-2 transition-all duration-1500 text-center max-w-48 text-neutral-500 text-shadow-sm/30
            text-shadow-black"
            >
              Your Master Key to Sovereignty
            </div>
            <!-- Status Light -->
            <div class="flex justify-center items-center mt-3 pb-4 relative">
              <!-- UPDATED: Use txIndicatorColor computed property -->
              <UChip
                size="3xl"
                color="primary"
                class="absolute ms-1 blur-sm animate-pulse"
                standalone
                inset
              />
              <UChip
                size="md"
                color="primary"
                class="absolute ms-1 animate-pulse"
                standalone
                inset
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- <AppFooter class="absolute bottom-0" /> -->
  </div>
</template>
