<template>
  <div class='w-full h-screen flex gap-3'>
    <editor-sections></editor-sections>
    <editor-markdown></editor-markdown>
    <editor-preview></editor-preview>
  </div>
</template>

<style>
.section-header {
  /* FIXME: Update section header color */
  @apply text-sm text-red-300 mb-2;
}
</style>
