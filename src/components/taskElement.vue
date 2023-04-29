<script setup>
import { defineProps } from 'vue'
import { useTasksStore } from '@/stores/tasks.js'

defineProps({
    'task': Object
})

const tasks = useTasksStore()

</script>

<template>
    <li>
        <input type="checkbox" :checked="task.is_complete" @change="tasks._updateStatus(task, $event.target.checked)">
        <input v-if="tasks.editMode && tasks.editTaskId === task.id" v-model="task.title">
        <span v-else>{{  task.title }}</span>
        <div v-if="tasks.editMode && tasks.editTaskId === task.id">
            <button  @click="tasks._updateTitle(task)">Save</button>
            <button  @click="tasks.editMode = false" >Cancel</button>
        </div>
        <div v-else >
            <button @click="tasks._editTask(task.id)">Edit</button>
            <button @click="tasks._deleteTask(task.id)">Delete</button>
        </div>
    </li>
</template>

<style scoped>
    li {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
        height: 2em;
        width: 100%;
        padding: 0.5em 0.5em;
        border: 1px solid grey 
    }

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }


</style>