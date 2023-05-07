<script setup>
import signInForm from '@/components/auth/signInForm.vue'
import { RouterLink } from 'vue-router'


</script>

<template>
    
    <section>
        <h2>Welcome back</h2>
        <p>Log in to your account and get access to your simpel tasks.</p>
    </section>
    <signInForm />
    <p><span>Don't have an account? </span><RouterLink to="/auth/sign-up" class="link link-accent"> Create one </RouterLink></p>
</template>

<style scoped>


h1 {
    font-size: 1.5em;
}

h2 {
    font-weight: bolder;
    font-size: 1.5em;
 }

 p {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
 }

</style>
