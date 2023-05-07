<script setup>
import router from '@/router/index'

</script>

<template>
    <button @click="router.push({name: 'create-task'})" class="btn btn-accent btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button> 
</template>

<style scoped>
button {
    position: fixed;
    bottom: 1.5em;
    right: 1.5em;
    width: 4.2em;
    height: 4.2em;
}

@media (min-width: 480px) {
        button {
            display: none;
        }
    }

</style>