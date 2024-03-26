<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'
defineProps<{
  tocLinks: TocLink[] | [],
  currentDir?: string,
  activeTocId?: string | null,
  hideLabel: boolean
}>()

const route = useRoute()
const localePath = useLocalePath()

// smooth scroll to element and update router history
function onClick (id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const newPath = `${route.path}#${id}`
    history.pushState(history.state, '', newPath)
  }
}
</script>
<template>
  <nav class="text-sm text-bcGovColor-midGray" aria-label="table of contents">
    <span v-if="!hideLabel" class="font-semibold text-bcGovColor-darkGray dark:text-white">Table of Contents</span>
    <ul class="mt-2 flex flex-col space-y-1">
      <li v-for="{ id, text, children } in tocLinks" :id="`toc-${id}`" :key="id">
        <a
          :href="localePath(currentDir + '#' + id)"
          class="cursor-pointer"
          :class="activeTocId === id ? 'text-primary-500 dark:text-[#7BB5EF] font-semibold' : 'hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
          @click.prevent="onClick(id)"
        >
          {{ text }}
        </a>
        <ul v-if="children" class="my-1 ml-2 flex flex-col">
          <li v-for="{ id: childId, text: childText } in children" :id="`toc-${childId}`" :key="childId">
            <a
              :href="localePath(currentDir + '#' + childId)"
              class="cursor-pointer"
              :class="activeTocId === childId ? 'text-primary-500 dark:text-[#7BB5EF] font-semibold' : 'hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'"
              @click.prevent="onClick(childId)"
            >
              {{ childText }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
