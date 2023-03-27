<template>
  <div v-if="loader" class="loader-container">
    <Loader />
  </div>
  <div v-else>
    <div class="container single-prod">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-6 col-md-12 mb-3 text-center">
          <img :src="product?.prodImage" alt="" class="w-100">
          <button class="btn btn-success mt-3">Add to cart</button>
        </div>
        <div class="col-lg-6 col-md-12 mb-3">
          <h5 class="display-5">Product Name : </h5>
          <p>{{ product?.prodName }}</p>
          <h5 class="display-5">Artist : </h5>
          <p>{{ product?.artistName }}</p>
          <h5 class="display-5">Description : </h5>
          <p>{{ product?.prodDesc }}</p>
          <h5 class="display-5">Price : </h5>
          <p>R {{ product?.prodPrice }}</p>
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
  name: 'SingleC',
  components: {
    Loader
  },
  setup() {
    const store = useStore()
    const product = computed(() => store.state.product)
    const loader = computed(() => store.state.loader)
    return { product, loader }
  },

  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id)
  }
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

.single-prod {
  min-height: 80vh;
}

.single-prod h5{
  font-family: 'Dancing Script', cursive;
}

.single-prod p{
  font-family: 'Philosopher', sans-serif;
}
</style>

