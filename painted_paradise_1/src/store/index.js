import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    // setProduct(state, product) {
    //   state.product = product;
    // },
    // setMessage(state, message) {
    //   state.message = message;
    // }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/products');
      commit('setProducts', response.data);
    },
  },
  modules: {
  }
})
