<script setup>
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'
const users = useUsersStore()

const nameUser = computed(() => {
    return users.currentUser.email.split("@")[0]
})
</script>

<template>
<h2>Hi, <span>{{ nameUser }}</span>.</h2>    
</template>

<style scoped>
h2 {
    font-weight: bolder;
    font-size: 1.2em;
}

span {
    color: #2AA69A;
}
</style>