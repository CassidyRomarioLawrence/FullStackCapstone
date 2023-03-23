<template>
<div v-if="loader" class="loader-container">
<Loader />
</div>
<div v-else>
    <div class="container-fluid">
        <div class="col-6">
            <img :src="product?.prodImage" alt="" style="width: 18rem;">
        </div>
        <div class="col-6">
            <h2>Product Name : {{ product?.prodName }}</h2><br><br>
            <h5>Artist : {{ product?.artistName }}</h5><br><br>
            <h6>Description : </h6><br>
            <p>{{ product?.prodDesc }}</p><br><br>
            <h5>Price : R {{ product?.prodPrice }}</h5>
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
    return { product,loader }
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
</style>