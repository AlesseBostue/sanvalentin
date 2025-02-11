import { createRouter, createWebHistory } from 'vue-router'
import Valentin from '../views/ValentinView.vue'
import Home from '../views/HomeView.vue'
import Yuppi from '../views/YuppiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/happy',
      name: 'happy',
      component: Valentin,
    },
    {
      path: '/yuppi',
      name: 'yuppi',
      component: Yuppi,
    },
  ],
})

export default router
