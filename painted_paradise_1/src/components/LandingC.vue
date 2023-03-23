<template>
    <div class="container title d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col company px-5">
                <h1>PaintedParadise</h1>
                <p>From contemporary to classic, we have something to inspire every art aficionado.</p>
            </div>
        </div>
    </div>
    <div class="container">
  <a href="/login"><button class="btn btn-top-right bg-success">Login
</button></a>
<a href="/profile"><button class="btn btn-top-right bg-danger">Profile
</button></a>
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
    text-shadow: 3px 3px 3px black;
    font-size: 10rem;
}

.company p{
    color: white;
    text-align: center;
    font-family: 'Philosopher', sans-serif;
    text-shadow: 3px 3px 3px black;
    background-color: #FD6162;
    font-size: 1.5rem;
}

.btn-top-right {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
}
</style>