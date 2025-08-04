import axios from 'axios';
import type { State } from './state';
import type { Post } from './types';

export const actions = {
  async fetchUsers({ commit }: any) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    const userMap = Object.fromEntries(data.map((u: any) => [u.id, u.name]));
    commit('setUsers', userMap);
  },

  async fetchPosts({ commit, state }: { commit: any; state: State }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

    const userIds = Object.keys(state.users).map(Number);
    const randomizedPosts = data.map((post: Post) => ({
      ...post,
      userId: userIds[Math.floor(Math.random() * userIds.length)],
    }));

    commit('setPosts', randomizedPosts);
  },
};
