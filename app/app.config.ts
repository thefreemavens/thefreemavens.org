// Source default config:
// https://ui.nuxt.com/docs/components/progress#theme
export default defineAppConfig({
  title: 'The Freemavens',
  description: 'Discover your true power and learn how to use it.',
  version: '0.1',
  url: {
    home: 'https://thefreemavens.org',
    discord: 'https://discord.gg/hJmUCPjtR4',
    github: 'https://github.com/thefreemavens',
    telegram: 'https://t.me/thefreemavens',
    x: 'https://x.com/thefreemavens',
  },
  ui: {
    // body: {
    //   class: 'scroll-smooth'
    // },
    accordion: {
      slots: {
        trigger: 'cursor-pointer'
      }
    },
    button: {
      slots: {
        base: [
          'rounded'
        ],
      },
    },
    colors: {
      primary:    'brand',      // Maps 'primary' alias to 'brand' color scale
      secondary:  'purple',
      success:    'green',
      info:       'blue',
      warning:    'yellow',
      error:      'red',
      neutral:    'earth'       // Special handling for neutral // zinc neutral gray slate stone earth
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    },
    // header: {
    //   slots: {
    //     // Header with full-width
    //     root: 'border-b dark:border-default/50',
    //     container: 'w-full max-w-full mx-auto',
    //     // header: 'px-20'
    //   }
    // },
    // footer: {
    //   slots: {
    //     // Footer with full-width
    //     container: 'w-full max-w-full mx-auto',
    //   }
    // },
    page: {
      slots: {
        root: 'xl:gap-16',
      },
    },
    pageCard: {
      slots: {
        container: 'grid',
        leadingIcon: 'size-8'
      }
    },
    pageHero: {
      slots: {
        header: 'font-display'
      }
    },
    pageFeature: {
      slots: {
        leadingIcon: 'size-10'
      },
    },
    pageSection: {
      slots: {
        title: 'font-display',
      }
    }
  }
})

