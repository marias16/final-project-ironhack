<script setup>
import { computed, ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import router from '@/router/index'

const users = useUsersStore();
const isSignUp = computed(() => {
  return router.currentRoute.value.name === 'sign-up'
})


//form validation
const startValidation = ref(false)

//computed for evaluating if validations are true or false
const validateEmail = computed(() => {
    return  startValidation.value === true ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(users.email) : null;
})

const validatePassword = computed(() => {
    return startValidation.value === true ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(users.password) : null;
})

const confirm = ref('')

const confirmPassword = computed(() => {
    return startValidation.value === true ? users.password === confirm.value : null
})

//function for validation

function signUpUser() {
    startValidation.value = true
    
    if (validateEmail.value === true && validatePassword.value === true && confirmPassword.value === true) {
        users._signUp(users.email, users.password)
        return
    }
}

</script>

<template>
    <div class="form">
        <label for="email">Email</label> 
        <input id="email" v-model="users.email" type="email"> 
        <p v-if="validateEmail === false"> Email format not valid </p>
        <label for="password">Password</label>
        <input id="password" v-model="users.password" type="password">
        <p v-if="validatePassword === false"> Password is not strong enough </p>
        <div v-show="isSignUp">
            <label for="confirm">Confirm your password</label>
            <input id="confirm" v-model="confirm" type="password">
            <p v-show="confirmPassword === false"> Password doesn't match </p>

        </div>

        <button v-if="!isSignUp" @click="users._signIn(users.email , users.password, router)">Sign in</button>
        <button v-else @click="signUpUser()">Sign up</button>
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

    button {
        width: 100%;
        height: 2em;
        background: navy;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>