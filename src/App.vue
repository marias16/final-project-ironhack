<script setup>
import { RouterView } from 'vue-router'
import { useUsersStore } from './stores/users'
import router from '@/router/index'
const users = useUsersStore();

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

</script>

<template>
  <header>
    <div>
      <button @click="users._signOut(router)">Sign out</button>
    </div>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

  div {
      background: white;
      width: 50%;
      padding: 2em 3em;
      margin: auto auto;
      display: flex;
      flex-direction: column;
      gap: 2em;
  }
  


</style>
