<template>
<div class="container">
  <div class="row justify-content-center align-items-center">
    <div v-for="product in filteredProducts" :key="product.id" class="col-md-4">
    <div class="card m-3" style="width: 18rem;">
      <img :src="product.prodImage" class="card-img-top img-fluid" style="object-fit: cover; height: 50vh;">
    <div class="card-body">
      <h5 class="card-title">{{ product.prodName }}</h5>
      <p class="card-text">Price : R{{product.prodPrice}}</p>
      <router-link :to="{name: 'product', params : {id: product.id}}">
        <button class="btn btn-info">View Product</button>
      </router-link>
    </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';

export default {
  setup() {
        const store = useStore()
    store.dispatch("fetchProducts")
        const products = computed(() => store.state.products)
         const filteredProducts = computed(() => {
      const category = "Tools"; // Replace CategoryName with the actual category name
      return Array.isArray(products.value)
      ? products.value.filter(product => product.category === category)
      : []
    })
    return {
            filteredProducts
        }
    },
    }
</script>

<style scoped>

</style>