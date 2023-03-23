<template>
  <div>
    <h1>Profile</h1>
    <p>Name: {{ currentUser.userName }}</p>
    <p>Email: {{ currentUser.userEmail }}</p>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  computed: {
    currentUser() {
      const store = useStore()
      return store.state.currentUser
    }
  }
})
</script>