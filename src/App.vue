<script setup>
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/users'
import router from '@/router/index'
import HeaderHome from './components/home/HeaderHome.vue';
import loadingElement from '@/components/home/loadingElement.vue'

const users = useUsersStore();

router.beforeEach(async (to, from, next) => {
  await users._fetchUser()
  
  if (users.currentUser === null && (to.name === 'home' || to.name ==='home-central' || to.name ==='edit-task' || to.name ==='create-task')) {
    next({ name: 'sign-in' })
  } else if (users.currentUser && (to.name === 'sign-in' || to.name === 'sign-up' || to.name === 'check-email' || to.name === 'auth')) {
    next({ name: 'home' })
  } else {
    next();
  }
})


</script>

<template>
  <loadingElement class="h-screen w-screen"/>
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

  @media screen and (min-width: 481px) and (max-width: 768px){
    .container {
      display: grid;
      grid-template-columns: 1fr 7fr 1fr;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px){
    .container {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1279px){
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
  }

  @media only screen and (min-width: 1280px) and (max-width: 1920px){
    .container {
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
    }
  }
  

  .main {
      background: white;
      display: grid;
      gap: 2em;
  }
  


</style>
