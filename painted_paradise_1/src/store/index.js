import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    product:null,
    users:null,
    message:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state,values){
      state.product = values
    },
    setUsers(state, users) {
      state.users = users
    },
    setMessage(state,message){
      state.message = message
    }
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
    async fetchProduct({ commit }, id) {
      const response = await axios.get(`https://cassidy-capstoneproject.onrender.com/product/${id}`);
      commit('setProduct', response.data)
      let {
        results,
        err
      } = await response.data;
      if (results) {
        commit('setProduct', results[0])
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
