<script setup>
import { useTasksStore } from '../stores/tasks'
import { ref } from 'vue'
const tasks = useTasksStore();

const titleTask = ref('');
</script>

<template>
    <h1>This is the show tasks component</h1>
    <ul>
        <li v-for="task in tasks.tasks" :key="task.id">{{  task.title }} <button @click="tasks._deleteTask(task.id)">Delete task</button></li>
    </ul>
    <input v-model="titleTask">
    <button @click="tasks._addNewTask({title: titleTask, user_id:'d4268b82-a89e-4e9c-baac-805a28ab14a3'})">Create task</button>
</template>

<style scoped>
</style>

