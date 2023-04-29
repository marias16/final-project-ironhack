<script setup>
import formUser from '@/components/formUser.vue'
import buttonForm from '@/components/buttonForm.vue'
import { useUsersStore } from '@/stores/users'
import { RouterLink } from 'vue-router'

const users = useUsersStore();

</script>

<template>
    <h2>Create an account</h2>
    <p v-if="users.signedUp">Please check your email</p>
    <formUser />
    <buttonForm />
    <p>Already have an account? <RouterLink to="/auth/sign-in"> Log in </RouterLink></p>
</template>
