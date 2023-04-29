<script setup>
import formUser from '@/components/formUser.vue'
import buttonForm from '@/components/buttonForm.vue'
import { RouterLink } from 'vue-router'




</script>

<template>
    <h2>Create an account</h2>
    <formUser />
    <buttonForm />
    <p>Already have an account? <RouterLink to="/auth/sign-in"> Log in </RouterLink></p>
</template>
