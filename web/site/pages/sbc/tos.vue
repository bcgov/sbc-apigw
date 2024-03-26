<script setup lang="ts">
useHead({
  title: 'Service BC - API Terms of Use'
})

const agreeToTerms = ref(false)
const hasReachedBottom = ref(false)
const submitWithoutCheckbox = ref(false)

function handleWindowScroll () {
  // ref = current scroll Y position + height of viewport === total document scrollable height
  if (window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {
    hasReachedBottom.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleWindowScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleWindowScroll)
})

function submitTermsOfUse () {
  if (!agreeToTerms.value) {
    console.log('you must scroll to the bottom to select the agree to terms checkbox')
    submitWithoutCheckbox.value = true
  } else {
    console.log('submitted')
  }
}
</script>
<template>
  <div class="prose prose-bcGov dark:prose-invert relative w-full px-2 md:min-w-[700px]">
    <h1
      class="sticky top-0 bg-bcGovColor-gray1 pb-2 pt-4 text-center dark:bg-bcGovColor-darkGray"
      :class="{'border-b border-gray-500': !submitWithoutCheckbox }"
    >
      API Terms of Use
    </h1>
    <div
      v-show="submitWithoutCheckbox"
      class="sticky top-16 w-full border-b border-gray-500 bg-bcGovColor-gray1 pb-4 dark:bg-bcGovColor-darkGray"
      role="alert"
      aria-live="assertive"
    >
      <div class="rounded border border-[#a12622] bg-[#f2dede] p-2 text-center text-[#a12622]">
        You must scroll to the bottom and accept the API Terms of Use
      </div>
    </div>
    <ContentDoc
      class="prose prose-bcGov dark:prose-invert min-w-full p-8"
      :query="{
        path: '/sbc/tos',
        where: { _locale: $i18n.locale }
      }"
    />
    <div class="sticky bottom-0 flex w-full flex-col border-t border-gray-500 bg-bcGovColor-gray1 pb-8 pt-4 md:w-[700px] dark:bg-bcGovColor-darkGray">
      <UCheckbox
        v-model="agreeToTerms"
        :disabled="!hasReachedBottom"
        label="I have read and accept the API Terms of Use"
        :ui="{
          label: 'font-semibold text-bcGovColor-darkGray dark:text-white',
          base: 'h-4 w-4 dark:checked:bg-[#7BB5EF] dark:checked:border-transparent dark:indeterminate:bg-[#7BB5EF] dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
        }"
      />
      <div class="ml-auto flex gap-4">
        <UButton label="Accept" @click="submitTermsOfUse" />
        <UButton label="Decline" variant="outline" @click="() => console.log('decline terms of use')" />
      </div>
    </div>
  </div>
</template>
