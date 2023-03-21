<template>
<div class="container-fluid">
  <div class="row no-gutters">
    <NavBar />
    <main class="col-12 px-0">
      <div class="container-fluid" id="home">
        <LandingC />
      </div>
      <div class="container-fluid" id="about">
        <!-- Content for section 2 goes here -->
      </div>
      <div class="container-fluid" id="shop">
        <!-- Content for section 3 goes here -->
      </div>
    </main>
    <footer>

    </footer>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LandingC from '@/components/LandingC.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingC
  }
}
</script>
<style>
#home{
  background-image: url(https://i.postimg.cc/qMcywvtw/pexels-pavel-danilyuk-8382258.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}

#about{
  background-image: linear-gradient();
}
</style>
