<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateProductModal">
      Update Product
    </button>

<div class="modal fade" id="updateProductModal" tabindex="-1" role="dialog" aria-labelledby="updateProductModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateProductModalLabel">Update Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="category">Category:</label>
            <input type="text" class="form-control" id="category" placeholder="Enter category" v-model="category">
          </div>
          <div class="form-group">
            <label for="prodName">Product Name:</label>
            <input type="text" class="form-control" id="prodName" placeholder="Enter product name" v-model="prodName">
          </div>
          <div class="form-group">
            <label for="artistName">Artist Name:</label>
            <input type="text" class="form-control" id="artistName" placeholder="Enter artist name" v-model="artistName">
          </div>
          <div class="form-group">
            <label for="prodDesc">Product Description:</label>
            <textarea class="form-control" id="prodDesc" placeholder="Enter product description" v-model="prodDesc"></textarea>
          </div>
          <div class="form-group">
            <label for="prodImage">Product Image URL:</label>
            <input type="text" class="form-control" id="prodImage" placeholder="Enter product image URL" v-model="prodImage">
          </div>
          <div class="form-group">
            <label for="prodPrice">Product Price:</label>
            <input type="number" class="form-control" id="prodPrice" placeholder="Enter product price" v-model="prodPrice">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" @click="updateProduct">Update</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      category: '',
      prodName: '',
      artistName: '',
      prodDesc: '',
      prodImage: '',
      prodPrice: '',
    }
  },
  methods: {
    async updateProduct() {
      const data = {
        category: this.category,
        prodName: this.prodName,
        artistName: this.artistName,
        prodDesc: this.prodDesc,
        prodImage: this.prodImage,
        prodPrice: this.prodPrice,
      };
      try {
        this.$store.dispatch('updateProduct', { id: this.$store.state.currentProduct.id, data: data });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>

</style>