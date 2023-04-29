<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useUsersStore } from '../stores/users'
import  taskElement  from './taskElement.vue'

const tasks = useTasksStore();
const users = useUsersStore()

const doneShow = ref(false)

watch(() => tasks._completeCount, (currentValue, oldValue) => {
    if (currentValue === 0) {
        doneShow.value = false
        return
    } else if (currentValue === 1 && oldValue === 0) {
        doneShow.value = true
        console.log('this works')
    }
});

function toggleDone () {
    if (tasks._completeCount !== 0) {
        doneShow.value = !doneShow.value
    }
    
}

</script>

<template>
    <h2>To-Do ({{ tasks._incompleteTasks.length }})</h2>
    <p v-if="tasks._incompleteTasks.length === 0"> Congrats! You completed all tasks </p>
    <ul>
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>
    <input v-model="tasks.titleTask">
    <button @click="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})">Create task</button>
    <h2 @click="toggleDone">Done ({{ tasks._completeCount }})</h2>
    <ul v-show="doneShow">
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

