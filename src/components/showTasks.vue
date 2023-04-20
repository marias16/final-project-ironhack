<script setup>
import { useTasksStore } from '../stores/tasks'

const tasks = useTasksStore();
tasks._fetchAllTasks();
const tasksList = tasks.tasksList
console.log(tasksList)

</script>

<template>
    <h1>This is the show tasks component</h1>
    <ul>
        <li v-for="task in tasksList" :key="task.id">{{  task.title }}</li>
    </ul>
</template>

<style scoped>
</style>

