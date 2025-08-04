<script lang="ts">
import PostsList from './components/PostList.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollButtonsContainer from './components/ScrollButtonsContainer.vue';
import PostsView from './views/PostsView.vue';

export default {
  components: { PostsList, Navbar, Footer, ScrollButtonsContainer, PostsView},
};
</script>

<template>
  <div class="min-h-screen bg-(--bg-gray-primary) text-gray-100 flex flex-col">
    <Navbar class="mx-auto" />

    <main class="flex-grow">
      <section class="max-w-4xl mx-auto px-6 py-10">
        <div class="flex items-center space-x-3 mb-6">
          <div class="bg-(--bg-blue-primary) text-white p-2 rounded-full shadow">
            <svg class="w-5 h-5" fill="none" viewBox="2 2 20 20" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="M7 8h10M7 12h6m-6 4h8M5 21l1.25-3.75A7.975 7.975 0 015 12C5 7.582 8.582 4 13 4s8 3.582 8 8-3.582 8-8 8a8.975 8.975 0 01-4.25-1.062L5 21z" />
</svg>
          </div>
          <h2 class="text-2xl font-semibold text-white">Latest Posts</h2>
        </div>

        <div class="bg-(--bg-gray-secondary) border-1 border-gray-700 rounded-2xl shadow-lg p-6 transition-all">
          <PostsView />
        </div>
      </section>
    </main>

    <Footer />
    <ScrollButtonsContainer />
  </div>
</template>
