<script setup lang="ts">
// const appConfig = useAppConfig()
// definePageMeta({
//   layout: 'screen'
// })
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'What is Freemavenry?',
    content: 'Freemavenry is a voluntary, non-religious, non-political, fraternal and benevolent collective of creators, not workers. Our roots lie in the search for eternal truth and the spread of knowledge across metaphysics, occultism, spirituality, symbology and human consciousness.'
  },
  {
    label: 'What is our mission?',
    content: 'The Free Mavens promotes the great body of knowledge of Natural Law. We do this so that people across the world can gain a deeper understanding of the causal factors behind the real issues we face today. This understanding feeds a desire to help—and to create a reality based in truth, morality, love and freedom. Not lies, not immorality, not fear, not slavery.'
  },
  {
    label: 'What does "Freemaven" mean?',
    content: 'The word Free means not under the control or in the power of another. To be able to act or be done as one wishes. The word **Maven** derives from the Yiddish *Meyvn*, meaning "one who understands." A Maven knows the ins and outs of a topic. They are the people we turn to as experts in a field. You do not become a Maven overnight. That kind of expertise and understanding comes from an accumulation of knowledge over years of dedicated study and practice. To be a Maven is to know. To be Free is to act on that knowledge without coercion. To be a Free Maven is to integrate both, and to help others do the same.'
  },
  {
    label: 'What are the Freemavens core values?',
    content: '(1) Care. The selfless kind. Every member shows tolerance and respect for others, behaving with kindness and understanding toward fellow beings. Care is the generative principle, the conscious investment of attention and time in what matters. (2) Charity. Freemavens are taught to practice charity—to care not only for their own members but for the community as a whole, through charitable giving, voluntary effort and deliberate action. (3) Courage. The will to act on truth even when it is unpopular, uncomfortable or opposed. Courage is the bridge between knowledge and sovereignty—the force that transforms understanding into lived reality.'
  },
  {
    label: '____________',
    content: '____________'
  },
  {
    label: '____________',
    content: '____________'
  },
  {
    label: '____________',
    content: '____________'
  },
  {
    label: '____________',
    content: '____________'
  }
])
</script>

<template>
  <div>
    <section
      class="w-full justify-center items-center relative --overflow-hidden bg-[url('@/assets/svg/bg-noise.svg')]"
    >
      <div class="flex flex-col justify-center items-center py-24">
        <UIcon
          name="i-local-tfm"
          class="size-10 text-default"
        />
        <!-- FAQ -->
        <div class="mt-24">
          <UAccordion
            :items="items"
            :unmount-on-hide="false"
            :default-value="['0']"
            type="multiple"
            class="w-xl mx-auto text-default"
            :ui="{
              trigger: 'text-base text-default',
              body: 'text-sm text-muted'
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
