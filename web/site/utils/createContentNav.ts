import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { handleContentDirectoryLabel } from './handleContentDirectoryLabel'

// maps nav items returned from fetchContentNavigation into usable array by UAccordian for navigation
export function createContentNav (navItems: NavItem[] | undefined) {
  if (!navItems) { return undefined }
  const localePath = useLocalePath()

  return navItems.flatMap((nav: NavItem) => {
    return nav.children?.map((firstChild) => {
      return { // create parent array for each UAccordian
        label: handleContentDirectoryLabel(firstChild.title), // return full string instead of 'bn', 'rs', etc
        defaultOpen: true, // accordians all open by default
        children: firstChild.children?.map((secondChild) => { // create children array for each UVerticalNavigation
          return {
            label: secondChild.title,
            to: localePath(secondChild._path) // localize path
          }
        })
      }
    })
  }) as AccordianNavItem[]
}
