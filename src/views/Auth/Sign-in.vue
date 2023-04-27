<script setup>
import { useUsersStore } from '@/stores/users'
import  router  from '@/router/index'
const users = useUsersStore();

</script>

<template>
  <p>sign in view</p>
  <label for="email">Email</label>
  <input id="email" v-model="users.email" type="email">
  <label for="email">Password</label>
  <input v-model="users.password" type="password">
  <button @click="users._signIn(users.email , users.password, router)">Sign in</button>
  <br>
  <button @click="users._fetchUser">Fetch user</button>
</template>
