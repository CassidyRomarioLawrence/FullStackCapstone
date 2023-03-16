<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-1">
      <NavBar />
    </div>
    <div class="col-11">
      <section id="home">Home</section>
      <section id="about">About</section>
      <section id="shop"><a class="btn btn-danger" href="/paintings">shop</a></section>
      <section id="booking">Booking</section>
      <footer>Footer</footer>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

