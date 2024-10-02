<template>
  <div class='flex-0 h-full'>
    <div class='flex justify-between items-center mb-2'>
      <h5 class='section-header h-full'>Sections</h5>
      <u-button variant='ghost' icon='i-mdi-restore' @click='editorStore.restoreState'>Reset</u-button>
    </div>

    <div class='mb-2'>
      <small>Click on an icon below to add the tempate</small>
      <ul class='flex justify-between'>
        <li v-for='option in mdTemplateOptions' :key='option.id'>
          <u-tooltip :text='option.tooltipText'>
            <u-button variant='ghost' :icon='option.icon' @click='addTemplate(option.id)'></u-button>
          </u-tooltip>
        </li>
      </ul>
    </div>

    <div class='max-h-[78vh] overflow-y-scroll'>
      <div>
        <small>Click on a section below to edit the contents</small>
        <div>
          <ul>
            <li v-for='section in editorStore.selectedSections' :key='`sel-${section.slug}`'>
              <editor-section-card
                show-actions
                card-header='Title & Description'
                :is-selected='editorStore.isEditingSection(section.slug)'
                :slug='section.slug'
              >
              </editor-section-card>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <small>Click on a section below to add it to your readme</small>
        <ul>
          <li v-for='section in editorStore.availableSections' :key='`avl-${section.slug}`'>
            <editor-section-card :card-header='section.name' :slug='section.slug'></editor-section-card>
          </li>
        </ul>
      </div>
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


const editorStore = useEditorStore();

function addTemplate(optionId: string): void {
  console.info('Adding option', optionId);
  console.warn('Quick template not implemented');
}
</script>
