<template>
    <div class="admin">
        <div class="container-fluid crud-system">
            <button class="btn btn-dark btn-close" @click="goHome"></button>
            <div class="row">
                <h3 class="display-3 bg-light text-center">Welcome Admin User</h3>
            </div>
        </div>
        <div>
            <AdminTable />
        </div>
    </div>
</template>

<script>
import AdminTable from '@/components/AdminTable.vue';

    export default {
    name: 'AdminView',
    components: {
            AdminTable
        },
        methods: {
      goHome() {
        this.$router.push({ path: '/' });
      }
    }
}
</script>

<style scoped>

.crud-system{
    backdrop-filter: blur(5px);
}
.admin{
    background-image: url(https://i.postimg.cc/JtVfX45K/pexels-dids-2911527.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
}

h3{
    font-family: 'Dancing Script', cursive;
}

.btn-close {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>