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
    addSectionToSelected(slug: string): void {
      const index = this.availableSections.findIndex((section) => section.slug === slug);
      this.selectedSections.push(this.availableSections[index]);

      this.availableSections.splice(index, 1);

      const lastAddedSectionIndex = this.selectedSections.length - 1;
      this.editingSection = this.selectedSections[lastAddedSectionIndex];
    },

    removeSectionFromSelected(slug: string): void {
      const index = this.selectedSections.findIndex((section) => section.slug === slug);
      this.availableSections.push(this.selectedSections[index]);

      this.selectedSections.splice(index, 1);

      this.editingSection = null;
    },

    isEditingSection(slug: string): boolean {
      return slug === this.editingSection?.slug;
    },

    setEditingSection(slug: string): void {
      const sectionIndex = this.selectedSections.findIndex((section: Section) => section.slug === slug);

      if (sectionIndex == undefined) {
        console.error('[editorStore] [setEditingSection] Could not find slug in selectedSections');
      }

      this.editingSection = this.selectedSections[sectionIndex];
    },

    restoreSectionMarkdown(slug: string): void {
      const originalSection = sections.find((s) => s.slug === slug);

      const index = this.selectedSections.findIndex((s) => s.slug === slug);

      this.selectedSections[index] = { ...originalSection };
      this.editingSection = this.selectedSections[index];
    },

    restoreState(): void {
      const allSections = sections.filter((s) => s.slug !== DEFAULT_SELECTION_SLUG);
      this.availableSections = allSections.map((s) => ({ ...s }));

      const defaultSection = sections.find((s) => s.slug === DEFAULT_SELECTION_SLUG);

      this.selectedSections = [];
      this.selectedSections.push({ ...defaultSection });

      this.editingSection = this.selectedSections[0];
    },
  },

  getters: {
    allEditedRawContent: (state: State): string => {
      return state.selectedSections.reduce((content, section) => {
        content += section.markdown;

        return content;
      }, '');
    }
  },
});
