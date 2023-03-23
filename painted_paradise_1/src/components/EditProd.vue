<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProductModal">
    Edit Product
  </button>
  <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="editProduct">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" class="form-control" id="category" v-model="editedProduct.category">
            </div>
            <div class="mb-3">
              <label for="prodName" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="prodName" v-model="editedProduct.prodName">
            </div>
            <div class="mb-3">
              <label for="artistName" class="form-label">Artist</label>
              <input type="text" class="form-control" id="artistName" v-model="editedProduct.artistName">
            </div>
            <div class="mb-3">
              <label for="prodDesc" class="form-label">Description</label>
              <input type="text" class="form-control" id="prodDesc" v-model="editedProduct.prodDesc">
            </div>
            <div class="mb-3">
              <label for="prodPrice" class="form-label">Price</label>
              <input type="number" class="form-control" id="prodPrice" v-model="editedProduct.prodPrice">
            </div>
            <div class="mb-3">
              <label for="prodImage" class="form-label">Image URL</label>
              <input type="text" class="form-control" id="prodImage" v-model="editedProduct.prodImage">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" data-bs-dismiss="modal">Save Changes</button>
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
      editedProduct: {
        category: "",
        prodName: "",
        artistName: "",
        prodDesc: "",
        prodPrice: 0,
        prodImage: "",
      },
    };
  },
  computed: {
    isFormInvalid() {
      return (
        !this.editedProduct.category ||
        !this.editedProduct.prodName ||
        !this.editedProduct.artistName ||
        !this.editedProduct.prodDesc ||
        !this.editedProduct.prodPrice ||
        !this.editedProduct.prodImage
      );
    },
  },
  methods: {
  async editProduct() {
    const { id } = this.$route.params;
    const data = this.editedProduct;
    try {
      await this.$store.dispatch('editProduct', { id, data });
      this.editedProduct = {
        category: '',
        prodName: '',
        artistName: '',
        prodDesc: '',
        prodPrice: 0,
        prodImage: '',
      };
    } catch (error) {
      console.error(error);
    }
  },
},
};
</script>