<script setup>
import { useUsersStore } from '@/stores/users'

const users = useUsersStore();

</script>

<template>
  <p>sign in view</p>
  <button @click="users._signIn(`nuevouser@user.com` , `contrasena`)">Sign in</button>
  <button @click="users._fetchUser">Fetch user</button>
</template>
