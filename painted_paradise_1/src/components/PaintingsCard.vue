<template>
  <div v-if="loader" class="loader-container"> 
    <Loader />
  </div>
  <div v-else>
<div class="container text-center">
  <div class="row justify-content-center align-items-center">
      <div v-for="product in filteredProducts2" :key="product.id" class="col-md-4">
    <div class="card m-3" style="width: 18rem;">
      <img :src="product.prodImage" class="card-img-top img-fluid" style="object-fit: cover; height: 50vh;">
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
    </div>
</div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  name: 'PaintingsCard',
  components:{
    Loader
  },
  setup() {
        const store = useStore()
    store.dispatch("fetchProducts")
        const products = computed(() => store.state.products)
        const loader = computed(() => store.state.loader)
        const filteredProducts2 = computed(() => {
      const category = "Paintings";
      return Array.isArray(products.value)
      ? products.value.filter(product => product.category === category)
      : []
    })
    return {
            filteredProducts2,
            loader
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