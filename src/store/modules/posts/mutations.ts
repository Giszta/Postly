import type { State } from './state';
import type { Post } from './types';

export const mutations = {
  setPosts(state: State, posts: Post[]) {
    state.posts = posts;
  },
  setUsers(state: State, users: Record<number, string>) {
    state.users = users;
  },
  setCurrentPage(state: State, page: number) {
    state.currentPage = page;
  },
  removePost(state: State, id: number) {
    state.posts = state.posts.filter((p) => p.id !== id);
  },
};
