<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import type { Post } from "../store/modules/posts/types";

defineProps<{
  post: Post;
  author: string;
  expanded: boolean;
  fullHeight: number;
  removing: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
  (e: "remove"): void;
  (e: "update:fullHeight", height: number): void;
}>();

const contentRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contentRef.value) {
    nextTick(() => {
      emit("update:fullHeight", contentRef.value!.scrollHeight);
    });
  }
});
</script>

<template v-if="!removing">
  <div
    class="bg-gray-100 border border-blue-300 rounded-3xl shadow-lg p-4 sm:p-8 mb-10 hover:shadow-blue-2xl transition duration-300"
  >
    <div class="flex flex-col gap-4 mb-6">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-700 capitalize">
        {{ post.title }}
      </h2>

      <div
        class="relative overflow-hidden transition-all duration-500 ease-in-out"
        :style="{ maxHeight: expanded ? fullHeight + 'px' : '3.6rem' }"
      >
        <div
          class="text-gray-700 text-[1.1rem] leading-relaxed font-light"
          ref="contentRef"
        >
          {{ post.body }}
        </div>
        <div
          v-if="!expanded"
          class="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-gray-100 via-gray-100/70 to-transparent"
        />
      </div>

      <button
        @click="$emit('toggle')"
        class="cursor-pointer mt-2 flex items-center gap-1 text-(--text-blue-primary) hover:text-(--text-blue-hover) font-semibold transition group"
      >
        <span>{{ expanded ? "See less" : "See more" }}</span>
        <svg
          class="w-4 h-4 transform transition-transform duration-300"
          :class="expanded ? 'rotate-180' : 'rotate-0'"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>

    <div
      class="flex justify-between items-center border-t pt-4 text-xs sm:text-sm text-gray-500"
    >
      <span class="italic">
        Author:
        <span class="font-medium text-gray-700">{{ author }}</span>
      </span>
      <button
        @click="$emit('remove')"
        class="cursor-pointer flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Delete post
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>