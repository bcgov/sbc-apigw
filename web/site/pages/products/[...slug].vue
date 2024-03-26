<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})
</script>
<template>
  <ContentDoc
    class="prose prose-bcGov dark:prose-invert min-w-full px-2 py-6"
    :query="{
      path: $route.path.replace(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//, '/'),
      where: { _locale: $i18n.locale }
    }"
  >
    <template #not-found>
      <div class="flex h-full flex-col items-center justify-center space-y-4">
        <h1 class="text-2xl font-semibold">
          {{ $t('page.notFound.h1') }}
        </h1>
        <div class="flex gap-4">
          <UButton
            :label="$t('btn.goBack')"
            @click="$router.back()"
          />
          <UButton
            :label="$t('btn.goHome')"
            variant="outline"
            :to="`/${$i18n.locale}`"
          />
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
