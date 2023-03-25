<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
  Add Product
</button>

  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="addProduct">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" class="form-control" id="category" v-model="data.category">
            </div>
            <div class="mb-3">
              <label for="prodName" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="prodName" v-model="data.prodName">
            </div>
            <div class="mb-3">
              <label for="artistName" class="form-label">Artist</label>
              <input type="text" class="form-control" id="artistName" v-model="data.artistName">
            </div>
            <div class="mb-3">
              <label for="prodDesc" class="form-label">Description</label>
              <input type="text" class="form-control" id="prodDesc" v-model="data.prodDesc">
            </div>
            <div class="mb-3">
              <label for="prodPrice" class="form-label">Price</label>
              <input type="number" class="form-control" id="prodPrice" v-model="data.prodPrice">
            </div>
            <div class="mb-3">
              <label for="prodImage" class="form-label">Image URL</label>
              <input type="text" class="form-control" id="prodImage" v-model="data.prodImage">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" data-bs-dismiss="modal">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          category: '',
          prodName: '',
          artistName: '',
          prodDesc: '',
          prodPrice: '',
          prodImage: '',
        },
      }
    },
    computed: {
      isFormInvalid() {
        return !this.data.category || !this.data.prodName || !this.data.artistName || !this.data.prodDesc || !this.data.prodPrice || !this.data.prodImage
      },
    },
    methods: {
      async addProduct() {
        await this.$store.dispatch('addProduct', this.data);
        this.$emit('product-added');
        this.resetForm();
      },
      resetForm() {
        this.data.category = '';
        this.data.prodName = '';
        this.data.artistName = '';
        this.data.prodDesc = '';
        this.data.prodPrice = '';
        this.data.prodImage = '';
      },
    },
  }
</script>
