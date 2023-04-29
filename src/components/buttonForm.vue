<script setup>
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import  router  from '@/router/index'

const users = useUsersStore();

const isSignIn = computed(() => {
  return router.currentRoute.value.name === 'sign-in'
})

</script>

<template>
    <button v-if="isSignIn" @click="users._signIn(users.email , users.password, router)">Sign in</button>
    <button v-else @click="users._signUp(users.email, users.password)">Sign up</button>
</template>

<style scoped>
    button {
        width: 100%;
        height: 2em;
        background: navy;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>