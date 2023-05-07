<script setup>
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/users'
import router from '@/router/index'
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

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
  @media (max-width: 480px){
    div {
      width: 100%;
      padding: 1em 1.5em;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px){
    div {
      max-width: 80%;
      min-width: 70%;
      padding: 1em 1.5em;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1400px){
    div {
      width: 55%;
      padding: 1em 0;
    }
  }

  div {
      background: white;
      margin: auto auto;
      display: flex;
      flex-direction: column;
      gap: 2em;
      border-radius: 5%;
      margin-left: auto;
      margin-right: auto;
  }
  


</style>
