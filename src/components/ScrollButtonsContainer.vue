<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ScrollButton from './ScrollButton.vue';

const showUp = ref(false);
const showDown = ref(true);

const threshold = 200;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

const handleScroll = () => {
  const { scrollY, innerHeight } = window;
  const { scrollHeight } = document.documentElement;
  const scrollBottom = scrollHeight - (scrollY + innerHeight);

  showUp.value = scrollY > threshold;
  showDown.value = scrollBottom > threshold;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>


<template>
  <div class="fixed bottom-4 right-4 flex flex-col-reverse items-end gap-3 z-50 h-[108px]">
    <transition name="fade-slide-up">
  <ScrollButton v-if="showUp" direction="up" :onClick="scrollToTop" />
</transition>
    <transition name="fade-slide-down">
  <ScrollButton v-if="showDown" direction="down" :onClick="scrollToBottom" />
</transition>
  </div>
</template>
<script lang="ts">
export default {};
</script>