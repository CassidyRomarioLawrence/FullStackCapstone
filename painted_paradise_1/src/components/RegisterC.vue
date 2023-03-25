<template>
  <form @submit.prevent="addUser">
    <h2>Register</h2>
    <div>
      <label for="userName">First Name:</label>
      <input type="text" id="userName" v-model="data.userName">
    </div>
    <div>
      <label for="userSurname">Last Name:</label>
      <input type="text" id="userSurname" v-model="data.userSurname">
    </div>
    <div>
      <label for="userGender">Gender:</label>
      <input type="text" id="userGender" v-model="data.userGender">
    </div>
    <div>
      <label for="cellNumber">Contact Number:</label>
      <input type="text" id="cellNumber" v-model="data.cellNumber">
    </div>
    <div>
      <label for="userEmail">Email:</label>
      <input type="text" id="userEmail" v-model="data.userEmail">
    </div>
    <div>
      <label for="userPassword">Password:</label>
      <input type="text" id="userPassword" v-model="data.userPassword">
    </div>
    <div>
      <label for="userImage">Image URL:</label>
      <input type="text" id="userImage" v-model="data.userImage">
    </div>
    <div>
      <label for="dateJoined">Date:</label>
      <input type="text" id="dateJoined" v-model="data.dateJoined">
    </div>
    <div>
      <button type="submit" :disabled="isFormInvalid">Register</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      data: {
        userName: '',
        userSurname: '',
        userGender: '',
        cellNumber: '',
        userEmail: '',
        userPassword: '',
        userImage: '',
        dateJoined: ''
      },
    }
  },
  computed: {
    isFormInvalid() {
      return !this.data.userName || !this.data.userSurname || !this.data.userGender || !this.data.cellNumber || !this.data.userEmail || !this.data.userPassword || !this.data.userImage || !this.data.dateJoined
    },
  },
  methods: {
    async addUser() {
      await this.$store.dispatch('addUser', this.data);
      this.$emit('user-added');
      this.resetForm();
    },
    resetForm() {
      this.data.userName = '';
      this.data.userSurname = '';
      this.data.userGender = '';
      this.data.cellNumber = '';
      this.data.userEmail = '';
      this.data.userPassword = '';
      this.data.userImage = '';
      this.data.dateJoined = ''
    },
  },
}
</script>
