import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Shows from '../views/Shows.vue'
import Signup from '../views/Signup.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to: ', to);
  console.log('from: ', from);

  if (to.name == 'Cart') next({ name: 'Login' })
  else if (to.name == 'Checkout') next({ name: 'Login' })
  /*-else if (to.name == 'Shows') next({ name: 'Login' })*/

  else next()
})

export default router
