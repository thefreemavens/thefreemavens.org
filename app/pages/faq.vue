<template>
  <div>
    <section
      class="w-full justify-center items-center relative --overflow-hidden bg-[url('@/assets/svg/bg-noise.svg')]"
    >
      <div class="flex flex-col justify-center items-center py-24">
        <NuxtLink to="/">
          <UIcon
            name="i-local-tfm"
            class="size-10 text-default"
          />
        </NuxtLink>
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
          >
            <template #body="{ item }">
              <MDC
                :value="item.content ?? ''"
                unwrap="p"
              />
            </template>
          </UAccordion>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// const appConfig = useAppConfig()
// definePageMeta({
//   layout: 'screen'
// })
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'What is The Freemavens?',
    content: '**The Freemavens** is a voluntary, non-religious, non-political, fraternal and benevolent collective of creators, not workers. We are dedicated to the study, application, and propagation of Natural Law as the foundation for personal sovereignty and a free society.'
  },
  {
    label: 'What is Freemavenry?',
    content: '**Freemavenry** is the practice and path of The Freemavens. It is the structured journey of mastering Natural Law through The Maven Code, from Entered Maven to Master Maven, and applying that knowledge in service of The Great Create.'
  },
  {
    label: 'What is a Maven?',
    content: 'A **Maven** (from Yiddish *Meyvn*, meaning "one who understands") is a trusted expert who knows the ins and outs of a topic. Within our context, a Maven is someone who has progressed through The Maven Code, understands and lives by Natural Law, and takes responsibility for educating and elevating others.'
  },
  {
    label: 'What is The Maven Code?',
    content: '**The Maven Code** is our structured curriculum. It translates the immutable principles of Natural Law, including the seven Hermetic laws and the generative eighth principle of **Care**, into a logical, actionable learning path from novice to sovereign practitioner.'
  },
  {
    label: 'What are the Three Degrees?',
    content: 'The Three Degrees are the progressive stages of Freemavenry:\n\n- **Entered Maven:** Receiving the Lost Key (Principle of Care)\n- **Fellow Maven:** Mastering the Tools (The 7 Hermetic Laws)\n- **Master Maven:** Assuming the Charge (Sovereignty & The Great Create)'
  },
  {
    label: 'Who is this for?',
    content: 'For truth-seekers, system-thinkers, and aspiring sovereigns who sense that mainstream solutions only address symptoms. For those ready to move from passive consumption to responsible creation, and who possess the will and integrity to apply profound knowledge.'
  },
  {
    label: 'What is Natural Law?',
    content: '**Natural Law** is the objective, immutable, non-man-made set of principles governing the consequences of behavior. It is a science of morality, not a religion or belief system. Its ultimate expression is the "No Harm" rule: all wrongful acts are forms of theft (of life, liberty, or property).'
  },
  {
    label: 'What is the Principle of Care?',
    content: '**Care** is the lost eighth principle, the generative force that contains and activates all others. It is defined as **Attention + Time**, your two spiritual currencies. The immutable chain is: Care → Thoughts → Actions → Manifested Reality.'
  },
  {
    label: 'Is this a religion?',
    content: '**No.** Freemavenry is based on Natural Law, which we treat as an objective science of consequences, like physics or mathematics, applied to consciousness and behavior. It requires no belief, only observation, understanding, and application.'
  },
  {
    label: 'Is this Freemasonry?',
    content: '**No.** While we honor the universal initiatory journey that Freemasonry symbolically represents, Freemavenry is an **open** path. Where Freemasonry guards secrets, we de-occult knowledge. Where they build hierarchy, we build a collective of sovereign equals.'
  },
  {
    label: 'What does "de-occultation" mean?',
    content: '**De-occultation** is the process of taking knowledge that has been hidden, fragmented, or obscured, and making it whole, clear, and accessible to all. It is the opposite of esotericism for the few. It is knowledge for the sovereign many.'
  },
  {
    label: 'What are the essential qualifications for membership?',
    content: 'Membership is open to all people of integrity who commit to:\n\n1. Abiding by our collective principles (Natural Law)\n2. Understanding The Real Natural Law\n3. Applying it in real life\n\nNo other qualifications are required.'
  },
  {
    label: 'What are your core principles?',
    content: 'We uphold three foundational principles:\n\n- **Care:** The selfless investment of attention and time in what matters, with tolerance and respect for all.\n- **Charity:** Caring for our members and the broader community through giving, voluntary effort, and action.\n- **Courage:** The will to act on truth even when unpopular, uncomfortable, or opposed.'
  },
  {
    label: 'What is The Open Doctrine?',
    content: '**The Open Doctrine** is our canonical, open-source repository of Natural Law knowledge. It contains the complete transcripts, decrypted principles, essays, and resources, all freely accessible at [doctrine.thefreemavens.org](https://doctrine.thefreemavens.org).'
  },
  {
    label: 'What is the relationship between the Doctrine and the Collective?',
    content: '**The Doctrine is the foundation. The Collective is the community.** The Open Doctrine contains the immutable knowledge. The Freemavens Collective is where that knowledge is studied, applied, and brought to life through practice, discussion, and The Great Create.'
  },
  {
    label: 'What is "The Great Create"?',
    content: '**The Great Create** is the moral obligation of those who understand Natural Law. It has two parts:\n\n1) Achieving Internal Sovereignty (self-mastery), and\n\n2) Externally educating and assisting others in their understanding, to reach a critical mass of conscious creators.'
  },
  {
    label: 'How do I start?',
    content: 'Begin with **The Initiation: A Care Diagnosis**, a free 5-minute quiz that reveals your current Sovereignty Profile and gives you your first sovereign action. This is the first step on the Entered Maven path. [Take the Initiation](/initiation)'
  },
  {
    label: 'Do I need to be technical to contribute?',
    content: '**Not at all.** Contributions range from reporting typos (Reader path) to translation, proofreading, design, and development. Every level of skill and time commitment is welcome. See our [Contribution Guide](https://doctrine.thefreemavens.org/contribute) for details.'
  },
  {
    label: 'Is there a cost?',
    content: 'The Open Doctrine is **completely free**. Access to The Freemavens Collective and The Maven Code curriculum may involve membership tiers to sustain the work. Details will be announced as the Collective launches.'
  },
  {
    label: 'How is this different from New Age teachings?',
    content: 'New Age thought often promotes passivity ("ignore the negative") and wishful thinking. Freemavenry teaches **active engagement** with truth and reality. The Principle of Care requires conscious investment of attention and time, not avoidance. Ignoring harm ensures it grows.'
  },
  {
    label: 'What does "sovereignty" mean in your context?',
    content: '**Sovereignty** (or Internal Monarchy) is the state of non-contradiction between one\'s thoughts, emotions, and actions. It is self-mastery achieved by aligning with Natural Law, the opposite of confusion and external control.'
  },
  {
    label: 'Can I join if I disagree with some principles?',
    content: 'Freemavenry is based on **objective truth**, not consensus. We do not vote on Natural Law. Membership requires commitment to understanding and applying these principles as presented. Study the Doctrine first, then decide if the path is for you.'
  },
  {
    label: 'What is the Marketspace?',
    content: 'The **Marketspace** is a curated area within the Collective where Mavens exchange value, tools for practice (journals, courses), services (coaching, consulting), and resources vetted for alignment with Natural Law principles.'
  },
  {
    label: 'How do I contact The Freemavens?',
    content: `For general inquiries: [info@thefreemavens.org](mailto:info@thefreemavens.org)  
    For contribution and Doctrine-related questions: [doctrine@thefreemavens.org](mailto:doctrine@thefreemavens.org)  
    Join our community: [Discord](https://discord.gg/your-invite) | [Telegram](https://t.me/your-channel)`
  }
])

// const items = ref<AccordionItem[]>([
//   {
//     label: 'What is Freemavenry?',
//     content: 'Freemavenry is a voluntary, non-religious, non-political, fraternal and benevolent collective of creators, not workers. Our roots lie in the search for eternal truth and the spread of knowledge across metaphysics, occultism, spirituality, symbology and human consciousness.'
//   },
//   {
//     label: 'What is our mission?',
//     content: 'The Free Mavens promotes the great body of knowledge of Natural Law. We do this so that people across the world can gain a deeper understanding of the causal factors behind the real issues we face today. This understanding feeds a desire to help—and to create a reality based in truth, morality, love and freedom. Not lies, not immorality, not fear, not slavery.'
//   },
//   {
//     label: 'What does "Freemaven" mean?',
//     content: 'The word ***Free*** means not under the control or in the power of another. To be able to act or be done as one wishes. The word ***Maven*** derives from the Yiddish **_Meyvn_**, meaning *"one who understands."* A Maven knows the ins and outs of a topic. They are the people we turn to as experts in a field. You do not become a Maven overnight. That kind of expertise and understanding comes from an accumulation of knowledge over years of dedicated study and practice. To be a Maven is to know. To be Free is to act on that knowledge without coercion. To be a Free Maven is to integrate both, and to help others do the same.'
//   },
//   {
//     label: 'What are the Freemavens core values?',
//     content: `**CARE** The selfless kind. Every member shows tolerance and respect for others, behaving with kindness and understanding toward fellow beings. Care is the generative principle, the conscious investment of attention and time in what matters.
//     **Charity** Freemavens are taught to practice charity—to care not only for their own members but for the community as a whole, through charitable giving, voluntary effort and deliberate action. (3) Courage. The will to act on truth even when it is unpopular, uncomfortable or opposed.
//     **Courage -->** is the bridge between knowledge and sovereignty—the force that transforms understanding into lived reality.`
//   },
//   {
//     label: '____________',
//     content: '____________'
//   },
//   {
//     label: '____________',
//     content: '____________'
//   },
//   {
//     label: '____________',
//     content: '____________'
//   },
//   {
//     label: '____________',
//     content: '____________'
//   }
// ])
</script>
