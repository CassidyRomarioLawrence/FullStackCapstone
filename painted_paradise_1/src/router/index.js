import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/#about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/#shop',
    name: 'shop',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
