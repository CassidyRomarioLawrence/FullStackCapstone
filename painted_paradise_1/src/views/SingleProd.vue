<template>
    <div class="container-fluid single">
        <div class="row justify-content-center">
            <h2 class="display-2 m-3 text-center">Product Details : </h2>
            <SingleC />
        </div>
    </div>
</template>

<script>
import SingleC from '@/components/SingleProd.vue';

    export default {
        name:'SingleProd',
        components:{
            SingleC
        },
    }
</script>

<style scoped>
.single{
  background-color: #FFFFFF;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #C1A576 50%, #FD6162 100%);
  min-height: 100vh;
}

h2{
    font-family: 'Dancing Script', cursive;
}
</style>