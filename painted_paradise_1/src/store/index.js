import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    products: null,
    product:null,
    users:null,
    message:null,
    loader: true,
    cart:[]
  },
  getters: {
  },
  mutations: {

    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setMessage(state, message) {
      state.message = message;
    }
=======

// =========PRODUCT MUTATIONS====================
    
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state,values){
      state.product = values
    },

// =========USER MUTATIONS=======================
    
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setUsers(state, users) {
      state.users = users
    },

// =========MESSAGE MUTATION=====================
    
    setMessage(state,message){
      state.message = message
    },

// =========LOADER MUTATION========================
    
    setLoader(state, value) {
      state.loader = value
    }
  },

// =======CART MUTATION=============================
  
addToCart(state, product) {
      state.cart.push(product)
  },
    
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://cassidy-capstoneproject.onrender.com/products');
      commit('setProducts', response.data);
    },
  },

// ==================PRODUCT ACTIONS=======================

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
    async updateProduct({ commit, dispatch }, data) {
  try {
    commit('setLoader', true);
    const response = await axios.put(`https://cassidy-capstoneproject.onrender.com/product/${data.id}`, data);
    commit('setProduct', response.data);
    commit('setMessage', 'Product updated successfully');
    dispatch('fetchProducts');
  } catch (error) {
    commit('setMessage', 'Failed to update product');
  }
  commit('setLoader', false);
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

// =================USER ACTIONS=======================

async deleteUser({ commit, dispatch }, id) {
  try {
    await axios.delete(`https://cassidy-capstoneproject.onrender.com/user/${id}`);
    commit('setMessage', 'User deleted successfully');
    commit('setLoader', true)
    dispatch('fetchUsers');
    commit('setLoader', false)
  } catch (error) {
    commit('setMessage', 'User to delete product');
  }
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
async fetchUser ({commit}) {
  const res = await axios.get(`https://cassidy-capstoneproject.onrender.com/user`)
  commit('setUser', res.data)
    },
async updateUser({ commit, state }, data) {
  try {
    commit('setLoader', true);
    const response = await axios.put(`https://cassidy-capstoneproject.onrender.com/user/${state.user.id}`, data);
    commit('setUser', response.data);
    commit('setMessage', 'User updated successfully');
  } catch (error) {
    commit('setMessage', 'Failed to update user');
  }
  commit('setLoader', false);
},

// ================LOGIN===============================

async login(context, payload) {
  try {
    const res = await axios.post('https://cassidy-capstoneproject.onrender.com/login', payload);
    console.log('Results:', res);
    const { result, jwToken, msg, err } = await res.data;
    if (result) {
      context.commit('setUser', result);
      context.commit('setToken', jwToken);
      localStorage.setItem('login_token', jwToken);
      localStorage.setItem('user', JSON.stringify(result));
      context.commit('setMessage', msg);
    } else {
      context.commit('setMessage', err);
    }
  } catch (error) {
    console.error(error);
  }
    },

// ===============CART ACTIONS==========================
addToCart({ commit, state }, product) {
    const cartItem = state.cart.find(item => item.id === product.id)
    if (cartItem) {
      cartItem.quantity++
      commit('setMessage', 'Product quantity updated in cart')
    } else {
      product.quantity = 1
      state.cart.push(product)
      commit('setMessage', 'Product added to cart')
    }
  }
},
  modules: {
  }
})
