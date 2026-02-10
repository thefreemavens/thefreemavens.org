// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',
  
  css: ['~/assets/css/main.css'],
  
  devtools: {
    enabled: true
  },
  
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  
  icon: {
    customCollections: [{
      prefix: 'local',
      dir: './app/assets/icons'
    }]
  },
  
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],

  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },


  ssr: true,

  ui: {
    colorMode: false
  }

})