<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center">
        <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

  export default {
  name: 'ContactView',
  components: {
      ProductCard
    }
  }
</script>

<style scoped>

</style>
