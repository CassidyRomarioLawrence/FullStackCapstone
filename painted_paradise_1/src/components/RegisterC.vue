<template>
<div class="container-fluid" style="min-height: 90vh;">
  <div class="row d-flex justify-content-center align-items-center text-center">
    <div class="col-md-4">
      <h2 class="display-2">
        Welcome New User Please Register
      </h2>
    </div>
    <div class="col-md-8">
      <div id="register-card">
        <div id="register-card-content">
          <h2 id="register-card-title">Register</h2>
          <form class="form" @submit.prevent="addUser">
            <div>
              <input class="form-content" type="text" id="userName" v-model="data.userName" placeholder="First Name">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="userSurname" v-model="data.userSurname" placeholder="Last Name">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="userGender" v-model="data.userGender" placeholder="Gender">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="cellNumber" v-model="data.cellNumber" placeholder="Contact Number">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="userEmail" v-model="data.userEmail" placeholder="Email">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="userPassword" v-model="data.userPassword" placeholder="Password">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="userImage" v-model="data.userImage" placeholder="Image URL">
              <div class="form-border"></div>
            </div>
            <div>
              <input class="form-content" type="text" id="dateJoined" v-model="data.dateJoined" placeholder="Date">
              <div class="form-border"></div>
            </div>
            <button id="register-btn" type="submit" :disabled="isFormInvalid">Register</button>
          </form>
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
      data: {
        userName: '',
        userSurname: '',
        userGender: '',
        cellNumber: '',
        userEmail: '',
        userPassword: '',
        userImage: 'https://i.postimg.cc/hv1QDDC5/home-page-profile-user-icon-1320184025620798710.png',
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
  this.data.dateJoined = new Date().toISOString(); // Set the dateJoined property to the current date
  await this.$store.dispatch('addUser', this.data);
  this.$emit('user-added');
  this.resetForm();
  this.$router.push('/login');
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

<style>

  .display-2{
    font-family: 'Dancing Script', cursive;
    text-shadow: 3px 3px 3px grey;
  }

  #register-card {
    background: #fbfbfb;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
    margin: 2rem auto 0 auto;
    width: 100%;
  }
  
  #register-card-content {
    padding: 12px 44px;
  }
  
  #register-card-title {
    font-family: "Raleway Thin", sans-serif;
    letter-spacing: 4px;
    padding-bottom: 23px;
    padding-top: 13px;
    text-align: center;
  }
  
  .form {
    align-items: left;
    display: flex;
    flex-direction: column;
  }
  
  .form-content {
    background: #fbfbfb;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;
    padding: 10px;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  .form-content:focus {
    outline: none;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  }
  
  .form-border {
    background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
    height: 1px;
    width: 100%;
  }
  
  #register-btn {
    background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
    border: none;
    border-radius: 21px;
    box-shadow: 0px 1px 8px #24c64f;
    cursor: pointer;
    color: white;
    font-family: "Raleway SemiBold", sans-serif;
    height: 42.3px;
    margin: 0 auto;
    margin-top: 20px;
    transition: 0.25s;
    width: 60%;
  }
  
  #register-btn:hover {
    box-shadow: 0px 1px 18px #24c64f;
  }
  
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
  }
</style>
