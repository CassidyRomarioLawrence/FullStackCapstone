import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    users:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/products');
      commit('setProducts', response.data)
      let {
        results,
        err
      } = await response.data;
      if (results) {
        commit('setProducts', results)
      } else {
        commit('setMessage', err)
      }
    },
    async fetchUsers({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/users');
      commit('setUsers', response.data)
      let {
        results,
        err
      } = await response.data;
      if (results) {
        commit('setUsers', results)
      } else {
        commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
