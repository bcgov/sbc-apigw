<script setup lang="ts">
defineProps<{
  navItems: AccordianNavItem[] | undefined
}>()

defineEmits<{(e: 'close-mobile'): void }>()
</script>
<template>
  <nav class="flex flex-col">
    <!-- creates an accordian for each object in navItems array -->
    <UAccordion
      :items="navItems || []"
      multiple
    >
      <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
      <template #default="{ item, open }">
        <UButton
          variant="accordian_trigger"
        >
          <span class="truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon
              name="i-mdi-menu-up"
              class="ms-auto size-7 transition-transform duration-200"
              :class="[!open && 'rotate-180']"
            />
          </template>
        </UButton>
      </template>
      <!-- item slot is the content inside each accordian, so for each accordian item, pass the children array into UVerticalNavigation -->
      <template #item="{ item }">
        <UVerticalNavigation
          class="mx-2"
          :links="item.children"
          :ui="{
            wrapper: 'border-s border-gray-500 dark:border-[#94A3B8] space-y-2',
            base: 'group block border-s -ms-px leading-6 before:hidden focus-visible:rounded',
            padding: 'p-0 ps-4',
            rounded: '',
            font: '',
            ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-white',
            active: 'text-primary-500 dark:text-[#7BB5EF] border-[#94A3B8] dark:border-[#7BB5EF] font-semibold',
            inactive: 'border-transparent hover:border-gray-900 dark:hover:border-white text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }"
          @click="$emit('close-mobile')"
        />
      </template>
    </UAccordion>
  </nav>
</template>
