<template>
<section class="vh-100">
  <div class="container py-6 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-4 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Signup</h2>
              <p class="text-white-50 mb-5">Create an account here.</p>

              <div class="form-outline form-white mb-4">
                <label for="username">Username:</label>
                <input v-model="form.username" type="username" id="typeUsername" class="form-control form-control-lg" :class="{'is-valid': usernameValidation, 'is-invalid': !usernameValidation}" v-on:keypress="isLetterOrNumber($event)" placeholder="Username">
                      <div class="invalid-feedback">
                        Username must be at least 3 characters.
                      </div>
              </div>

              <div class="form-outline form-white mb-4">
                <label for="password">Password:</label>
                <input v-model="form.password" type="password" id="typePasswordX" class="form-control form-control-lg" :class="{'is-valid': passwordValidation, 'is-invalid': !passwordValidation}" placeholder="Password">
                      <div class="invalid-feedback">
                        Password must be at least 6 characters, contain a letter, a number and a symbol.
                      </div>
              </div>

              <div class="form-outline form-white mb-4">
                <label for="password">Password:</label>
                <input v-model="form.confirmPassword" type="password" id="typePasswordX" class="form-control form-control-lg" :class="{'is-valid': confirmPasswordValidation, 'is-invalid': !confirmPasswordValidation}" placeholder="Confirm Password">
                      <div class="invalid-feedback">
                        Passwords must match.
                      </div>
              </div>

              <button @click="onClickSignup()" class="btn btn-outline-light btn-lg px-5" type="submit" v-on:click="isHidden = !isHidden" :disabled="!isFormValid">Signup</button>
            </div>
              <div>
                <input class="form-control mt-2 text-center" background-color="success" type="text" v-if="isHidden" value="Signup successful." aria-label="readonly input example" readonly>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>



<script>

import * as axios from 'axios'

// @ is an alias to /src
//  import Login from '@/components/Login.vue'
export default {
  name: 'Signup',
  data() {
    return {
      isHidden: false,
      form: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    }
  },
  watch: {
    selectedData: function() {
    console.log('data sent');
    this.onClick();
    }
  },
  // watch form change
    form: {
      handler() {
        this.formValidation();
      },
      deep: true, // used for watching object property nested
    },
    computed: {
    usernameValidation: function() {
      if (this.form.username.length >= 3){
        return true;
      }
      else {
        return false;
      }
    },
    passwordValidation: function() {
      //  Check if letter value exists using Regex
      //  Source: https://stackoverflow.com/a/61550284/12985943
      var regExp = /[a-zA-Z]/g;

      //  eslint-disable-next-line
      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      //  Form checks if password length is at least 6, contains a letter, a number and a symbol.
      if (this.form.password.length >= 6 && regExp.test(this.form.password) && /\d/.test(this.form.password) && format.test(this.form.password)){
        return true;
      }
      else {
        return false;
      }
    },
    confirmPasswordValidation: function() {
      //  Ignores null entry to not appear as valid if both password and confirm password fields are empty
      if(!this.form.confirmPassword) return;
      if (this.form.confirmPassword === this.form.password){
        return true;
      }
      else {
        return false;
      }
    },
    isFormValid: function () {
      return this.usernameValidation && this.passwordValidation && this.confirmPasswordValidation;
    },
    },
  methods: {
    formValidation: function () {
      // perform validation here
      // will be called upon form change
    },
    //  Method to only accept alphanumeric inputs
    //  Source: https://stackoverflow.com/a/62040964/12985943
    isLetterOrNumber(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z0-9]+$/.test(char)) return true;
            else e.preventDefault();
        },
    onClickSignup: async function() {
      //  POST
      console.log('click')
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post('https://mywebapp-775f4.ue.r.appspot.com/subscribe',
      {
      username: this.form.username,
      password: this.form.password
    }, headers
    )

      this.data = response.data;
      console.log('reponse: ', response)
    }
  }
}
</script>

<style>

</style>

