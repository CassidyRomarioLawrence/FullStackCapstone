<template>
  <div v-if="loader" class="loader-container">
    <Loader />
  </div>
  <div v-else>
    <div class="container-fluid single-prod">
      
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6 text-center">
          <img :src="product?.prodImage" alt="" style="width: 20rem; margin-right: 2rem;">
          <button class="btn btn-success mt-3">Add to cart</button>
        </div>
        <div class="col-md-6 " style="padding-right: 2rem;">
          <h5 class="display-5">Product Name : </h5>
          <p>{{ product?.prodName }}</p><br>
          <h5 class="display-5">Artist : </h5>
          <p>{{ product?.artistName }}</p><br>
          <h5 class="display-5">Description : </h5>
          <p>{{ product?.prodDesc }}</p><br>
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.single-prod h5{
    font-family: 'Dancing Script', cursive;
}
.single-prod p{
    font-family: 'Philosopher', sans-serif;
}
</style>

