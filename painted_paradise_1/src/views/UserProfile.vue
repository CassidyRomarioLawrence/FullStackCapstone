<template>
    <div class="container-fluid register">
        <button class="btn btn-light btn-close" @click="goHome"></button>
        <h1 class="display-1">User Profile</h1>
        <ProfileView />
    </div>
</template>

<script>
import ProfileView from '@/components/ProfileView.vue';

    export default {
    name: "ProfileV",
    components: {
        ProfileView
    }
}
</script>

<style scoped>
h1{
    font-family: 'Dancing Script', cursive;
    text-align: center;
}
.btn-close {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .register{
    background-image: linear-gradient(180deg, #FFFFFF 0%, #C1A576 50%, #FD6162 100%);
    min-height: 100vh;
    position: relative;
  }
</style>