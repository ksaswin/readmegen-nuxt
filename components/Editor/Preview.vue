<template>
  <div class='w-full flex-1'>
    <div class='w-full flex justify-between items-center'>
      <h5 class='section-header flex gap-8 items-center'>
        <span class='cursor-pointer' :class='{ selected: selectedPreviewType === "PREVIEW" }' @click='selectedPreviewType = "PREVIEW"'>Preview</span>
        <span class='cursor-pointer' :class='{ selected: selectedPreviewType === "RAW" }' @click='selectedPreviewType = "RAW"'>Raw</span>
      </h5>

      <div class='flex gap-4'>
        <u-tooltip v-for='action in previewActions' :key='action.id' :text='action.tooltipText'>
          <u-button
            variant='ghost'
            :icon='action.icon'
            @click='handlePreviewAction(action.id)'
          >
          </u-button>
        </u-tooltip>
      </div>
    </div>

    <div
      v-if='selectedPreviewType === "PREVIEW"'
      v-html='marked(editorStore.allEditedRawContent)'
      class='markdown-preview preview-border h-full w-full py-2 px-4 border-2 rounded-md'
    >
    </div>

    <textarea
      v-else
      disable
      class='preview-border h-full w-full py-2 px-4 border-2 rounded-md resize-none'
    > {{ editorStore.allEditedRawContent }}
    </textarea>
  </div>
</template>

<script setup lang='ts'>
import { marked } from 'marked';

interface PreviewAction {
  id: string;
  icon: string;
  tooltipText: string;
}

type PreviewType = 'PREVIEW' | 'RAW';

const previewActions: Array<PreviewAction> = [
  {
    id: 'COPY',
    icon: 'i-mdi-content-copy',
    tooltipText: 'Copy raw content to clipboard',
  },
  {
    id: 'DOWNLOAD',
    icon: 'i-mdi-file-download-outline',
    tooltipText: 'Download README.md',
  },
];

const editorStore = useEditorStore();

const selectedPreviewType = ref<PreviewType>('PREVIEW');

function handlePreviewAction(actionId: string): void {
  switch (actionId) {
    case 'DOWNLOAD':
      editorStore.downloadMarkdownFile();
      break;

    default:
      break;
  }
}
</script>

<style scoped>
.selected {
  @apply text-[#04A5E5] dark:text-[#89DCEB];
}

.preview-border {
  @apply border-[#313244] dark:border-[#CCD0DA];
}
</style>
