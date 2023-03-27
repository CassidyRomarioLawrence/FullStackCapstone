<template>
    <div class="bg-img">
        <div class="container-fluid paints">
            <div class="top-display mb-5">
                <div class="row">
                    <div class="col d-flex bg-light p-2">
                        <button class="btn btn-light btn-close" @click="goBack"></button>
                        <img src="https://i.postimg.cc/JnXRtphM/c-2.gif" alt="" style="width: 4rem;">
                        <h5 class="display-5 mx-3">PaintedParadise</h5>
                    </div>
                </div>
            </div>
            <div class="our-paints">
                <h6 class="display-6 text-center">Our Canvas Paintings :</h6>
                <ProductCard />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/PaintingsCard.vue';

    export default {
    name: 'PaintingsView',
    components: {
            ProductCard
        },
        methods:{
            goBack() {
    window.history.go(-1);
  }
        }
    }
</script>
<style scoped>
.paints{
    backdrop-filter: blur(5px);
    min-height: 100vh;
}

.bg-img{
    background-image: url(https://i.postimg.cc/Dzv95qg9/pexels-matheus-bertelli-11489982.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

h6{
    font-family: 'Dancing Script', cursive;
    text-shadow: 3px 3px 3px #FD6162;
}
.btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>