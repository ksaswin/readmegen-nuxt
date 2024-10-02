import { sections, type Section } from '~/models/sections';


interface State {
  availableSections: Array<Section>;
  selectedSections: Array<Section>;
  editingSection: Section | null;
}

export const DEFAULT_SELECTION_SLUG = 'title-and-description';

export const useEditorStore = defineStore('editor', {
  state: (): State => ({
    availableSections: [],
    selectedSections: [],
    editingSection: null,
  }),

  actions: {
    addSectionToSelected(section: Section): void {
      this.selectedSections.push(section);
    },

    isEditingSection(slug: string): boolean {
      return slug === this.editingSection?.slug;
    },

    restoreState(): void {
      const allSections = sections.filter((s) => s.slug !== DEFAULT_SELECTION_SLUG);
      this.availableSections = allSections.map((s) => ({ ...s }));

      const defaultSection = sections.find((s) => s.slug === DEFAULT_SELECTION_SLUG);

      this.selectedSections = [];
      this.selectedSections.push({ ...defaultSection });

      this.editingSection = { ...defaultSection };
    },
  },
});
