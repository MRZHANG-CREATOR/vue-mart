import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../views/Home'
import cart from '../views/Cart.vue'

Vue.use(VueRouter)
console.log(222)
const routes = [
  {
    path: '/',
    name:'home',
    component: home
  },
  {
    path: '/cart',
    component:cart,
    name:'cart'
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  }
]
console.log(222)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
