<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
      Add User
    </button>
    
      <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel"
           aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <form @submit.prevent="addUser">
              <div class="modal-header">
                <h5 class="modal-title" id="addUserModalLabel">Add User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="userName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="userName" v-model="data.userName">
                </div>
                <div class="mb-3">
                  <label for="userSurname" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="userSurname" v-model="data.userSurname">
                </div>
                <div class="mb-3">
                  <label for="userGender" class="form-label">Gender</label>
                  <input type="text" class="form-control" id="artistName" v-model="data.userGender">
                </div>
                <div class="mb-3">
                  <label for="cellNumber" class="form-label">Contact Number</label>
                  <input type="text" class="form-control" id="cellNumber" v-model="data.cellNumber">
                </div>
                <div class="mb-3">
                  <label for="userEmail" class="form-label">Email</label>
                  <input type="text" class="form-control" id="userEmail" v-model="data.userEmail">
                </div>
                <div class="mb-3">
                  <label for="userPassword" class="form-label">Password</label>
                  <input type="text" class="form-control" id="userPassword" v-model="data.userPassword">
                </div>
                <div class="mb-3">
                  <label for="userImage" class="form-label">Image URL</label>
                  <input type="text" class="form-control" id="userImage" v-model="data.userImage">
                </div>
                <div class="mb-3">
                  <label for="dateJoined" class="form-label">Date</label>
                  <input type="text" class="form-control" id="dateJoined" v-model="data.dateJoined">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" :disabled="isFormInvalid" data-bs-dismiss="modal">Add User</button>
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