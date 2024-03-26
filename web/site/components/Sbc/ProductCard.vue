<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps<{
  name: string
  description: string
  badge?: string
  bulletPoints?: string[]
  directory: string
}>()

async function goToProduct () {
  await navigateTo(localePath(`/products/${props.directory}/overview`))
}
</script>
<template>
  <li
    class="flex h-[420px] w-[390px] cursor-pointer flex-col overflow-hidden rounded bg-white shadow-md transition-transform focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-bcGovGray-500 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-bcGovGray-500 dark:border dark:border-gray-300/50 dark:bg-bcGovColor-darkGray dark:focus-within:ring-1 dark:focus-within:ring-bcGovGray-100 dark:hover:ring-1 dark:hover:ring-bcGovGray-100"
    @click="goToProduct"
  >
    <div class="relative flex h-[60px] items-center bg-bcGovBlue-350 px-7 py-3.5 font-semibold tracking-wide dark:border-b dark:border-gray-300/50 dark:bg-bcGovColor-darkGray">
      <a
        :href="localePath(`/products/${directory}/overview`)"
        class="text-white focus:outline-none"
      >
        {{ name }}
      </a>
      <span v-if="badge" class="absolute right-7 top-0 rounded-b bg-bcGovColor-navDivider px-2 py-1 text-sm text-bcGovBlue-600">{{ badge }}</span>
    </div>
    <div class="grow self-start px-7 pt-7 text-left text-bcGovColor-midGray dark:text-white">
      <p class="mb-2">
        {{ description }}
      </p>
      <ul v-if="bulletPoints" class="list-[square] pl-4 font-semibold text-bcGovColor-midGray marker:text-bcGovGray-400 dark:text-white">
        <li v-for="item in bulletPoints" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="px-7 pb-7 text-left">
      <span class="flex flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] underline dark:text-white">
        <span>
          {{ $t('SbcProductCard.goTo') }} {{ name }}
          <span class="inline-flex align-middle">
            <UIcon name="i-mdi-arrow-right-thin scale-150 ml-2" />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>
