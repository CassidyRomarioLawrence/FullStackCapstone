<template>
  <div>
    <button class="navbar-toggle" @click="showNavbar = !showNavbar">
      <i class="bi bi-list"></i>
    </button>
    <nav class="col-1 bg-transparent position-fixed" v-show="showNavbar" :class="{ 'navbar-open': showNavbar }">
      <div class="sidebar-sticky">
        <ul class="nav flex-column justify-content-center align-items-center" style="min-height: 100vh;">
          <li class="nav-item">
            <a class="nav-link" href="/#home"><i class="bi bi-house-door"></i></a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" href="/profile"><i class="bi bi-person-circle"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about"><i class="bi bi-info-circle"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#shop"><i class="bi bi-bag"></i></a>
          </li>
          <li class="nav-item" v-show="userRole === 'admin'">
            <a class="nav-link" href="/admin"><i class="bi bi-card-list"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact"><i class="bi bi-telephone"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showNavbar: false,
      userRole: localStorage.getItem('userRole') || '',
      isLoggedIn: localStorage.getItem('user') ? true : false
    };
  },
};
</script>



<style scoped>
.navbar-open {
  transform: translateX(-30%);
}


nav {
  min-height: 100vh;
  backdrop-filter: blur(px);
  transition: all 0.3s ease-in-out;
}

.nav-item {
  padding: 5px 0;
}

i:hover {
  font-size: 40px;
  color: #fd6162;
  text-shadow: 3px 3px 3px #232323;
}

i {
  font-size: 40px;
  color: white;
  text-shadow: 3px 3px 3px #869193;
}

.navbar-toggle {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 999;
}


@media only screen and (max-width: 768px){
  i{
    font-size: 20px;
  }
  i:hover{
    font-size : 20px;
  }
}
</style>
