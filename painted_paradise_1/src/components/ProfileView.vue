<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
                style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                <img :src="user.userImage"
                  alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                <h5>{{ user.userName }} {{ user.userSurname }}</h5>
                <p>{{user.userGender}}</p>
                <i class="far fa-edit mb-5"></i>
                <router-link :to="{ name: 'logout' }" class="btn logout-btn btn-danger">Logout</router-link>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-12 col-md-8 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">{{ user.userEmail }}</p>
                    </div>
                    <div class="col-12 col-md-4 mb-3">
                      <h6>User Role</h6>
                      <p>{{ user.userRole }}</p>
                    </div>
                  </div>
                  <h6>Joined</h6>
                  <hr class="mt-0 mb-4">
                  <div class="row pt-1">
                    <div class="col-12 col-md-6 mb-3">
                      <h6>Date</h6>
                      <p class="text-muted">{{ user.user_joined }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="d-flex justify-content-center align-items-center h-100">
        <div class="spinner-border" role="status">
          <span class="visually-hidden"><Loader /></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Loader from './Loader.vue';

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components:{
    Loader
  }
};
</script>

<style>
.gradient-custom {
  background: #f6d365;
  background: -webkit-linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );
  background: linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  font-size: 1rem;
}

@media (min-width: 768px) {
  .col-lg-6 {
    max-width: 600px;
  }
}
</style>
