<script setup lang="ts">
const {
  mainLinks,
  openMobileNav
  // loggedInUserOptions, leaving out auth options for now
  // loggedOutUserOptions
} = useSbcNav()
// const { t } = useI18n()
// const localePath = useLocalePath()
const headerRef = ref<HTMLElement | null>(null)
// const user = useCurrentUser()
// expose template ref to access properties in parent
defineExpose({
  headerRef
})
</script>
<template>
  <header
    id="sbc-main-header"
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
        <!-- leaving out auth options for now -->
        <!-- <UDropdown
          v-if="!user"
          class="lg:hidden"
          :items="loggedOutUserOptions"
        >
          <UButton
            icon="i-mdi-account"
            color="white"
            variant="link"
          />
        </UDropdown>
        <UButton
          v-if="!user"
          label="Log in"
          :to="localePath('/sbc/auth/login')"
          color="white"
          variant="link"
          active-class="underline"
          class="hidden scale-90 font-normal lg:block"
        />
        <UButton
          v-if="!user"
          color="white"
          variant="link"
          label="Create Account"
          class="hidden scale-90 font-normal lg:block"
        />
        <UDropdown
          v-if="user"
          :items="loggedInUserOptions"
          :ui="{
            item: {
              disabled:
                'cursor-text select-text text-bcGovGray-900 dark:text-white opacity-100 font-semibold',
            }
          }"
        >
          <UButton
            color="white"
            variant="link"
          >
            <UAvatar
              :alt="user?.displayName![0] ?? 'U'"
              :ui="{
                background: 'bg-bcGovBlue-300 dark:bg-[#E0E7ED]',
                text: 'font-semibold leading-none text-white dark:text-bcGovColor-darkGray truncate',
                placeholder: 'font-semibold leading-none text-white truncate dark:text-bcGovColor-darkGray text-xl',
                rounded: 'rounded-sm'
              }"
            />
          </UButton>

          <template #account>
            <SbcHeaderAccountLabel
              :username="user?.displayName || 'U'"
              account-name=""
            />
          </template>
        </UDropdown> -->
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
