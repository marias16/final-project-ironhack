<script setup>
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/users'
import router from '@/router/index'
import HeaderHome from './components/home/HeaderHome.vue';
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore();
const users = useUsersStore();

router.beforeEach(async (to, from, next) => {
  await users._fetchUser()
  
  if (users.currentUser === null && to.name === 'home') {
    next({ name: 'sign-in' })
  } else if (users.currentUser && (to.name === 'sign-in' || to.name === 'sign-up')) {
    next({ name: 'home' })
  } else {
    next();
  }
})

tasks._fetchAllTasks();

</script>

<template>
  <div >
    <HeaderHome />
    <RouterView />
  </div>
</template>

<style scoped>
  @media (max-width: 480px){
    div {
      width: 100%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px){
    div {
      max-width: 80vh;
      min-width: 70vh;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1400px){
    div {
      width: 100vh;
    }
  }

  div {
      background: white;
      display: grid;
      gap: 2em;
  }
  


</style>
