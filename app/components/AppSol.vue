<template>
  <svg
    width="1800"
    xmlns="http://www.w3.org/2000/svg"
    height="1800"
    viewBox="0 0 600 600"
    fill="none"
    class="--animate-pulse"
  >
    <!-- SOL: Static Blueprint -->
    <!-- v-gsap.stagger.from="{ opacity: 100, duration: 30, stagger: 0.33, repeat: -1, yoyo: true }" -->
    <!-- class="animate-[spin_60s_linear_infinite] origin-center" -->
    <g
      v-gsap.stagger.from="{ opacity: 0, duration: 10, stagger: 0, repeat: -1, yoyo: true, ease: 'linear' }"
      class="animate-[spin_240s_linear_reverse_infinite] origin-center"
    >
      <circle
        cx="300"
        cy="300"
        r="300"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="170"
        cy="225"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="170"
        cy="375"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="300"
        cy="450"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="430"
        cy="375"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="430"
        cy="225"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="300"
        cy="150"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="300"
        cy="300"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
    </g>
    <!-- SOL: Dynamic -->
    <g
      v-gsap.stagger.from="{ opacity: 0, duration: 10, stagger: 0, repeat: -1, yoyo: true, ease: 'linear' }"
      class="animate-[spin_240s_linear_infinite] origin-center"
    >
      <!--  -->
      <circle
        cx="300"
        cy="150"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="430"
        cy="225"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="430"
        cy="375"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="300"
        cy="450"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="170"
        cy="375"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="170"
        cy="225"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10"
      />
      <circle
        cx="300"
        cy="300"
        r="150"
        stroke="currentColor"
        class="text-neutral-700/10 origin-center rotate-90"
      />
      <circle
        cx="300"
        cy="300"
        r="300"
        stroke="currentColor"
        class="text-neutral-700/10 origin-center rotate-90"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
// import { gsap } from 'gsap'
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

// onBeforeMount(() => {
//   useGSAP().registerPlugin(DrawSVGPlugin)
// })

// const tl = gsap.timeline()
// tl.from('.draw-me', { duration: 2, drawSVG: 0 }, 0.1)

// // now we can control it:
// tl.pause()
// tl.play()
// tl.reverse()
// tl.seek(0.5)

// onMounted(() => {
//   DrawSVGPlugin.create({
//     smooth: 1.618,
//     effects: true
//   })
// })
</script>
