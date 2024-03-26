// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      routes: [
        '/en-CA/sbc/tos'
      ]
    }
  },
  modules: ['@nuxtjs/eslint-module'],
  extends: ['@daxiom/sbc-nuxt-assets-layer'],
  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces', 'types', 'utils']
  },
  routeRules: {
    '/': { redirect: '/en-CA' }
  },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        iso: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      }
      // {
      //   name: 'Français',
      //   code: 'fr-CA',
      //   iso: 'fr-CA',
      //   dir: 'ltr',
      //   file: 'fr-CA.ts'
      // }
    ],
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  content: {
    locales: [
      'en-CA'
      // 'fr-CA'
    ],
    contentHead: false
  },
  colorMode: {
    preference: 'light',
    fallback: 'light'
  }
})
