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
        <input v-if="tasks.editMode && tasks.editTaskId === task.id" :v-model="task.title">
        <span v-else>{{  task.title }}</span>
        <button v-if="tasks.editMode && tasks.editTaskId === task.id" @click="tasks._updateTitle(task)">Save</button>
        <button v-if="tasks.editMode && tasks.editTaskId === task.id" @click="tasks.editMode = false" >Cancel</button>
        <div v-else >
        <button @click="tasks._editTask(task.id)">Edit task</button>
        <button @click="tasks._deleteTask(task.id)">Delete task</button>
        </div>
    </li>
</template>

<style scoped>
    li {
        border: 1px navy;
        display: grid;
        grid-template-columns: 1fr 3fr 2fr;
    }


</style>