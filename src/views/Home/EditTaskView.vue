<script setup>
import router from '@/router/index'
import { useRoute } from 'vue-router'
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore();
const route = useRoute()
const idTask =  route.params.id 
const thisTask = tasks.tasks.filter(task => idTask == task.id)[0]
console.log(thisTask)

async function editAndGo () {
    await tasks._updateTitle(thisTask)
    await router.push({name: 'home'})
}

</script>

<template>
    <h2>Edit your task</h2>
    <input type="text" class="input input-bordered" v-model="thisTask.title" placeholder="Ex. Do the dishes"> 
    <section>
        <button class="btn btn-accent" @click="editAndGo">SAVE</button>
        <button class="btn btn-ghost" @click="router.push({name: 'home'})">Back</button>
    </section>
    
</template>

<style scoped>

h2 {
    font-weight: bolder;
    font-size: 1em;
 }

 section {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0.5em;
 }

 
 
 </style>