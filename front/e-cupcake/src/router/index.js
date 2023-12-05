import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/productdetails/:id',
      name: 'Productdetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',      
      component: () => import('../views/CheckoutView.vue')
    }
  ]
})

export default router
