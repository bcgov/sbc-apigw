// https://nuxt.com/docs/api/configuration/nuxt-config
import type { BreadcrumbLink } from '#ui/types'
const localScalarUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  future: {
    compatibilityVersion: 4
  },
  nitro: {
    routeRules: {
      '/en-CA/sbc/**': { redirect: '/en-CA' }
    },
    prerender: {
      routes: [],
      ignore: [
        '/en-CA/sbc/dashboard',
        '/en-CA/sbc/tos',
        '/en-CA/sbc/auth/login',
        '/en-CA/sbc/auth/logout'
      ]
    }
  },
  routeRules: {
    '/': { redirect: '/en-CA' },
    '/en-CA/oas/**': { prerender: false }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'nuxt-gtag',
    '@scalar/nuxt'
  ],
  extends: ['@daxiom/sbc-nuxt-assets-layer'],
  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces', 'types', 'utils']
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
    contentHead: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    ignores: [
      'web-component',
      '/sbc/tos',
      '/products/bn',
      '/1.get-started/3.api-access-request.md'
    ]
  },
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  scalar: {
    darkMode: false,
    theme: 'default',
    hideSearch: true,
    metaData: {
      title: 'API Documentation by Scalar | Service BC Connect Developer Site'
    },
    // proxyUrl: 'https://proxy.scalar.com',
    configurations: [
      {
        spec: {
          url: `${localScalarUrl}/strr/platform.yaml`
        },
        pathRouting: {
          basePath: '/oas/strr'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/connect/connect-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/connect'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/br/business-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/br'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/mhr/mhr-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/mhr'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/pay/payment-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/pay'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/ppr/ppr-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/ppr'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/rs/regsearch-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/rs'
        }
      },
      {
        spec: {
          url: `${localScalarUrl}/namex/namex-spec.yaml`
        },
        pathRouting: {
          basePath: '/oas/namex'
        }
      }
      // {
      //   spec: {
      //     url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.json'
      //   },
      //   pathRouting: {
      //     basePath: '/scalar'
      //   }
      // }
    ]
  },

  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: tag => tag.startsWith('bcros-')
        }
      }
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  runtimeConfig: {
    xApiKey: '',
    accountID: '',
    public: {
      version: `Dev Site v${process.env.npm_package_version || ''}`
    }
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-GKRC2V8PT4'
  }
})
declare module '#app' {
  interface PageMeta {
    breadcrumbs?: BreadcrumbLink[]
  }
}
