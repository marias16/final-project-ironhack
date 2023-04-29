<script setup>
import { useUsersStore } from '@/stores/users'
const users = useUsersStore();
</script>

<template>
    <div class="form">
        <label for="email">Email</label> 
        <input id="email" v-model="users.email" type="email"> 
        <label for="email">Password</label>
        <input v-model="users.password" type="password">
    </div>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    input {
        width: 100%;
    }

</style>