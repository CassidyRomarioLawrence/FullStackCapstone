<template>
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>REGISTER</h2>
          <div class="underline-title"></div>
        </div>
        <form @submit.prevent="addUser" class="form">
          <label for="userName" style="padding-top:13px">
            &nbsp;First Name
          </label>
          <input id="userName" class="form-content" type="text" name="userName" v-model="data.userName" required />
          <div class="form-border"></div>
          <label for="userSurname" style="padding-top:22px">&nbsp;Last Name
          </label>
          <input id="userSurname" class="form-content" type="text" name="userSurname" v-model="data.userSurname" required />
          <div class="form-border"></div>
          <label for="userGender" style="padding-top:22px">&nbsp;Gender
          </label>
          <input id="userGender" class="form-content" type="text" name="userGender" v-model="data.userGender" required />
          <div class="form-border"></div>
          <label for="cellNumber" style="padding-top:22px">&nbsp;Cell Number
          </label>
          <input id="cellNumber" class="form-content" type="tel" name="cellNumber" v-model="data.cellNumber" required />
          <div class="form-border"></div>
          <label for="userEmail" style="padding-top:22px">&nbsp;Email
          </label>
          <input id="userEmail" class="form-content" type="email" name="userEmail" v-model="data.userEmail" required />
          <div class="form-border"></div>
          <label for="userPassword" style="padding-top:22px">&nbsp;Password
          </label>
          <input id="userPassword" class="form-content" type="password" name="userPassword" v-model="data.userPassword" required />
          <div class="form-border"></div>
          <label for="userImage" style="padding-top:22px">&nbsp;Image
          </label>
          <input id="userImage" class="form-content" type="text" name="userImage" v-model="data.userImage" required />
          <div class="form-border"></div>
          <button id="submit-btn" type="submit" :disabled="isFormInvalid">
          <span v-if="!isLoading">REGISTER</span>
          <Loader v-if="isLoading" />
        </button>
      </form>
      <Loader v-if="isLoading" />
      </div>
    </div>
  </template>
  <script>
import Loader from './Loader.vue';


  export default {
    components: {
  Loader,
},
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
    isLoading: false,
  }
        },
        computed: {
          isFormInvalid() {
            return !this.data.userName || !this.data.userSurname || !this.data.userGender || !this.data.cellNumber || !this.data.userEmail || !this.data.userPassword || !this.data.userImage || !this.data.dateJoined
          },
        },
        methods: {
          async addUser() {
  this.isLoading = true; // add this
  console.log('User data:', this.data); // add this
  await this.$store.dispatch('addUser', this.data);
  this.$emit('user-added');
  this.resetForm();
  this.isLoading = false; // add this
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
  };
  </script>
  <style scoped>
  a {
    text-decoration: none;
  }
  label {
    font-family: "Raleway", sans-serif;
    font-size: 11pt;
  }
  
  #card {
    background: #fbfbfb;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  margin: 2rem auto 2rem auto;
  max-width:90%;
}
#card-content {
  padding: 12px 44px;
}
#card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#signup {
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}
#submit-btn {
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #24c64f;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px #24c64f;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
.underline-title {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 2px;
  margin: -0.7rem auto 0 auto;
  width: 89px;
}
</style>