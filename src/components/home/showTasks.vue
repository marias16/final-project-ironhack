<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import  taskElement  from './taskElement.vue'

const tasks = useTasksStore();

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
    
    <div v-if="tasks._incompleteCount === 0" class="alert alert-success shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <div>
            <h3 style="font-weight: bolder;">Did you finish, or are you just starting?</h3>
            <p>Anyways, time to add a new task!</p>
        </div>
      </div>
    </div>

    <ul v-else>
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>


    <div class="toggle-down" @click="toggleDone"> 
        <svg :class="{ rotate: !doneShow }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        <span >Done ({{ tasks._completeCount }})</span>
    </div>
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

    .toggle-down {
        display: flex;
        gap: 0.5em;
    }

    .rotate  {
        transform: rotate(-90deg);
    }
    
</style>

