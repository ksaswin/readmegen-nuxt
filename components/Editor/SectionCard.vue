<template>
  <button class='card flex justify-between items-center' :class='{ selected: isSelected }'>
    <p>{{ cardHeader }}</p>

    <div v-if='showActions'>
      <u-button variant='ghost' icon='i-mdi-restore'></u-button>

      <u-button variant='ghost' icon='i-mdi-delete-outline'></u-button>
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

defineProps<Props>();
</script>

<style scoped>
.card {
  @apply w-[98%] ml-1 my-2 p-2 min-h-12 rounded-md text-black bg-white drop-shadow-lg;
}

.selected {
  @apply outline outline-2 outline-[#40A02B] dark:outline-[#A6E3A1];
}
</style>
