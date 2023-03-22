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
  commit('setLoader', true)
  try {
    const response = await axios.get(`https://cassidy-capstoneproject.onrender.com/product/${id}`);
    let {
      results,
      err
    } = await response.data;
    if (results) {
      commit('setProduct', results[0])
    } else {
      commit('setMessage', err)
    }
  } catch (error) {
    commit('setMessage', error.message)
  }
  commit('setLoader', false)
},
async addProduct({ commit, dispatch }, data) {
  try {
    commit('setLoader', true);
    const response = await axios.post('https://cassidy-capstoneproject.onrender.com/product', data);
    commit('setProduct', response.data);
    commit('setMessage', 'Product added successfully');
    dispatch('fetchProducts');
  } catch (error) {
    commit('setMessage', 'Failed to add product');
  }
  commit('setLoader', false);
},
async deleteProduct({ commit, dispatch }, id) {
  try {
    await axios.delete(`https://cassidy-capstoneproject.onrender.com/product/${id}`);
    commit('setMessage', 'Product deleted successfully');
    commit('setLoader', true)
    dispatch('fetchProducts');
    commit('setLoader', false)
  } catch (error) {
    commit('setMessage', 'Failed to delete product');
  }
},
    async fetchUsers({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/users');
      commit('setLoader', true)
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
      commit('setLoader', false)
    },
async addUser({ commit, dispatch }, data) {
  try {
    commit('setLoader', true);
    const response = await axios.post('https://cassidy-capstoneproject.onrender.com/register', data);
    commit('setUsers', response.data);
    commit('setMessage', 'User added successfully');
    dispatch('fetchUsers');
  } catch (error) {
    commit('setMessage', 'Failed to add product');
  }
  commit('setLoader', false);
},
  },
  modules: {
  }
})
