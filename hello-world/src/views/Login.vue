<template>
<section class="vh-100">
  <div class="container py-6 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-4 text-center">

            <div class="alert alert-danger" role="alert" v-if="isHidden">
              {{ error }}
              </div>

            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input v-model="username" type="username" id="typeUsername" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Username</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <button @click="onClickLogin()" class="btn btn-outline-light btn-lg px-5" type="login">Login</button>
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
  name: 'Login',
  data() {
    return {
    username: '',
    password: '',
    error: '',
    isHidden: false
    }
  },
  watch: {
    selectedData: function() {
    console.log('data sent');
    this.onClickLogin();
    }
  },
  methods: {

    onClickLogin: async function() {
      //  POST
      console.log('click')
      //  Declare headers to use in post request for token
      const headers = { "Content-Type": "application/json" };
      try
      {
            //  axios post request to url target login
            const response = await axios.post('https://mywebapp-775f4.ue.r.appspot.com/login',
          {
          //  associate entered user data as username and password to login
          username: this.username,
          password: this.password
        }, headers
        )
          //  set local storage token
          localStorage.setItem('token', response.data.token)
          this.data = response.data;
          console.log('reponse: ', response)

          //  Send to homepage after successful login
          this.$router.push('/')
      }
      //  if login is denied show error message
      catch (e){
        this.isHidden = true;
        this.error = 'Invalid username/password.'
      }
    }
  }
}
</script>

<style>

</style>

