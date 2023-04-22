import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/Auth/AuthView.vue'
import SigninView from '../views/Auth/Sign-in.vue'
import SignupView from '../views/Auth/Sign-up.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'sign-in',
          name: 'sign-in',
          component: SigninView,
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: SignupView,
        },
      ]
    }
  ]
})

export default router
