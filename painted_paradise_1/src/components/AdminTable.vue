<template>
 <div class="shopping">
      <div class="container-shopping">
        <div class="content">
          <h2 class="user-crud">USER CRUD</h2>
          <AddUser />
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Image</th>
                <th>Gender</th>
                <th>Join Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="user in users" :key="user.id">
                <td data-label="ID">{{ user.id }}</td>
                <td data-label="FirstName">{{ user.userName }}</td>
                <td data-label="LastName">{{ user.userSurname }}</td>
                <td data-label="Phone">{{ user.cellNumber }}</td>
                <td data-label="Email">{{ user.userEmail }}</td>
                <td data-label="Image"><img :src="user.userImage" class="img-fluid" style="height:12vh" alt=""></td>
                <td data-label="Gender">{{ user.userGender }}</td>
                <td data-label="joinDate">{{ user.user_joined }}</td>
                <td data-label="edit">Edit</td>
                <td data-label="delete"><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
           <h2 class="product-crud">PRODUCT CRUD</h2>
           <AddProd />
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td data-label="productID">{{product.id}}</td>
                <td data-label="category">{{product.category}}</td>
                <td data-label="name">{{product.prodName}}</td>
                <td data-label="price">R{{product.prodPrice}}</td>
                <td data-label="Image"><img :src="product.prodImage" class="img-fluid"
                    style="height:12vh" alt=""></td>
                <td data-label="edit">Edit</td>
                <td data-label="delete"><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';


export default {
  setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        store.dispatch("fetchProducts")
        const users = computed(() => store.state.users);
        const products = computed(()=> store.state.products)
        return {
            users,
            products
        }
  },
    }
</script>

<style scoped>

</style>