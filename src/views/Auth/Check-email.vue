<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <section>
        <h2>We've just sent you an email</h2>
        <p>Please, confirm your email address to begin your Simpel journey.<br>
        Or <RouterLink to="/auth/sign-in" class="link link-accent"> take me to sign in. </RouterLink></p>
    </section>

</template>

<style scoped>
h2 {
    font-weight: bolder;
    font-size: 1.5em;
 }

p {
    margin-top: 1em;
}


</style>