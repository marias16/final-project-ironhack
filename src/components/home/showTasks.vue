<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import  taskElement  from './taskElement.vue'
import AlertSuccess from './AlertSuccess.vue'

const tasks = useTasksStore();
tasks._fetchAllTasks();
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
   
    <h2 style="font-weight: bold;">To-Do ({{ tasks._incompleteCount }})</h2>
    <AlertSuccess v-if="tasks._incompleteCount === 0"/>
    <ul v-else>
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>

    <a href="#done">
        <div id="done" class="toggle-down" @click="toggleDone"> 
            <svg :class="{ rotate: !doneShow }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            <span >Done ({{ tasks._completeCount }})</span> 
        </div>
    </a>
    <ul v-show="doneShow">
        <taskElement v-for="task in tasks._completeTasks" :key="task.id" :task="task" />
    </ul>
    


</template>

<style scoped>

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .toggle-down {
        display: flex;
        gap: 0.5em;
        cursor: pointer;
    }

    .rotate  {
        transform: rotate(-90deg);
    }
    
</style>

