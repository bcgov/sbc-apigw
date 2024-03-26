<script setup lang="ts">
defineProps<{
  navItems: AccordianNavItem[] | undefined
}>()
</script>
<template>
  <aside class="min-w-fit max-w-min px-2 py-4">
    <SbcAccordianNavigation :nav-items="navItems" />
  </aside>
</template>
