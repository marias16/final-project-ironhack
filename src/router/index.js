import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/Auth/AuthView.vue'
import SigninView from '../views/Auth/Sign-in.vue'
import SignupView from '../views/Auth/Sign-up.vue'
import { setupPinia } from '../stores/setuprouter.js'
import  { useUsersStore } from '../stores/users.js'


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


setupPinia(router) 
const users = useUsersStore()

router.beforeEach(async (to, from, next) => {
  
  await users._fetchUser()
  
  console.log(users.currentUser)
  if (users.currentUser === null && to.name === 'home') {
    next({ name: 'sign-in' })
  } else if (users.currentUser && (to.name === 'sign-in' || to.name === 'sign-up')) {
    next({ name: 'home' })
  } else {
    next();
  }
})

export default router