// intersection observer to apply active class to table of contents component

const activeTocId = ref<string | null>(null)
export function useHeadingObserver (rootEl: Element | null) {
  // table of contents intersection observer refs
  const observer = shallowRef<IntersectionObserver | null | undefined>(null)
  const { locale } = useI18n()
  const routeWithoutLocale = useRouteWithoutLocale()

  const observerOptions = shallowReactive({
    root: rootEl,
    threshold: 1,
    rootMargin: '-100px 0px'
  })

  // only working with setTimeout, ContentDoc fetch need to complete first?
  function observeHeadings () {
    setTimeout(() => {
      document.querySelectorAll('h2, h3').forEach((section) => {
        observer.value?.observe(section)
      })
    }, 100)
  }

  // create observer when doc layout mounts
  onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          activeTocId.value = id
        }
      })
    }, observerOptions)

    observeHeadings()
  })

  // remove observer on unmount
  onUnmounted(() => {
    observer.value?.disconnect()
  })

  // observe new headings when route or locale changes
  watch([locale, routeWithoutLocale], () => {
    observeHeadings()
  })

  return { activeTocId }
}
