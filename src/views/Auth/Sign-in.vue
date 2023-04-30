<script setup>
import formUser from '@/components/formUser.vue'
import { RouterLink } from 'vue-router'


</script>

<template>
    <h2 class="text-2x1">Welcome back</h2>
    <formUser />
    <p>Don't have an account? <RouterLink to="/auth/sign-up"> Create one </RouterLink></p>
</template>

