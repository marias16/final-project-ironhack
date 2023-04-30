<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useUsersStore } from '../stores/users'
import  taskElement  from './taskElement.vue'
import  router  from '@/router/index'

const tasks = useTasksStore();
const users = useUsersStore()

const doneShow = ref(false)

watch(() => tasks._completeCount, (currentValue, oldValue) => {
    if (currentValue === 0) {
        doneShow.value = false
        return
    } else if (currentValue === 1 && oldValue === 0) {
        doneShow.value = true
    }
});

function toggleDone () {
    if (tasks._completeCount !== 0) {
        doneShow.value = !doneShow.value
    }
    
}

</script>

<template>
    <button @click="users._signOut(router)" class="signOutBtn">Sign out</button>
    <h1>Simpel.</h1>
    <h2>To-Do ({{ tasks._incompleteCount }})</h2>
    <p v-if="tasks._incompleteCount === 0"> Congrats! You completed all tasks </p>
    <ul v-else>
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>

    <div>
        <input v-model="tasks.titleTask">
        <button class="btn btn-accent btn-outline" @click="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})">Create task</button>
    </div>


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

    .signOutBtn {
        width: 2.5em;
        margin-left: auto;
        margin-right: 0;
    }
    
</style>

