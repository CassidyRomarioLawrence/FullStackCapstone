<template>
    <div class="container title d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col company px-5">
                <h1>Painted Paradise</h1>
                <p>From contemporary to classic, we have something to inspire every art aficionado.</p>
            </div>
        </div>
    </div>
    <div class="container">
      <a v-if="!isLoggedIn" href="/login">
          <button class="btn top-right btn-login">Login</button>
        </a>
        <a v-if="isLoggedIn" href="/profile">
          <i class="bi bi-person-circle top-right"></i>
        </a>
</div>
</template>

<script>
    export default {
        name: 'LandingC',
        data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    }
  }
    }
</script>

<style>

.btn-login{
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
}

.title{
    min-height: 100vh;
}

.company h1{
    color: #FD6162;
    font-family: 'Dancing Script', cursive;
    text-shadow: 3px 3px 3px black;
    font-size: 11vw;
    text-align: center;
}

.company p{
    color: white;
    text-align: center;
    font-family: 'Philosopher', sans-serif;
    text-shadow: 3px 3px 3px black;
    background-color: #FD6162;
    font-size: 1.5vw;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .company h1 {
    font-size: 20vw;
  }
  .company p {
    font-size: 2.8vw;
    padding: 0 10px;
  }
}

</style>