<template>
  <div class='card flex justify-between items-center'>
    <p>{{ cardHeader }}</p>

    <div v-if='showActions'>
      <u-button variant='ghost' icon='i-mdi-restore'></u-button>

      <u-button variant='ghost' icon='i-mdi-delete-outline'></u-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
export interface Props {
  cardHeader: string;
  showActions: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.card {
  @apply my-2 p-2 rounded-md text-black bg-white drop-shadow-lg;
}
</style>
