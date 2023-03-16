<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#shop">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
.navbar{
    min-height: 100vh;
}
</style>