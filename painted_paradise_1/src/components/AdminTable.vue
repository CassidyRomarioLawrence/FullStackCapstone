<template>
<div v-if="loader" class="loader-container">
<Loader />
</div>
<div v-else>
  <div class="shopping">
       <div class="container-shopping">
         <div class="container">
           <h5 class="user-crud text-center display-5 text-light">USER CRUD</h5>
           <AddUser />
           <div class="table-responsive">
   <table class="table table-striped my-2 table-light">
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
         <td data-label="delete"><button @click="deleteUser(user.id)" type="button" class="btn btn-danger">Delete</button></td>
       </tr>
     </tbody>
   </table>
 </div>
            <h5 class="product-crud text-center display-5 text-light">PRODUCT CRUD</h5>
            <AddProd />
         <div class="table-responsive">
           <table class="table table-striped my-2 table-light">
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
                 <td data-label="edit"><EditProd /></td>
                 <td data-label="delete"><button @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Delete</button></td>
               </tr>
             </tbody>
           </table>
         </div>
         </div>
     </div>
 </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import AddProd from './AddProd.vue';
import AddUser from './AddUser.vue'
import Loader from './Loader.vue';
import EditProd from './EditProd.vue';

export default {
  setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        store.dispatch("fetchProducts")
        const users = computed(() => store.state.users);
        const products = computed(() => store.state.products)
        const loader = computed(()=> store.state.loader)
        return {
            users,
            products,
            loader
        }
  },
  methods: {
  deleteProduct(id) {
    this.$store.commit('setLoader', true);
    this.$store.dispatch('deleteProduct', id).then(() => {
      this.$store.commit('setLoader', false);
    });
  },
  deleteUser(id) {
    this.$store.commit('setLoader', true);
    this.$store.dispatch('deleteUser', id).then(() => {
      this.$store.commit('setLoader', false);
    });
    },
},
  components: {
    AddProd,
    AddUser,
    Loader,
    EditProd
  }
    }
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}

.table{
  border: transparent;
}

  .loader-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
h5{
  font-family: 'Philosopher', sans-serif;
  text-shadow: 3px 3px 3px black;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  
  .table-responsive table {
    margin: 0;
  }
  
  .table-responsive table thead {
    display: none;
  }
  
  .table-responsive table tr {
    border-top: 1px solid #ddd;
    display: block;
    margin-bottom: 15px;
  }
  
  .table-responsive table td {
    border-top: none !important;
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 13px;
    text-align: right !important;
    position: relative;
    padding-left: 50%;
  }
  
  .table-responsive table td:before {
    content: attr(data-label);
    display: inline-block;
    font-weight: 600;
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    padding-left: 15px;
    text-align: left;
  }
}

</style>