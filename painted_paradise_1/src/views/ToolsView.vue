<template>
    <div class="bg-img">
        <div class="container-fluid tools">
            <div class="top-display mb-5">
                <div class="row">
                    <div class="col d-flex bg-light p-2">
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
        }
    }
</script>
<style scoped>
.tools{
    backdrop-filter: blur(5px);
    min-height: 100vh;
}

.bg-img{
    background-image: url(https://i.postimg.cc/ZKHZ16bL/pexels-ovan-545580.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

h6{
    font-family: 'Dancing Script', cursive;
}
</style>