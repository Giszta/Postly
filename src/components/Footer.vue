<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer role="contentinfo" class="bg-(--bg-gray-secondary) border-t border-gray-700 text-center py-4 mt-8 text-sm text-gray-400">
    <p>
      © {{ currentYear }} Postly. Created with passion to coding.
    </p>
  </footer>
</template>
<script lang="ts">
export default {};
</script>


