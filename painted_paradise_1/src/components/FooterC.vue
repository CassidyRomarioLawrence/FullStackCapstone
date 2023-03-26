<template>
<footer>
    <div class="container py-2">
      <div class="row justify-content-center py-4">
        <div class="col-lg-4 col-md-6 mb-1 mb-lg-0 text-light"><img src="https://i.postimg.cc/JnXRtphM/c-2.gif" alt="" width="180" class="mb-3">
          <p class="font-italic text-muted">The platform dedicated to making art accessible to everyone. Connecting art enthusiasts with exceptional, high-quality artwork.</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="bi bi-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="bi bi-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="bi bi-pinterest"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-1 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="/paintings" class="text-muted">For Paintings</a></li>
            <li class="mb-2"><a href="/tools" class="text-muted">For Tools</a></li>
            <li class="mb-2"><a href="/bookings" class="text-muted">Bookings</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-1 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="/login" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="/register" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="/#shop" class="text-muted">Shop</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-2">
      <div class="container text-center">
        <p class="text-muted mb-0">© {{myDate}} PaintedParadise All rights reserved.</p>
      </div>
    </div>
  </footer>


</template>

<script>
    export default {
  data() {
        return {
            myDate : new Date().getFullYear()
          }
        }
}

</script>

<style scoped>
i {
  color: #ffc371;
}

footer{
  background-color: #FFFFFF;
  background-image: linear-gradient(180deg, grey 0%, #C1A576 50%, #FD6162 100%);
}

h6{
  font-family: 'Philosopher', sans-serif;
  font-weight: bold;
}

a{
  text-decoration: none;
}
</style>