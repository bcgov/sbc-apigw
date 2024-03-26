import type { NavItem, ParsedContent } from '@nuxt/content/dist/runtime/types'

// get data for next/previous page buttons
export function useSurroundPages () {
  // inject navigation items for /products from app.vue
  const navItems = inject<Ref<NavItem[]>>('docNavItems')
  const route = useRoute()

  // get the very last item.child.child index, returns -1 if navitems are undefined
  const lastNavItemIndex = (navItems?.value[0].children?.length ?? 0) - 1
  const lastNavChildIndex = (navItems?.value[0]?.children?.[lastNavItemIndex]?.children?.length ?? 0) - 1

  // refs for watch/query, queryContent requires route without locale
  const routeWithoutLocale = useRouteWithoutLocale()
  const { locale } = useI18n()

  // refs for return data
  const prevPage = ref<Pick<ParsedContent, '_path' | 'title'>>()
  const nextPage = ref<Pick<ParsedContent, '_path' | 'title'>>()

  // method to update refs and return previous or next data
  async function updateSurroundPages () {
    if (route.meta.layout === 'docs') {
      // nuxt/content query, filter by locale, md files, only in /products
      const [prev, next] = await queryContent()
        .only(['_path', 'title'])
        .where({ _locale: locale.value, _extension: { $eq: 'md' }, _path: { $contains: 'products' } })
        .findSurround(routeWithoutLocale.value) // returns file before and after current route.path

      // assign query to refs
      // if query === null, (reached start of files), return last item in content files to 'wrap' the button navigation, fallback to not found
      prevPage.value = prev ?? navItems?.value[0].children?.[lastNavItemIndex]?.children?.[lastNavChildIndex] ?? { title: 'Not Found', _path: 'Not Found' }
      // if query === null, (reached end of files), return first item in content files to 'wrap' the button navigation, fallback to not found
      nextPage.value = next ?? navItems?.value[0].children?.[0]?.children?.[0] ?? { title: 'Not Found', _path: 'Not Found' }
    }
  }

  // update refs whenever route or locale changes
  watch([locale, routeWithoutLocale], updateSurroundPages, { immediate: true })

  // return data
  return { prevPage, nextPage }
}
