<template>
  <button class='card flex justify-between items-center' :class='{ selected: isSelected }' @click='emit("selected", slug)'>
    <p>{{ cardHeader }}</p>

    <div v-if='showActions'>
      <u-button variant='ghost' icon='i-mdi-restore' @click.stop='emit("restore", slug)'></u-button>

      <u-button variant='ghost' icon='i-mdi-delete-outline' @click.stop='emit("remove", slug)'></u-button>
    </div>
  </button>
</template>

<script setup lang='ts'>
export interface Props {
  cardHeader: string;
  slug: string;
  showActions?: boolean;
  isSelected?: boolean;
}

export interface Emits {
  (e: 'selected', slug: string): void;
  (e: 'restore', slug: string): void;
  (e: 'remove', slug: string): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();
</script>

<style scoped>
.card {
  @apply w-[98%] ml-1 my-2 p-2 min-h-12 rounded-md text-black bg-white drop-shadow-lg;
}

.selected {
  @apply outline outline-2 outline-[#40A02B] dark:outline-[#A6E3A1];
}
</style>
