import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AuthView from '../views/Auth/AuthView.vue'
import SigninView from '../views/Auth/Sign-in.vue'
import SignupView from '../views/Auth/Sign-up.vue'
import CheckView from '../views/Auth/Check-email.vue'
import CreateTask from '../views/Home/CreatetaskView.vue'
import HomeCentral from '../views/Home/HomeCentral.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'home-central',
      component: HomeCentral,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'create-task',
          name: 'create-task',
          component: CreateTask,
        }
      ]
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
        {
          path: 'check-email',
          name: 'check-email',
          component: CheckView,
        }
      ]
    }
  ]
})





export default router