<template>
  <div>
    <section
      class="w-full justify-center items-center relative --overflow-hidden bg-[url('@/assets/svg/bg-noise.svg')]"
    >
      <span class="absolute flex w-48 h-36 bg-primary-300/50 left-1/2 -translate-x-1/2 blur-2xl -translate-y-25 animate-[pulse_6s_ease-in-out_infinite]" />
      <span class="absolute flex w-72 h-48 bg-neutral-600 left-1/2 -translate-x-1/2 blur-3xl -translate-y-48" />
      <div class="flex flex-col justify-center items-center py-12">
        <AppLogo />
        <div
          class="text-center"
        >
          <!-- <UIcon
            name="i-local-tfm"
            class="size-12 text-default"
          /> -->
          <h1 class="font-semibold text-xl tracking-tighter mt-6 --text-default pt-2 pb-6 px-3 border-b border-default border-dotted animate-[pulse_6s_ease-in-out_infinite] bg-linear-to-b from-neutral-700 to-neutral-50 text-transparent bg-clip-text">
            Help & Support
          </h1>
        </div>

        <div class="flex gap-3 w-full max-w-md flex-wrap justify-center pt-12 px-4">
          <UButton
            v-for="(faqCat, index) in faqCats"
            :key="index"
            :label="faqCat.label"
            :variant="activeCategory === faqCat.label ? 'solid' : 'outline'"
            color="neutral"
            size="sm"
            class="rounded-full"
            @click="filterByCategory(faqCat.label)"
          />
          <UButton
            v-if="activeCategory"
            label="View all"
            variant="subtle"
            color="neutral"
            size="sm"
            class="rounded-full"
            @click="clearFilter"
          />
        </div>

        <!-- FAQ -->
        <div class="my-12 w-full px-8">
          <UAccordion
            :items="filteredItems"
            :unmount-on-hide="false"
            :default-value="[]"
            type="multiple"
            class="w-full max-w-xl mx-auto text-default"
            :ui="{
              trigger: 'text-sm text-default',
              body: 'text-sm text-muted'
            }"
          >
            <template #body="{ item }">
              <MDC
                :value="item.content ?? ''"
                unwrap="p"
              />
            </template>
          </UAccordion>

          <!-- Empty state -->
          <div
            v-if="filteredItems.length === 0"
            class="text-center text-muted py-12"
          >
            No questions found in this category.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

// Define a type for FAQ items with category
interface faqItem extends AccordionItem {
  category: string
  content: string
}

// Category definitions
const faqCats = [
  {
    label: 'About The Freemavens'
  },
  {
    label: 'Understanding Freemavenry'
  },
  {
    label: 'The Philosophy'
  },
  {
    label: 'The Open Doctrine'
  },
  {
    label: 'Getting Started'
  },
  {
    label: 'Practical Matters'
  }
] as const

// All FAQ items with their categories - explicitly typed
const items: faqItem[] = [
  {
    label: 'Who are The Freemavens?',
    content: '**The Freemavens** are a voluntary, non-religious, non-political, fraternal and benevolent collective of creators, not workers. We are individuals dedicated to the study, application, and propagation of Natural Law as the foundation for personal sovereignty and a free society.',
    category: 'About The Freemavens'
  },
  {
    label: 'What is Freemavenry?',
    content: '**Freemavenry** is the practice and path of The Freemavens. It is the structured journey of mastering Natural Law through The Maven Code, from Entered Maven to Master Maven, and applying that knowledge in service of The Great Create.',
    category: 'About The Freemavens'
  },
  {
    label: 'What is a Maven?',
    content: 'A **Maven** (from Yiddish *Meyvn*, meaning "one who understands") is a trusted expert who knows the ins and outs of a topic. Within our context, a Maven is someone who has progressed through The Maven Code, understands and lives by Natural Law, and takes responsibility for educating and elevating others.',
    category: 'About The Freemavens'
  },
  {
    label: 'What is The Maven Code?',
    content: '**The Maven Code** is our structured curriculum. It translates the immutable principles of Natural Law, including the seven Hermetic laws and the generative eighth principle of **Care**, into a logical, actionable learning path from novice to sovereign practitioner.',
    category: 'Understanding Freemavenry'
  },
  {
    label: 'What are the Three Degrees?',
    content: 'The Three Degrees are the progressive stages of Freemavenry:\n\n- **Entered Maven:** Receiving the Lost Key (Principle of Care)\n- **Fellow Maven:** Mastering the Tools (The 7 Hermetic Laws)\n- **Master Maven:** Assuming the Charge (Sovereignty & The Great Create)',
    category: 'Understanding Freemavenry'
  },
  {
    label: 'What is "The Great Create"?',
    content: '**The Great Create**, aka "The Great Work" is the moral obligation of those who understand Natural Law. It has two parts:\n\n1) Achieving Internal Sovereignty (self-mastery), and\n\n2) Externally educating and assisting others in their understanding, to reach a critical mass of conscious creators.',
    category: 'Understanding Freemavenry'
  },
  {
    label: 'What does "Sovereignty" mean in your context?',
    content: '**Sovereignty** (or Internal Monarchy) is the state of non-contradiction between one\'s thoughts, emotions, and actions. It is self-mastery achieved by aligning with Natural Law, the opposite of confusion and external control.',
    category: 'Understanding Freemavenry'
  },
  {
    label: 'What is Natural Law?',
    content: '**Natural Law** is the objective, immutable, non-man-made set of principles governing the consequences of behavior. It is a science of morality, not a religion or belief system. Its ultimate expression is the "No Harm" rule: all wrongful acts are forms of theft (of life, liberty, or property).',
    category: 'The Philosophy'
  },
  {
    label: 'What is the Principle of Care?',
    content: '**Care** is the lost eighth principle, the generative force that contains and activates all others. It is defined as **Attention + Time**, your two spiritual currencies. The immutable chain is: **Care → Thoughts → Actions → Manifested Reality.**',
    category: 'The Philosophy'
  },
  {
    label: 'Is this a religion?',
    content: '**No.** Freemavenry is based on Natural Law, which we treat as an objective science of consequences, like physics or mathematics, applied to consciousness and behavior. It requires no belief, only observation, understanding, and application.',
    category: 'About The Freemavens'
  },
  {
    label: 'Is this Freemasonry?',
    content: '**No.** While we honor the universal initiatory journey that Freemasonry *symbolically* represents, Freemavenry is an **open** path. Where Freemasonry guards secrets, we de-occult knowledge. Where they build hierarchy, we build a collective of sovereign equals.',
    category: 'About The Freemavens'
  },
  {
    label: 'What does "De-occultation" mean?',
    content: '**De-occultation** is the process of taking knowledge that has been hidden, fragmented, or obscured, and making it whole, clear, and accessible to all. It is the opposite of esotericism for the few. It is knowledge for the sovereign many.',
    category: 'The Philosophy'
  },
  {
    label: 'What are the essential qualifications for membership?',
    content: 'Membership is open to all people of integrity who commit to:\n\n1. Abiding by our collective principles (Natural Law)\n2. Understanding The Real Natural Law\n3. Applying it in real life\n\nNo other qualifications are required.',
    category: 'Getting Started'
  },
  {
    label: 'What are your core principles?',
    content: 'We uphold three foundational principles:\n\n- **Care:** The selfless investment of attention and time in what matters, with tolerance and respect for all.\n- **Charity:** Caring for our members and the broader community through giving, donation, voluntary effort, and action.\n- **Courage:** The will to act on truth even when unpopular, uncomfortable, or opposed.',
    category: 'About The Freemavens'
  },
  {
    label: 'What is The Open Doctrine?',
    content: '**The Open Doctrine** is our canonical, open-source repository of Natural Law knowledge. It contains the complete transcripts, decrypted principles, essays, and resources, all freely accessible at [doctrine.thefreemavens.org](https://doctrine.thefreemavens.org).',
    category: 'The Open Doctrine'
  },
  {
    label: 'What is the relationship between the Doctrine and the Collective?',
    content: '**The Doctrine is the foundation. The Collective is the community.** The Open Doctrine contains the immutable knowledge. The Freemavens Collective is where that knowledge is studied, applied, and brought to life through practice, discussion, and The Great Create.',
    category: 'The Open Doctrine'
  },
  {
    label: 'How do I start?',
    content: 'We are currently architecting a streamlined initiation flow for The Freemavens Collective, a structured path from first inquiry to sovereign practice. While this portal is under construction, those who **care** enough to begin the journey now are invited to join our community discussions on [Discord](https://discord.gg/hJmUCPjtR4) or [Telegram](https://t.me/thefreemavens). This is where early Mavens connect, share insights, and help shape what the Collective becomes. Your presence and participation matter.',
    category: 'Getting Started'
  },
  {
    label: 'Do I need to be technical to contribute?',
    content: '**Not at all.** Contributions range from reporting typos (Reader path) to translation, proofreading, design, and development. Every level of skill and time commitment is welcome. See our [Contribution Guide](https://doctrine.thefreemavens.org/contribute) for details.',
    category: 'The Open Doctrine'
  },
  {
    label: 'Is there a cost?',
    content: 'The Open Doctrine is **completely free**. Access to The Freemavens Collective and The Maven Code curriculum may involve membership tiers to sustain the work. Details will be announced as the Collective launches.',
    category: 'Practical Matters'
  },
  {
    label: 'How is this different from New Age teachings?',
    content: 'New Age thought often promotes passivity ("ignore the negative") and wishful thinking. Freemavenry teaches **active engagement** with truth and reality. The Principle of Care requires conscious investment of attention and time, not avoidance. Ignoring harm ensures it grows.',
    category: 'The Philosophy'
  },
  {
    label: 'Can I join if I disagree with some principles?',
    content: 'Freemavenry is based on **objective truth**, not consensus. We do not vote on Natural Law. Membership requires commitment to understanding and applying these principles as presented. Study the [Open Doctrine](https://doctrine.thefreemavens.org/en) first, then decide if the path is for you.',
    category: 'Getting Started'
  },
  // {
  //   label: 'What is the Marketspace?',
  //   content: 'The **Marketspace** is a curated area within the Collective where Mavens exchange value, tools for practice (journals, courses), services (coaching, consulting), and resources vetted for alignment with Natural Law principles.',
  //   category: 'Practical Matters'
  // },
  {
    label: 'How do I contact The Freemavens?',
    content: `For general inquiries, contribution and Open Doctrine related questions: [info@thefreemavens.org](mailto:info@thefreemavens.org)   
    Join our community: [Discord](https://discord.gg/hJmUCPjtR4) | [Telegram](https://t.me/thefreemavens)`,
    category: 'Practical Matters'
  },
  {
    label: 'Who is this for?',
    content: 'For truth-seekers, system-thinkers, and aspiring sovereigns who sense that mainstream solutions only address symptoms. For those ready to move from passive consumption to responsible creation, and who possess the will and integrity to apply profound knowledge.',
    category: 'Getting Started'
  }
]

// Reactive state with explicit typing
const activeCategory = ref<string | null>(faqCats[0].label)

// Computed filtered items with explicit return type
const filteredItems = computed((): faqItem[] => {
  if (!activeCategory.value) {
    return items
  }
  return items.filter(item => item.category === activeCategory.value)
})

// Methods
const filterByCategory = (category: string) => {
  activeCategory.value = activeCategory.value === category ? null : category
}

const clearFilter = () => {
  activeCategory.value = null
}
</script>
