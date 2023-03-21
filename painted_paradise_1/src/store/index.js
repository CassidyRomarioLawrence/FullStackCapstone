import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    product:null,
    users:null,
    message:null,
    loader:true
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
    },
    setLoader(state, value) {
      state.loader = value
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/products');
      commit('setLoader', true)
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
      commit('setLoader', false)
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
     async addProduct({ commit , dispatch}, productData) {
    try {
      const response = await axios.post('https://cassidy-capstoneproject.onrender.com/product', productData);
      commit('setProduct', response.data);
      commit('setMessage', 'Product added successfully');
      dispatch('fetchProducts')
    } catch (error) {
      commit('setMessage', 'Failed to add product');
    }
    },
     async deleteProduct({ commit, dispatch }, id) {
    try {
      await axios.delete(`https://cassidy-capstoneproject.onrender.com/product/${id}`);
      commit('setMessage', 'Product deleted successfully');
      dispatch('fetchProducts');
    } catch (error) {
      commit('setMessage', 'Failed to delete product');
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
