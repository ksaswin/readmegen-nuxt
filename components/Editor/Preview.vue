<template>
  <div class='w-full flex-1'>
    <div class='w-full flex justify-between items-center'>
      <h5 class='section-header flex gap-4'>
        <span>Raw</span>
        <span>Preview</span>
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
