import type { State } from './state';
import type { Post } from './types';

export const getters = {
  paginatedPosts: (state: State): Post[] => {
    const start = (state.currentPage - 1) * 10;
    return state.posts.slice(start, start + 10);
  },
  totalPages: (state: State): number => Math.ceil(state.posts.length / 10),
};
