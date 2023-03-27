<template>
    <div class="bg-img">
        <div class="container-fluid tools">
            <div class="top-display mb-5">
                <div class="row justify-content-center">
                    <div class="col d-flex bg-light p-2">
                        <button class="btn btn-light btn-close" @click="goBack"></button>
                        <img src="https://i.postimg.cc/JnXRtphM/c-2.gif" alt="" style="width: 4rem;">
                        <h5 class="display-5 mx-3">PaintedParadise</h5>
                    </div>
                </div>
            </div>
            <div class="our-tools">
                <h6 class="display-6 text-center">Our Canvas Tools :</h6>
                <ToolsCard />
            </div>
        </div>
    </div>
</template>

<script>
import ToolsCard from '@/components/ToolsCard.vue';

    export default {
    name: 'PaintingsView',
    components: {
            ToolsCard
        },
        methods:{
            goBack() {
    window.history.go(-1);
  }
        }
    }
</script>
<style scoped>
.tools {
  backdrop-filter: blur(5px);
  height: 100%;
  padding: 2rem;
}

.bg-img {
  background-image: url(https://i.postimg.cc/ZKHZ16bL/pexels-ovan-545580.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
}

h6 {
  font-family: 'Dancing Script', cursive;
  text-shadow: 3px 3px 3px #FD6162;
  font-size: 2rem;
}

.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  h6 {
    font-size: 1.5rem;
  }
  
  .btn-close {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
}
</style>
