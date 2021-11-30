<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/shows">Shows</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/checkout">Checkout</router-link>
    <button @click="logout()" class="btn bg-danger text-white btn-outline-white btn-lg px-3" style="float: right;" type="logout">Logout</button>
  </div>
  <router-view/>
</div>
</template>

<script>
export default ({
methods: {
    logout: function() {
      //  Remove token from localstorage
      localStorage.removeItem('token')

      //  push to homepage after
      this.$router.push('/')
    },
},})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color:beige;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
