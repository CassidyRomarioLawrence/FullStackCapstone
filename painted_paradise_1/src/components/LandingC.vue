<template>
    <div class="container title d-flex align-items-center">
        <div class="row">
            <div class="col company px-5">
                <h1>PaintedParadise</h1>
                <p>"Welcome to our art website, where creativity meets the digital canvas. From contemporary to classic, we have something to inspire every art aficionado. Take a stroll through our virtual gallery and discover the endless possibilities of the art world. We're excited to have you here, so grab your paintbrush and let's dive in!"</p>
            </div>
        </div>
    </div>
    <div class="container">
  <button class="btn btn-top-right bg-success"><span>Login</span>
</button>
</div>
</template>

<script>
    export default {
        name: 'LandingC'
    }
</script>

<style>
.title{
    min-height: 100vh;
}

.company h1{
    color: #FD6162;
    font-family: 'Dancing Script', cursive;
    text-shadow: 3px 3px 3px #C1A576;
    font-size: 10vw;
}

.company p{
    color: #232323;
    font-family: 'Anton', sans-serif;
    font-size: 1.5vw;
}

.btn-top-right {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
}


</style>