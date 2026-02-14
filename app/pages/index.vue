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

const principles = [
  { id: 1,
    title: 'Mentalism',
    slug: 'mentalism'
    // subTitle: 'All is mind.',
    // desc: 'All is mind; the universe is mental. Thoughts lead to the manifestation of all things and events in creation. Thoughts create our state of existence and the quality of our experience here on Earth. Therefore, be responsible for everything you create, by being responsible for everything you think.'
  },
  { id: 2,
    title: 'Correspondence',
    slug: 'correspondence'
    // subTitle: 'As above, so below.',
    // desc: 'That which is above is like to that which is below, that which is below is like to that which is above. The macrocosm (the totality) and the microcosm (the individual units of consciousness which comprise the whole) are reflections of one another. The universe is self-similar across all scales.'
  },
  { id: 3,
    title: 'Vibration',
    slug: 'vibration'
    // subTitle: 'Nothing is stationary.',
    // desc: 'Nothing rests, everything moves. At the most fundamental level, the universe and everything that comprises it, is pure vibratory energy manifesting itself in different ways. The universe has no solidity as such; the universe is holographic. Matter is merely energy in a state of vibration.'
  },
  { id: 4,
    title: 'Polarity',
    slug: 'polarity'
    // subTitle: 'Everything has its polar opposite.',
    // desc: 'Everything is dual, everything has poles. Everything has its opposite. Opposites are identical in nature, but different in degree (e.g. hot and cold are seemingly opposites, while all that cold truly is, is the absence of heat energy). At some level of reality, all things that seems contradictory may be reconciled.'
  },
  { id: 5,
    title: 'Rhythm',
    slug: 'rhythm'
    // subTitle: 'All is ebb and flow.',
    // desc: 'Everything flows; out and in, in and out. Everything has its tides. All things rise and fall. The pendulum swing manifests in everything. The measure of the swing to the right, is the measure of the swing to the left. Rhythm compensates.'
  },
  { id: 6,
    title: 'Causality',
    slug: 'causality'
    // subTitle: 'Cause and effect.',
    // desc: 'Every cause has its effect, and every effect has its cause. Everything happens according to law. Chance is but a name for law not recognized. There are many planes of causation, but nothing escapes law. There is no free will to ignore law without consequence; that is the limit of free will. This is why natural law is also sometimes referred to as consequentialism.'
  },
  { id: 7,
    title: 'Gender',
    slug: 'gender'
    // subTitle: 'Everything has its male and female properties.',
    // desc: 'Gender is in everything, everything has its masculine and feminine properties; gender manifests on all planes. While every person has a biological sex, psychologically both qualities exist simultaneously within everyone, and everything.'
  },
  { id: 8,
    title: 'Care',
    slug: 'care'
    // subTitle: 'The lost principle',
    // desc: 'Care (not compassion) is whatever you give attention to, and help to grow. The lost principle is the dynamic of care; that which you actually care enough about to do, to spend your time on, to pay attention to, and to manifest into reality. What we care about on a day-to-day basis acts as the driving force of our thoughts and actions.'
  }
]
</script>

<template>
  <div>
    <section
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
          <NuxtLink
            to="https://doctrine.thefreemavens.org/"
            target="_blank"
            class="group flex flex-col items-center"
          >
            <UIcon
              name="i-local-lex"
              class="size-11 mx-auto flex text-neutral-300 mt-8"
            />
            <span
              class="text-xs md:text-sm mt-2 text-neutral-500 text-shadow-sm/40
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
            text-lg md:text-2xl
            max-w-52 md:max-w-60
            text-neutral-200
            tracking-tight
            leading-6
          "
              :style="{ opacity }"
            >
              Open <span class="text-neutral-200">Doctrine</span>
            </h1>

            <!-- CTA -->
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
                    class="size-3.5 hover:text-primary"
                  />
                </UMarquee>
              </div>
            </div>
            <div
              class="font-sans text-xs pt-4 px-4 pb-2 transition-all duration-1500 text-center max-w-48 text-neutral-500 text-shadow-sm/30
            text-shadow-black"
            >
              Your Master Key to Sovereignty
            </div>
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
    <!-- Footer -->
    <footer
      class="absolute bottom-0 flex w-full justify-center items-center gap-1 text-xs leading-4 mb-3 text-neutral-500"
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
    </footer>
  </div>
</template>
