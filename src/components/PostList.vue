<script setup lang="ts">
import { ref } from 'vue';
import PostCard from './PostCard.vue';
import type { Post } from "../store/modules/posts/types";

const { posts, getAuthor, remove } = defineProps<{
  posts: Post[];
  getAuthor: (id: number) => string;
  remove: (id: number) => void;
}>();

const expanded = ref<Record<number, boolean>>({});
const fullHeights = ref<Record<number, number>>({});
const removing = ref<Set<number>>(new Set()); 

const toggle = (id: number) => {
  expanded.value[id] = !expanded.value[id];
};

const handleRemove = (id: number) => {
  removing.value.add(id);


  setTimeout(() => {
    removing.value.delete(id);
    remove(id); 
  }, 300); 
};
</script>

<template>
  <transition-group name="fade-slide" tag="div">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      v-show="!removing.has(post.id)"
      :post="post"
      :author="getAuthor(post.userId)"
      :expanded="expanded[post.id] ?? false"
      :fullHeight="fullHeights[post.id] ?? 0"
      :removing="removing.has(post.id)"
      @toggle="toggle(post.id)"
      @remove="handleRemove(post.id)"
      @update:fullHeight="h => fullHeights[post.id] = h"
    />
  </transition-group>
</template>

<script lang="ts">
export default {};
</script>
