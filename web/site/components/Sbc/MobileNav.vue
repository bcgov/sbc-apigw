<script setup lang="ts">
defineProps<{
  accordianNavItems?: AccordianNavItem[] | undefined
}>()

const { currentDir, tocLinks } = useDocPageData()
const { mainLinks, mobileNavRef, closeMobileNav } = useSbcNav()
</script>
<template>
  <UModal
    v-model="mobileNavRef"
    fullscreen
    :transition="false"
    :ui="{
      overlay: {
        base: 'fixed inset-0 transition-none',
      }
    }"
  >
    <UCard
      :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow bg-bcGovGray-100 dark:bg-bcGovColor-darkGray',
          padding: 'p-2'
        },
        header: {
          base: 'border-b-2 border-bcGovColor-navDivider dark:border-b-[1px] dark:bg-bcGovColor-darkGray',
          background: 'bg-bcGovColor-header dark:bg-bcGovColor-darkGray',
          padding: 'p-2'
        }
      }"
    >
      <template #header>
        <div class="m-auto flex w-full items-center justify-between">
          <div class="flex items-center gap-1">
            <NuxtLinkLocale
              to="/"
              tabindex="-1"
              aria-hidden="true"
              class="mr-2"
            >
              <SbcLogo />
            </NuxtLinkLocale>
          </div>
          <div class="flex gap-1">
            <ColorModeSelect />
            <LocaleSelect />
            <UButton
              icon="i-mdi-window-close"
              color="white"
              variant="link"
              size="lg"
              :aria-label="$t('btn.closeMainNav')"
              @click="closeMobileNav"
            />
          </div>
        </div>
      </template>
      <UVerticalNavigation :links="mainLinks" @click="closeMobileNav" />
      <UDivider v-show="tocLinks.length && $route.path.includes('products')" class="my-4" />
      <UAccordion v-show="tocLinks.length && $route.path.includes('products')" :items="[{label: 'Table of Contents', defaultOpen: true}]">
        <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
        <template #default="{ open }">
          <UButton
            variant="accordian_trigger"
          >
            <span class="truncate">Table of Contents</span>

            <template #trailing>
              <UIcon
                name="i-mdi-menu-up"
                class="ms-auto size-7 transition-transform duration-200"
                :class="[!open && 'rotate-180']"
              />
            </template>
          </UButton>
        </template>
        <!-- item slot is the content inside each accordian, pass toc component into item slot of accordian -->
        <template #item>
          <SbcTableOfContents
            class="-mt-2 ml-4"
            :hide-label="true"
            :toc-links="tocLinks"
            :current-dir="currentDir"
            @click="closeMobileNav"
          />
        </template>
      </UAccordion>
      <UDivider class="my-4" />
      <SbcAccordianNavigation :nav-items="accordianNavItems" @close-mobile="closeMobileNav" />
    </UCard>
  </UModal>
</template>
