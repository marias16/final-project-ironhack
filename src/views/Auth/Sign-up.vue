<script setup>
import signUpForm from '@/components/auth/signUpForm.vue'
import { RouterLink } from 'vue-router'




</script>

<template>
    <section>

        <h2>Create a Simpel account.</h2>
        <p>A <strike>simple</strike> simpel to-do app, now available for everybody.</p>
    </section>
    <signUpForm />
    <p class="redirect"><span>Already have an account?</span> <RouterLink to="/auth/sign-in" class="link link-accent"> Log in. </RouterLink></p>
</template>


<style scoped>
 h2 {
    font-weight: bolder;
    font-size: 1.5em;
 }

 h1 {
  font-size: 3.5em;
}


div {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.redirect {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
}
</style>