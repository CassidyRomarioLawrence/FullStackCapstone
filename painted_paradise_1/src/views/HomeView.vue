<template>
<div class="container-fluid">
  <div class="row no-gutters">
    <NavBar />
    <main class="col-12 px-0">
      <div class="container-fluid" id="home">
        <div class="landing-text">
          <LandingC />
        </div>
      </div>
      <div class="container-fluid" id="about">
        <h4>About Us</h4>
        <AboutUs />
      </div>
      <div class="container-fluid" id="shop">
        <h4>Shop With Us</h4>
        <ShopC />
      </div>
    </main>
    <footer class="container-fluid px-0 justify-content-center">
      <FooterC />
    </footer>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LandingC from '@/components/LandingC.vue';
import AboutUs from '@/components/AboutUs.vue';
import ShopC from '@/components/ShopC.vue';
import FooterC from '@/components/FooterC.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingC,
    AboutUs,
    ShopC,
    FooterC
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
  background-color: #FBDA61;
  background-image: linear-gradient(45deg, #869193 0%, #FD6162 100%);
  min-height: 100vh;
}
#about h4{
  font-size: 3.5vw;
  text-align: center;
  padding: 2px 0;
  font-family: 'Dancing Script', cursive;
  text-shadow: 3px 3px 3px black;
  color: white;
}
#shop h4{
  font-size: 3.5vw;
  text-align: center;
  padding: 2px 0;
  font-family: 'Dancing Script', cursive;
  text-shadow: 3px 3px 3px #869193;
}
#shop{
  background-color: #FFFFFF;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #C1A576 50%, #FD6162 100%);
}
</style>