<script setup>
import formUser from '@/components/formUser.vue'
import buttonForm from '@/components/buttonForm.vue'
import { RouterLink } from 'vue-router'


</script>

<template>
    <h2>Welcome back</h2>
    <formUser />
    <buttonForm />
    <p>Don't have an account? <RouterLink to="/auth/sign-up"> Create one</RouterLink></p>

</template>

