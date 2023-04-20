<script setup>
import { useTasksStore } from '../stores/tasks'

const tasks = useTasksStore();

</script>

<template>
    <h1>This is the show tasks component</h1>
    <ul>
        <li v-for="task in tasks.tasks" :key="task.id">{{  task.title }}</li>
    </ul>
    <button @click="tasks._addNewTask({title:'ignore returning phonecall', user_id:'d4268b82-a89e-4e9c-baac-805a28ab14a3'})">Create task</button>
</template>

<style scoped>
</style>

