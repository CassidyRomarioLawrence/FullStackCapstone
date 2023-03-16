<template>
  <div v-for="product in products" :key="product.id">
    <div class="card m-3" style="width: 18rem;">
  <img :src="product.prodImage" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.prodName }}</h5>
    <p class="card-text">Artist : {{product.artistName}}</p>
    <p class="card-text">Price : {{product.prodPrice}}</p>
    <a href="#" class="btn btn-primary">View Product</a>
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
        return {
            products
        }
    },
    }
</script>

<style scoped>

</style>