<template>
  <div v-if="loader" class="loader-container">
    <loader />
  </div>
  <div v-else>
    <div class="container text-center">
      <div class="row justify-content-center align-items-center">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-3">
          <div class="card m-3" style="width: 16rem;">
            <img :src="product.prodImage" class="card-img-top img-fluid" style="object-fit: cover; height: 30vh;">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">Price : R{{product.prodPrice}}</p>
              <router-link :to="{name: 'product', params : {id: product.id}}">
                <button v-if="isUserLoggedIn" class="btn btn-info">View Product</button>
                <button v-else class="btn btn-info" disabled>Please Log In to View Product</button>
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
    const isUserLoggedIn = computed(() => {
      return localStorage.getItem('user_token') !== null;
    });
    return {
      filteredProducts,
      loader,
      isUserLoggedIn,
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