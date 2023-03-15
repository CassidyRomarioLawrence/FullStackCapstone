<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
    const store = useStore();
    store.dispatch('fetchProducts');
    return {
      products: store.state.products,
    };
  },
    }
</script>

<style scoped>

</style>