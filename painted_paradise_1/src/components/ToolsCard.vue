<template>
  <div v-if="loader" class="loader-container">
    <loader />
  </div>
  <div v-else>
    <div class="container">
      <div class="row justify-content-center">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-4
        col-sm-6 mb-4">
          <div class="card" style="width: 16rem;">
            <img :src="product.prodImage" class="card-img-top img-fluid" style="object-fit: cover; height: 30vh;">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">Price : R{{product.prodPrice}}</p>
              <router-link :to="userLoggedIn ? { name: 'product', params: { id: product.productId } } : '/login'">
  <button v-if="userLoggedIn" class="btn btn-info">View Product</button>
  <button v-else class="btn btn-info">Log in to View Product</button>
</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import Loader from './Loader.vue';

export default {
  components: {
    Loader
  },
  setup() {
    const store = useStore()
    store.dispatch("fetchProducts")
    const products = computed(() => store.state.products)
    const loader = computed(() => store.state.loader)
    const filteredProducts = computed(() => {
      const category = "Tools";
      return Array.isArray(products.value)
        ? products.value.filter(product => product.category === category)
        : []
    })
    const userLoggedIn = computed(() => {
      return localStorage.getItem('user_token') !== null
    });
    return {
      filteredProducts,
      loader,
      userLoggedIn,
    }
  },
}
</script>


<style scoped>
.loader-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>