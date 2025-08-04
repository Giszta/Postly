<template>
  <div class="flex flex-wrap justify-center gap-3 mt-12">
    <button
      v-for="n in totalPages"
      :key="n"
      @click="$emit('page-select', n)"
      class="min-w-[44px] px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition duration-200 text-center"
      :class="currentPage === n
        ? 'bg-(--bg-blue-primary) text-white shadow-md inset-ring-1 inset-ring-blue-300'
        : 'bg-gray-100 text-gray-700 cursor-pointer hover:bg-blue-300 border border-gray-300'"
    >
      {{ n }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  totalPages: number;
  currentPage: number;
}>();

defineEmits(['page-select']);
</script>
<script lang="ts">
export default {};
</script>