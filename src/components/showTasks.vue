<script setup>
import { useTasksStore } from '../stores/tasks'
const tasks = useTasksStore();


//borrar input cuando das click
</script>

<template>
    <h1>This is the show tasks component</h1>
    <ul>
        <li v-for="task in tasks.tasks" :key="task.id">
            <input type="checkbox" :checked="task.is_complete" @change="tasks._updateStatus(task.id, $event.target.checked)">
            <input v-if="tasks.editMode && tasks.editTaskId === task.id" v-model="task.title">
            <span v-else>{{  task.title }}</span>
            <button v-if="tasks.editMode && tasks.editTaskId === task.id" @click="tasks._updateTitle(task.id, task.title)">Save</button>
            <button v-if="tasks.editMode && tasks.editTaskId === task.id" @click="tasks.editMode = false" >Cancel</button>
            <button v-else @click="tasks._editTask(task.id)">Edit task</button>
            <button @click="tasks._deleteTask(task.id)">Delete task</button>
        </li>
    </ul>
    <input v-model="tasks.titleTask">
    <button @click="tasks._addNewTask({title: tasks.titleTask, user_id:'d4268b82-a89e-4e9c-baac-805a28ab14a3'})">Create task</button>
</template>

<style scoped>
</style>

