<template>
  <div>
    <h3>Add Product</h3>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Category:</label>
        <input type="text" v-model="category">
      </div>
      <div>
        <label>Name:</label>
        <input type="text" v-model="name">
      </div>
      <div>
        <label>Artist:</label>
        <input type="text" v-model="artist">
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="description">
      </div>
      <div>
        <label>Price:</label>
        <input type="number" v-model="price">
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" v-model="image">
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        category: '',
        name: '',
        artist: '',
        description: '',
        price: '',
        image: ''
    };
  },
  methods: {
    handleSubmit() {
      const productData = {
        category: this.category,
        prodName: this.name,
        artistName: this.artist,
        prodDesc: this.description,
        prodPrice: this.price,
        prodImage: this.image
      };
      this.$store.dispatch('addProduct', productData);
    }
  }
}
</script>