<script setup>
import { computed } from 'vue'
import router from '@/router/index'
import { useRoute } from 'vue-router'
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore();
const route = useRoute()
const idTask =  route.params.id 
const thisTask = tasks.tasks.filter(task => idTask == task.id)[0]

const emptyTask = computed(() => {
    return {
        'btn btn-accent': thisTask.title,
        'btn btn-disabled' : thisTask.title.length < 4,
    }
})

async function editAndGo () {
    await tasks._updateTitle(thisTask)
    await router.push({name: 'home'})
}

</script>

<template>
    <h2>Edit your task</h2>
    <input type="text" class="input input-bordered" v-model="thisTask.title" placeholder="Ex. Do the dishes"> 
    <section>
        <button :class="emptyTask" @click="editAndGo">SAVE</button>
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