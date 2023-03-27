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
    path: '/paintings',
    name: 'paintings',
    component: ()=>import('../views/PaintingsView.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: ()=>import('../views/ToolsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ()=>import('../views/SingleProd.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=>import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import( '../views/HomeView.vue'),
    beforeEnter(to, from, next) {
      localStorage.removeItem('user_token');
      localStorage.removeItem('user');
      next({ name: 'home' });
    }
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('../views/RegisterView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import('../views/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
