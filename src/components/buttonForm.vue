<script setup>
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import  router  from '@/router/index'

const users = useUsersStore();

const isSignIn = computed(() => {
  return router.currentRoute.value.name === 'sign-in'
})

</script>

<template>
    
</template>

<style scoped>
    
</style>