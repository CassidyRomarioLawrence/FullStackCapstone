import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com');
      commit('setProducts', response.data);
    },
  },
  modules: {
  }
})
