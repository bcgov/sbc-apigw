import type { DropdownItem } from '#ui/types'
// import { useSbcAuth } from './sbcAuth' // auto import not working
import {
  signOut
} from 'firebase/auth'
const mobileNavRef = ref(false)

// handle navigation items and functionality
export function useSbcNav () {
  const auth = useFirebaseAuth()!
  // const sbcAuth = useSbcAuth()
  const localePath = useLocalePath()
  const { t } = useI18n()
  const router = useRouter()
  const route = useRoute()

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
      // exclude dashboard link for now
      // {
      //   icon: 'i-mdi-account',
      //   label: t('btn.dashboard'),
      //   to: localePath('/sbc/dashboard')
      // },
      {
        icon: 'i-mdi-book-open-variant',
        label: 'Docs',
        to: localePath('/products/get-started/account-setup')
      }
    ]
  })

  const loggedInUserOptions = computed<DropdownItem[][]>(() => {
    return [
      [
        {
          label: 'Account',
          slot: 'account',
          disabled: true
        },
        {
          label: 'Log out',
          // label: t('BcrosHeader.menu.account.logout'),
          icon: 'i-mdi-logout',
          click: () => {
            signOut(auth)
            return navigateTo(localePath('/'))
          }
        }
      ]
    ]
  })

  const loggedOutUserOptions = computed<DropdownItem[][]>(() => {
    return [
      [
        {
          label: 'Log in',
          to: localePath('/sbc/auth/login'),
          icon: 'i-mdi-login'
        },
        {
          label: 'Create Account',
          icon: 'i-mdi-account-plus'
        }
      ]
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

  // close mobile menu when user changes routes
  watch(() => route.path, (newRoute) => {
    if (newRoute && mobileNavRef.value === true) {
      closeMobileNav()
    }
  })

  return {
    mainLinks,
    mobileNavRef,
    loggedInUserOptions,
    loggedOutUserOptions,
    openMobileNav,
    closeMobileNav
  }
}
