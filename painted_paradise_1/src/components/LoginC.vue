<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        User Email:
        <input type="text" v-model="userEmail" required>
      </label>
      <label>
        Password:
        <input type="text" v-model="userPassword" required>
      </label>
      <button type="submit">Submit</button>
    </form>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      const success = await this.$store.dispatch('login', {
        userEmail: this.userEmail,
        userPassword: this.userPassword
      })
      if (success) {
        this.$router.push({ name: 'home' })
      } else {
        this.errorMessage = 'Error: Unable to login. Please check your credentials and try again.'
      }
    }
  }
}
</script>
