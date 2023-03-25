<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h2>Update User</h2>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" :v-model="user.userName">
        </div>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" id="surname" :v-model="user.userSurname">
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <input type="text" id="gender" :v-model="user.userGender">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" :v-model="user.userEmail">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" id="password" :v-model="user.userPassword">
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" id="image" :v-model="user.userImage">
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="text" id="date" :v-model="user.dateJoined">
        </div>
        <button type="submit">Update User</button>
      </form>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    show: Boolean
  },
  data() {
    return {
      updatedUser: {
        userName: '',
        userSurname: '',
        userGender: '',
        userEmail: '',
        userPassword: '',
        userImage: '',
        dateJoined:''
      }
    }
  },
  methods: {
    updateUser() {
      this.$store.dispatch('updateUser', this.updatedUser);
      this.$emit('close');
    },
    cancel() {
      this.$emit('close');
    }
  }
}
</script>
