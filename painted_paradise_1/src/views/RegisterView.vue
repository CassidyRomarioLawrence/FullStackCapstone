<template>
    <div class="container-fluid register p-3">
      <button class="btn btn-light btn-close" @click="goHome"></button>
      <RegisterC />
    </div>
  </template>
  
  <script>
  import RegisterC from '@/components/RegisterC.vue';
  
  export default {
    name: 'RegisterView',
    components: {
      RegisterC
    },
    methods: {
      goHome() {
        this.$router.push({ path: '/' }); // assuming you're using Vue Router
      }
    }
  }
  </script>
  
  <style scoped>
  .register {
    background-image: linear-gradient(180deg, #FFFFFF 0%, #C1A576 50%, #FD6162 100%);
    min-height: 100vh;
    position: relative;
  }
  
  .btn-close {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>
  