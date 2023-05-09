<script setup>
import router from '@/router/index'
import { useTasksStore } from '@/stores/tasks'
import { useUsersStore } from '@/stores/users'

const tasks = useTasksStore();
const users = useUsersStore()

async function addAndGo () {
    await tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})
    await router.push({name: 'home'})
}

</script>

<template>
    <h2>Create your task.</h2>
    <input type="text" class="input input-bordered" v-model="tasks.titleTask" placeholder="Ex. Do the dishes"> 
    <section>
        <button class="btn btn-accent" @click="addAndGo">ADD</button>
        <button class="btn btn-ghost" @click="router.push({name: 'home'})">Back</button>
    </section>
    
</template>

<style scoped>

h2 {
    font-weight: bolder;
 }

 section {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0.5em;
 }

 
 
 </style>