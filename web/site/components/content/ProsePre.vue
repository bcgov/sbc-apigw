<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const { copy, copied } = useClipboard()
</script>
<template>
  <div class="relative">
    <pre :class="$props.class"><slot /></pre>
    <div class="absolute right-2 top-2">
      <UButton
        icon="i-mdi-content-copy"
        variant="ghost"
        color="gray"
        :aria-label="$t('btn.copyCode')"
        @click="copy(code)"
      />
      <span v-if="copied" class="absolute right-4 top-5">{{ $t('btn.copied') }}</span>
    </div>
  </div>
</template>
<style>
pre code .line {
  display: block;
}
</style>
