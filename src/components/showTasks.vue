<script setup>
import { useTasksStore } from '../stores/tasks'
import { useUsersStore } from '../stores/users'
import  taskElement  from './taskElement.vue'

const tasks = useTasksStore();
const users = useUsersStore()

</script>

<template>
    <h2>To-Do ({{ tasks._incompleteTasks.length }})</h2>
    <p v-if="tasks._incompleteTasks.length === 0"> Congrats! You completed all tasks </p>
    <ul>
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>
    <input v-model="tasks.titleTask">
    <button @click="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})">Create task</button>
    <h2>Done ({{ tasks._completeTasks.length }})</h2>
    <ul>
        <taskElement v-for="task in tasks._completeTasks" :key="task.id" :task="task" />
    </ul>
    
</template>

<style scoped>

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

</style>

