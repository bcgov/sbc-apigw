<script setup lang="ts">
defineProps<{
  link?: string
}>()
</script>
<template>
  <UButton
    :to="link"
    target="_blank"
    aria-label="Open in code pen"
    variant="outline"
    size="sm"
  >
    <div class="flex items-center font-medium">
      C <Icon name="ant-design:codepen-outlined" class="mx-1 scale-150" /> DEPEN
    </div>
  </UButton>
</template>
