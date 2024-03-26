const mobileNavRef = ref(false)

// handle navigation items and functionality
export function useSbcNav () {
  const localePath = useLocalePath()
  const { t } = useI18n()
  const router = useRouter()

  const mainLinks = computed(() => {
    return [
      {
        icon: 'i-mdi-home',
        label: t('btn.sbcConnect'),
        to: localePath('/')
      },
      {
        icon: 'i-mdi-database',
        label: t('btn.products'),
        to: localePath('/products')
      },
      {
        icon: 'i-mdi-account',
        label: t('btn.dashboard'),
        to: localePath('/sbc/dashboard')
      },
      {
        icon: 'i-mdi-book-open-variant',
        label: 'Docs',
        to: localePath('/products/get-started/account-setup')
      }
    ]
  })

  function openMobileNav () {
    mobileNavRef.value = true
  }

  async function closeMobileNav () {
    await router.isReady()
    await nextTick()
    mobileNavRef.value = false
  }

  return {
    mainLinks,
    mobileNavRef,
    openMobileNav,
    closeMobileNav
  }
}
