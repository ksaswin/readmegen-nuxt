<template>
  <div class='flex-0'>
    <h5 class='section-header'>Sections</h5>
    <div>
      <small>Click on an icon below to add the tempate</small>
      <ul class='flex justify-between'>
        <li v-for='option in mdTemplateOptions' :key='option.id'>
          <u-tooltip :text='option.tooltipText'>
            <u-button
              variant='ghost'
              :icon='option.icon'
              @click='addTemplate(option.id)'
            >
            </u-button>
          </u-tooltip>
        </li>
      </ul>
    </div>
    <div>
      <small>Click on a section below to edit the contents</small>
    </div>
    <div>
      <small>Click on a section below to add it to your readme</small>
    </div>
  </div>
</template>

<script setup lang='ts'>
interface TemplateOption {
  id: string;
  tooltipText: string;
  icon: string;
}

const mdTemplateOptions: Array<TemplateOption> = [
  {
    id: 'CODE_BLOCK',
    tooltipText: 'Codeblock',
    icon: 'i-mdi-application-brackets-outline',
  },
  {
    id: 'HYPER_LINK',
    tooltipText: 'Hyperlink',
    icon: 'i-mdi-link',
  },
  {
    id: 'IMAGE',
    tooltipText: 'Image',
    icon: 'i-mdi-file-image-outline',
  },
  {
    id: 'TABLE',
    tooltipText: 'Table',
    icon: 'i-mdi-table-large',
  },
];

function addTemplate(optionId: string): void {
  console.info('Adding option', optionId);
  console.warn('Quick template not implemented');
}
</script>
