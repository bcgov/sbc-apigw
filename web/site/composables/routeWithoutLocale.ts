// return reactive route path without locale prefix
export function useRouteWithoutLocale (): Ref<string> {
  const route = useRoute()
  const localeRegex = /^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//

  const routeWithoutLocale = ref(route.path.replace(localeRegex, '/'))

  watch(
    () => route.path,
    (newPath) => {
      routeWithoutLocale.value = newPath.replace(localeRegex, '/')
    }
  )

  return routeWithoutLocale
}
