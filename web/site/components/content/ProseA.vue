<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: '_self',
    required: false
  },
  download: {
    type: String,
    default: undefined,
    required: false
  }
})

// return localized route path if target !== blank and is not a download link
function resolvePath () {
  if (props.target === '_blank' || props.download !== undefined) {
    return props.href
  } else {
    return localePath(props.href)
  }
}
</script>

<template>
  <UButton
    :to="resolvePath()"
    :target
    :download
    variant="link"
    class="-m-2"
  >
    <slot />
  </UButton>
</template>
