<script setup>
import { computed, ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import router from '@/router/index'

const users = useUsersStore();
users.password = ''
users.email = ''

//button disabled 
const emptyFields = computed(() => {
    return {
        'btn btn-accent': users.password && users.email && confirm,
        'btn btn-disabled' : !users.password || !users.email || !confirm.value,
    }
})

//form validation
const startValidation = ref(false)

//computed for evaluating if validations are true or false
const validateEmail = computed(() => {
    return  startValidation.value === true ? (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(users.email) : null;
})

const validatePassword = computed(() => {
    return startValidation.value === true ? (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/).test(users.password) : null;
})

const confirm = ref('')

const confirmPassword = computed(() => {
    return startValidation.value === true ? users.password === confirm.value : null
})

//function for validation

async function handleSignUp() {
    startValidation.value = true

    if (validateEmail.value === true && validatePassword.value === true && confirmPassword.value === true) {
        await users._signUp(users.email, users.password)
        await router.push({name: 'check-email'})
        return
    }
}



</script>

<template>
    <div class="form">
        <div>
            <label for="email">Email</label> 
            <input class="input input-bordered w-full max-w-xl" id="email" :class="{'not-validated': startValidation && !validateEmail}" v-model="users.email" type="email" placeholder="myemail@domain.com" @keyup.enter="signUpHandler"> 
            <p v-if="validateEmail === false" class="feedback"> Email format not valid </p>
        </div>
        <div>
            <label for="password">Password</label>
            <input class="input input-bordered w-full max-w-xl" id="password" :class="{'not-validated': startValidation && !validatePassword}" v-model="users.password" type="password" placeholder="make sure it's strong" @keyup.enter="signUpHandler">
            <p v-if="validatePassword === false" class="feedback"> Password must contain 8 characters, one symbol, a capital letter and a number. </p>
        </div>
        <div>
            <label for="confirm">Confirm your password</label>
            <input class="input input-bordered w-full max-w-xl" id="confirm" :class="{'not-validated': startValidation && !confirmPassword}" v-model="confirm" type="password" placeholder="repeat the password" @keyup.enter="signUpHandler">
            <p v-if="confirmPassword === false" class="feedback"> Password doesn't match </p>
        </div>

        <button class="btn w-full max-w-xl" :class="emptyFields" @click="handleSignUp">Sign up</button>
    </div>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        gap: 1em;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .feedback {
        font-size: 0.9em;
        color: #F87272;
    }

    .not-validated {
        background-color: rgb(248, 114, 114, 0.2)
    }
</style>