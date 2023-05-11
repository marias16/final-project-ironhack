<script setup>
import { ref, watch, computed } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import  taskElement  from './taskElement.vue'
import AlertSuccess from './AlertSuccess.vue'

const tasks = useTasksStore();
tasks._fetchAllTasks()

//evitar que la alterta de to-dos vacias se muestre al principio
const isLoading = ref(true)

tasks._fetchAllTasks().then(() => {
  isLoading.value = false
})

const showAlert = computed(() => {
  return !isLoading.value && tasks._incompleteCount === 0
})


//done show toggle
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
    
    <ul v-if="showAlert === false">
        <taskElement v-for="task in tasks._incompleteTasks" :key="task.id" :task="task" />
    </ul>
    <AlertSuccess v-else/>

        <a href="#done">
            <div id="done" class="toggle-down" @click="toggleDone"> 
                <svg :class="{ rotate: !doneShow }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                <span >Done ({{ tasks._completeCount }})</span> 
            </div>
        </a>
        <ul v-show="doneShow">
            <taskElement v-for="task in tasks._completeTasks" :key="task.id" :task="task" />
        </ul>
    <section class="margin">

    </section>


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

    .margin {
        margin-bottom: 2em;
    }
    
</style>

