<template>
  <div class='w-full flex-1'>
    <div class='w-full flex justify-between items-center'>
      <h5 class='section-header flex gap-4'>
        <span>Raw</span>
        <span>Preview</span>
      </h5>

      <div class='flex gap-4'>
        <u-tooltip text='Copy raw content to clipboard'>
          <u-button
            variant='ghost'
            icon='i-mdi-content-copy'
          >
          </u-button>
        </u-tooltip>

        <u-tooltip text='Copy raw content to clipboard'>
          <u-button
            variant='ghost'
            icon='i-mdi-file-download-outline'
          >
          </u-button>
        </u-tooltip>
      </div>
    </div>
  </div>
</template>
