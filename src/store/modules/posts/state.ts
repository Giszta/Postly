import type { Post } from './types';

export interface State {
  posts: Post[];
  users: Record<number, string>;
  currentPage: number;
}

export const state = (): State => ({
  posts: [],
  users: {},
  currentPage: 1,
});
