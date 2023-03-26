import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    products: null,
    product: null,
    users: null,
    message: null,
    loader: true,
    cart: []
  },
  
  mutations: {

// =========PRODUCT MUTATIONS====================
    
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state,values){
      state.product = values
    },

// =========USER MUTATIONS=======================
    
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('user')
    },

// =========MESSAGE MUTATION=====================
    
    setMessage(state,message){
      state.message = message
    },

// =========LOADER MUTATION========================
    
    setLoader(state, value) {
      state.loader = value
    },

// =======CART MUTATION=============================
  
addToCart(state, product) {
  state.cart.push(product)
},
  },
    
actions: {
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
    commit('setMessage', 'Welcome new user,please login.');
    dispatch('fetchUsers');
  } catch (error) {
    commit('setMessage', 'Failed to register user.');
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
async fetchUser({ commit }) {
  try {
    const response = await axios.get(`https://cassidy-capstoneproject.onrender.com/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('jToken')}` }
    });
    commit('setUser', response.data);
  } catch (error) {
    commit('unsetUser');
  }
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
    const res = await axios.post(`https://cassidy-capstoneproject.onrender.com/login`, payload);
    console.log('Results:', res);
    const { result, jToken, msg, err } = await res.data;
    if (result) {
      context.commit('setUser', result);
      localStorage.setItem('user_token', jToken);
      localStorage.setItem('user', JSON.stringify(result));
      context.commit('setMessage', msg);
    } else {
      context.commit('setMessage', err);
    }
  } catch (error) {
    console.error(error);
  }
},

// ==============LOGOUT================================

logout({ commit }) {
  commit('logout')
  window.location.href = '/'
  window.location.reload()
},

// ===============CART ACTIONS==========================

},
  modules: {
  }
})
