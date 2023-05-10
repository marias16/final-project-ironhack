<script setup>
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import router from '@/router/index'

const users = useUsersStore();
users.password = ''
users.email = ''

//button disabled
const emptyFields = computed(() => {
    return {
        'btn-accent': users.password && users.email,
        'btn-disabled' : !users.password || !users.email,
    }
})

async function signInHandler () {
    await users._signIn(users.email , users.password)
    await router.push({name: 'home'})
}


</script>

<template>
    <div class="form">
        <div class="alertRed max-w-xl" v-if="users.errorDisplay">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span> {{ users.errorDisplay}}. Please, try again. </span>
        </div>
        <div class="input-field">
            <label for="email">Email</label> 
            <input class="input input-bordered w-full max-w-xl" id="email" v-model="users.email" type="email" @keyup.enter="signInHandler"> 
            <p v-if="validateEmail === false" class="feedback"> Email format not valid </p>
        </div>
        <div class="input-field">
            <label for="password">Password</label>
            <input class="input input-bordered w-full max-w-xl" id="password" v-model="users.password" type="password" @keyup.enter="signInHandler">
            <p v-if="validatePassword === false" class="feedback"> Password must contain 8 characters, one symbol, una mayúscula, una minúscula y un número. </p>
        </div>
        
        <button class="btn w-full max-w-xl" :class="emptyFields" @click="signInHandler">Sign in</button>
    </div>
</template>

<style scoped>
    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        gap: 1em;
    }

    .input-field {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .alertRed {
        width: 100%;
        background-color: #F87272;
        display: flex;
        gap: 1em;
        padding: 1em 2em;
        border-radius: 12px;
    }

</style>