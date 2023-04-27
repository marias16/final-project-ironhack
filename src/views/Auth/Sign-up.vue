<script setup>
import { useUsersStore } from '@/stores/users'
import  router  from '@/router/index'
const users = useUsersStore();

</script>

<template>
  <p>sign up view</p>
  <p v-if="users.signedUp">Please check your email</p>
  <label for="email">Email</label>
  <input id="email" v-model="users.email" type="email">
  <label for="email">Password</label>
  <input v-model="users.password" type="password">
  <button @click="users._signUp(users.email, users.password, router)">Sign up</button>
</template>