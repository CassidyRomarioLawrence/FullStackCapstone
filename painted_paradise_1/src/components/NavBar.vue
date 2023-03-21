<template>
<nav class="col-1 bg-transparent position-fixed">
      <div class="sidebar-sticky">
        <ul class="nav flex-column justify-content-center align-items-center" style="min-height: 100vh;">
          <li class="nav-item">
            <a class="nav-link" href="/#home"><i class="bi bi-house-door"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about"><i class="bi bi-info-circle"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#shop"><i class="bi bi-bag"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin"><i class="bi bi-card-list"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact"><i class="bi bi-telephone"></i></a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
nav{
    min-height: 100vh;
    backdrop-filter: blur(px);
}

.nav-item{
  padding: 5px 0;
}

i:hover{
  font-size: 2.5vw;
  color: #FD6162;
  text-shadow: 3px 3px 3px #232323;
}

i{
  font-size: 2.5vw;
  color: white;
  text-shadow: 3px 3px 3px #869193;
}
</style>