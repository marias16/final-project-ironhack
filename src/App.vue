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

  div {
      background: white;
      max-width: 55%;
      padding: 2em 3em;
      margin: auto auto;
      display: flex;
      flex-direction: column;
      gap: 2em;
      border-radius: 50px;
      -webkit-box-shadow: -2px 8px 16px 7px rgba(0,0,0,0.19); 
      box-shadow: -2px 8px 16px 7px rgba(0,0,0,0.19);
  }
  


</style>
