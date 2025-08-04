<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from "vue";
import { useStore } from "vuex";

import PostList from "../components/PostList.vue";
import Pagination from "../components/Pagination.vue";
import type { Post } from "../store/modules/posts/types";

const store = useStore();

const posts = computed(() => store.getters["posts/paginatedPosts"] as Post[]);
const totalPages = computed(() => store.getters["posts/totalPages"]);
const currentPage = computed(() => store.state.posts.currentPage);

const authorsMap = ref<Record<number, string>>({});

const getAuthor = (id: number) => authorsMap.value[id] || "Nieznany";

const assignRandomAuthors = () => {
  const users = Object.entries(store.state.posts.users);
  posts.value.forEach((post) => {
    if (!(post.id in authorsMap.value)) {
      const [_, name] = users[Math.floor(Math.random() * users.length)] || [];
      authorsMap.value[post.id] = (typeof name === "string" ? name : "Nieznany");
    }
  });
};


const setPage = (n: number) => {
  store.commit("posts/setCurrentPage", n);
  window.scrollTo({ top: 0, behavior: "smooth" });
  nextTick(assignRandomAuthors);
};

const remove = (id: number) => {
  store.commit("posts/removePost", id);
};

onMounted(async () => {
  await store.dispatch("posts/fetchUsers");
  await store.dispatch("posts/fetchPosts");
  assignRandomAuthors();
});
</script>

<template>
  <div class="max-w-6xl mx-auto sm:px-6 sm:py-12 font-sans">
    <PostList :posts="posts" :getAuthor="getAuthor" :remove="remove" />

    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      @page-select="setPage"
    />
  </div>
</template>
<script lang="ts">
export default {};
</script>