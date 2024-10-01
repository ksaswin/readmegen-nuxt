<template>
  <div class='w-full flex-1'>
    <div class='w-full flex justify-between items-center'>
      <h5 class='section-header flex gap-8 items-center'>
        <span>Preview</span>
        <span>Raw</span>
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

    <div class='h-full border-2 rounded-md border-[#313244] dark:border-[#CCD0DA]'>
      Rendered text
    </div>
  </div>
</template>

<script setup lang='ts'>
interface PreviewAction {
  id: string;
  icon: string;
  tooltipText: string;
}

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

function handlePreviewAction(actionId: string): void {
  console.info('Action triggered:', actionId);
  console.warn('Action handler function not implemented');
}
</script>
