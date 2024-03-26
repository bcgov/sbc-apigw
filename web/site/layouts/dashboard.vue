<script setup lang="ts">
import { SbcDashboardSubHeader } from '#components'
const navItems = inject<Ref<AccordianNavItem[]>>('dashNavItems')
const sandboxHeaderRef = ref<InstanceType<typeof SbcDashboardSubHeader> | null>(null)

const { height } = useElementSize(sandboxHeaderRef)
</script>

<template>
  <main class="mx-auto w-full max-w-[1360px] grow">
    <SbcDashboardSubHeader ref="sandboxHeaderRef" class="fixed inset-x-0 z-50" />
    <div class="flex grow flex-col lg:grid lg:grid-cols-12" :style="{ marginTop: `${height}px` }">
      <SbcSideNavigation
        :nav-items="navItems"
        class="fixed col-start-1 col-end-3 mt-2 hidden lg:block"
      />
      <div class="w-full lg:col-span-full lg:col-start-3">
        <slot />
      </div>
    </div>
  </main>
</template>
