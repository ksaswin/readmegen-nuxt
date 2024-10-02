<template>
  <div class='w-full h-[86vh] flex gap-3 mt-2 px-4'>
    <editor-sections></editor-sections>
    <editor-markdown></editor-markdown>
    <editor-preview></editor-preview>
  </div>
</template>

<script setup lang='ts'>
const store = useEditorStore();

onMounted(() => {
  store.restoreState();
});
</script>

<style>
.section-header {
  /* FIXME: Update section header color */
  @apply h-8 text-sm font-bold text-[#5C5F77] dark:text-[#BAC2DE];
}
</style>
