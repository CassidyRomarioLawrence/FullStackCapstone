<template>
    <div class="container-fluid login">
        <h5 class="display-5 text-center mt-4">Welcome Back Please Login</h5>
        <LoginC />
    </div>
</template>

<script>
import LoginC from '@/components/LoginC.vue';

    export default {
    name: 'LoginView',
    components: {
            LoginC
        }
    }
</script>

<style scoped>
.login{
    background-image: linear-gradient(180deg, #FFFFFF 0%, #C1A576 50%, #FD6162 100%);
    min-height: 100vh;
}

h5{
    font-family: 'Dancing Script', cursive;
}
</style>