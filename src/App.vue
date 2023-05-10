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
  <div class="container">
    <div></div>
    <section class="main">
      <HeaderHome />
      <RouterView />
    </section>
    <div></div>
  </div>
  
</template>

<style scoped>
  @media (max-width: 480px){
    .main {
      width: 100%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1027px){
    .container {
      display: grid;
      grid-template-columns: 1fr 7fr 1fr;
    }
  }

  @media only screen and (min-width: 1028px) and (max-width: 1920px){
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
  }

  

  .main {
      background: white;
      display: grid;
      gap: 2em;
  }
  


</style>
