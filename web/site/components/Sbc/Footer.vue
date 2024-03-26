<script setup lang="ts">
const links = [
  {
    label: 'SbcFooter.home',
    to: '/'
  },
  {
    label: 'SbcFooter.disclaimer',
    to: 'https://www2.gov.bc.ca/gov/content/home/disclaimer',
    target: '_blank'
  },
  {
    label: 'SbcFooter.privacy',
    to: 'https://www2.gov.bc.ca/gov/content/home/privacy',
    target: '_blank'
  },
  {
    label: 'SbcFooter.ally',
    to: 'https://www2.gov.bc.ca/gov/content/home/accessibility',
    target: '_blank'
  },
  {
    label: 'SbcFooter.copyright',
    to: 'https://www2.gov.bc.ca/gov/content/home/copyright',
    target: '_blank'
  }
]
</script>

<template>
  <footer
    id="sbc-main-footer"
    class="border-t-2 border-bcGovColor-navDivider bg-bcGovColor-footer p-2 dark:border-t dark:bg-bcGovColor-darkGray"
  >
    <div class="mx-auto flex max-w-[1360px] items-center justify-between">
      <nav :aria-label="$t('SbcFooter.navLabel')" class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to === '/' ? `/${$i18n.locale}` : link.to"
          :target="link.target"
          class="rounded p-1 text-sm text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {{ $t(link.label) }}
        </NuxtLink>
      </nav>
      <span class="whitespace-nowrap italic text-bcGovColor-navDivider">{{ $t('SbcFooter.bcApp') }}</span>
    </div>
  </footer>
</template>
