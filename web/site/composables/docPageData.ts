import type { ParsedContent, TocLink } from '@nuxt/content/dist/runtime/types'

// get current docs page content for page head and table of contents
export function useDocPageData () {
  const docPageData = ref<ParsedContent | null>(null)
  const { locale } = useI18n()
  const routeWithoutLocale = useRouteWithoutLocale()
  const route = useRoute()

  // fetch current page data
  async function initDocPageData () {
    try {
      if (routeWithoutLocale.value.includes('products') && route.meta.layout === 'docs') {
        docPageData.value = await queryContent(routeWithoutLocale.value)
          .where({ _locale: locale.value })
          .findOne()

        createPageHead()
      }
    } catch (error) {
      console.error('Error fetching doc page data:', error)
    }
  }

  // create page header based on doc title and directory
  function createPageHead () {
    if (docPageData.value) {
      if (docPageData.value._dir === 'get-started') {
        return `Get Started - ${docPageData.value.title}`
      } else if (docPageData.value._dir === 'connect') {
        return `SBC Connect - ${docPageData.value.title}`
      } else {
        return `${docPageData.value._dir?.toUpperCase()} - ${docPageData.value.title}`
      }
    } else {
      return 'Service BC Connect'
    }
  }

  // update data when locale or route changes
  watch([locale, routeWithoutLocale], async () => {
    await initDocPageData()
  })

  // return current page data table of contents
  const tocLinks = computed<TocLink[]>(() => docPageData.value?.body?.toc?.links ?? [])

  const currentDir = computed<string | undefined>(() => docPageData.value?._path)

  onMounted(() => {
    initDocPageData()
  })

  return { docPageData, tocLinks, currentDir, createPageHead }
}
