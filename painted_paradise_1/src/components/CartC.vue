<template>
    <div>
      <h1>Cart</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }} - {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: []
      }
    },
    methods: {
      addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          product.quantity = 1;
          cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cartItems = cart;
      },
      removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProduct = cart.find(p => p.id === productId);
        if (existingProduct) {
          if (existingProduct.quantity > 1) {
            existingProduct.quantity--;
          } else {
            cart = cart.filter(p => p.id !== productId);
          }
          localStorage.setItem('cart', JSON.stringify(cart));
          this.cartItems = cart;
        }
      },
      clearCart() {
        localStorage.removeItem('cart');
        this.cartItems = [];
      }
    },
    created() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartItems = cart;
    }
  }
  </script>
  