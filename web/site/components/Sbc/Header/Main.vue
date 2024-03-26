<script setup lang="ts">
const { mainLinks, openMobileNav } = useSbcNav()

const headerRef = ref<HTMLElement | null>(null)

// expose template ref to access properties in parent
defineExpose({
  headerRef
})
</script>
<template>
  <header
    id="bcros-main-header"
    ref="headerRef"
    class="border-b-2 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b dark:bg-bcGovColor-darkGray"
  >
    <nav
      class="m-auto flex w-full max-w-[1360px] items-center justify-between"
      :aria-label="$t('SbcHeader.navLabel')"
    >
      <div class="flex items-center gap-1">
        <NuxtLinkLocale
          to="/"
          tabindex="-1"
          aria-hidden="true"
          class="mr-2"
        >
          <SbcLogo />
        </NuxtLinkLocale>
        <UButton
          v-for="link in mainLinks"
          :key="link.to"
          class="hidden lg:block"
          :label="link.label"
          :to="link.to"
          color="white"
          variant="link"
          size="lg"
          active-class="underline"
        />
      </div>
      <div class="flex gap-1">
        <ColorModeSelect />
        <LocaleSelect />
        <UButton
          class="lg:hidden"
          icon="i-mdi-menu"
          color="white"
          variant="link"
          size="lg"
          :aria-label="$t('btn.openMainNav')"
          @click="openMobileNav"
        />
      </div>
    </nav>
  </header>
</template>
