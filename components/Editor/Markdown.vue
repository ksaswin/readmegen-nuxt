<template>
  <div class='flex-1'>
    <h5 class='section-header flex items-center'>Editor</h5>
    <client-only>
      <monaco-editor
        v-if='editorStore.editingSection'
        aria-label='Markdown Monaco Editor'
        class='h-full'
        lang='markdown'
        v-model='editorStore.editingSection.markdown'
        :options='editorOptions'
      >
      </monaco-editor>

      <p v-else class='font-bold flex justify-center mt-4'>Select a section from the left sidebar to edit the contents</p>
      
      <template #fallback>
        <div>
          <div class='w-full h-4/5 flex items-center justify-center'>
            <p class='inline-flex items-end gap-1 font-bold text-[#8839EF] dark:text-[#CBA6F7]'>
              <span>Loading editor</span>
              <u-icon name='i-svg-spinners-3-dots-bounce' class='relative -bottom-px' />
            </p>
          </div>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script setup lang='ts'>
const rawContent = ref('');

const editorOptions = {
  minimap: {
    enabled: false,
  },
  lineNumbers: false,
  wordWrap: true,
  theme: 'vs-dark',
};

const editorStore = useEditorStore();
</script>
