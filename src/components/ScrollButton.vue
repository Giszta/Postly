<script setup lang="ts">
defineProps<{
  direction: "up" | "down";
  onClick: () => void;
}>();
</script>

<template>
  
    <button
      @click="onClick"
      class="scroll-button"
      :class="direction === 'up' ? 'bottom-[60px]' : 'bottom-0'"
      :aria-label="`Scroll to ${direction}`"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          :d="direction === 'up' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"
        />
      </svg>
    </button>
  
</template>

<script lang="ts">
export default {};
</script>