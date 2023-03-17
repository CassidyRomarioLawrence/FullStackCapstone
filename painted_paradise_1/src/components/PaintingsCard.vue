<template>
  <div v-for="product in filteredProducts2" :key="product.id">
    <div class="card m-3" style="width: 18rem;">
  <img :src="product.prodImage" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.prodName }}</h5>
    <p class="card-text">Artist : {{product.artistName}}</p>
    <p class="card-text">Price : {{product.prodPrice}}</p>
    <router-link :to="{name: 'product', params : {id: product.id}}">
                        <button class="btn btn-info">View Product</button>
                      </router-link>
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
         const filteredProducts2 = computed(() => {
      const category = "Paintings"; // Replace CategoryName with the actual category name
      return Array.isArray(products.value)
      ? products.value.filter(product => product.category === category)
      : []
    })
    return {
            filteredProducts2
        }
    },
    }
</script>

<style scoped>

</style>