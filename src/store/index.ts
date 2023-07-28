import { createStore } from 'vuex';
import http from '../http';

export default createStore({
  state: {
    peoples: [],
    favorites: [],
    currentPage: 1,
    foundPeoples: [],
  },
  getters: {
    peopleList(state) {
      return state.peoples;
    },
    favoriteList(state) {
      return state.favorites;
    },
  },
  mutations: {
    SET_LIST_PEOPLES: (state, peoples) => {
      state.peoples = peoples;
    },
    SET_LIST_FOUND_PEOPLES: (state, peoples) => {
      state.foundPeoples = peoples;
    },
    TOGGLE_FAVORITE: (state: any, item: any) => {
      const isFindFavorite = state.favorites.find((f: any) => f.created === item.created);
      if (isFindFavorite) {
        state.favorites = state.favorites.filter((f: any) => f.created !== item.created);
        return;
      }
      state.favorites.push(item);
    },
    SET_FAVORITES: (state, favorites) => {
      state.favorites = favorites;
    },
  },
  actions: {
    async fetchPeoplesBySearch({ commit }, searchStr) {
      try {
        const res = await http.get(`/api/people/?search=${searchStr}`);
        commit('SET_LIST_FOUND_PEOPLES', res.data.results);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchPeoples({ commit }) {
      try {
        const res = await http.get('/api/people');
        console.log(res);
        commit('SET_LIST_PEOPLES', res.data.results);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {
  },
});
