<script setup lang="ts">
import { BcrosSearch } from 'bcros-search-test-publish'

interface Props {
  link?: string
  showCodepen?: boolean,
  showEvent?: boolean
}

withDefaults(defineProps<Props>(), {
  link: '',
  showCodepen: false,
  showEvent: false
})

const selected = ref('')

const tabs = [
  {
    key: 'preview',
    label: 'Preview'
  },
  {
    key: 'html',
    label: 'HTML'
  },
  {
    key: 'vue',
    label: 'Vue'
  },
  {
    key: 'react',
    label: 'React'
  }
]

function onChange (index: number) {
  const item = tabs[index]
  shownTab.value = item.key
}

const shownTab = ref(tabs[0].key)

function handleSelect (event: CustomEvent) {
  selected.value = event.detail
}
</script>
<template>
  <div class="not-prose">
    <UCard
      :ui="{
        background: 'bg-white dark:bg-white',
        divide: '',
        body: {
          padding: `px-4 py-5 sm:p-6 ${shownTab !== 'preview' ? '-my-4' : ''}`,
        },
        header: {
          padding: 'px-0 py-0 sm:px-0',

        },
        footer: {
          padding: 'px-4 pb-4 sm:pb-6 pt-0 sm:px-6'
        }
      }"
    >
      <template #header>
        <UTabs :items="tabs" :ui="{ list: { rounded: 'rounded-t-lg rounded-b-none' }}" @change="onChange" />
        <div class="ml-4 flex flex-col font-semibold text-bcGovColor-darkGray sm:ml-6">
          <slot name="header" />
        </div>
      </template>
      <div class="min-w-full">
        <div v-if="shownTab === 'preview'" class="w-full">
          <bcros-search v-if="!showEvent" url="/api/reg-search" v-bind="$attrs" />
          <bcros-search v-if="showEvent" url="/api/reg-search" v-bind="$attrs" @select="handleSelect" />
          <span v-if="showEvent">Selected Business: {{ selected }}</span>
        </div>
        <div v-if="shownTab === 'html'" class="prose min-w-full">
          <slot name="html" />
        </div>
        <div v-if="shownTab === 'vue'" class="prose min-w-full">
          <slot name="vue" />
        </div>
        <div v-if="shownTab === 'react'" class="prose min-w-full">
          <slot name="react" />
        </div>
      </div>
      <template v-if="showCodepen" #footer>
        <div class="flex">
          <ButtonCodepen class="ml-auto" :link />
        </div>
      </template>
    </UCard>
  </div>
</template>
