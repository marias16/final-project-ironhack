<script setup>
import { useTasksStore } from '@/stores/tasks.js'

defineProps({
    'task': Object
})

const tasks = useTasksStore()

</script>

<template>
    <li class="task-container-edit" v-if="tasks.editMode && tasks.editTaskId === task.id">
            <div class="input-group">
                <input  v-model="task.title" class="input input-bordered" >
                <button class="btn btn-success" @click="tasks._updateTitle(task)">
                    Save
                </button>
            </div>
            <button class="btn btn-ghost" @click="tasks.editMode = false"> Cancel </button>
    </li>

    <li class="task-container" v-else>
        <div class="name">
            <input class="checkbox checkbox-accent" type="checkbox" :checked="task.is_complete" @change="tasks._updateStatus(task, $event.target.checked)">
            <span>{{  task.title }}</span>
        </div>

        <div class="dropdown dropdown-end">
            <label class="centered" tabindex="0"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li @click="tasks._editTask(task.id)"><a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    Edit name
                    </a></li>
                <li class="delete" @click="tasks._deleteTask(task.id)"><a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    Delete task
                    </a></li>
            </ul>
        </div>
    </li>
</template>

<style scoped>
    .task-container {
        display: grid;
        grid-template-columns: 4fr 1fr;
        justify-content: space-between;
        height: 2em;
        width: 100%;
        padding: 0.5em 0.5em;
    }

    .task-container-edit {
        display: grid;
        grid-template-columns: 4fr 1fr;
    }


    .name {
        display: grid;
        grid-template-columns: 1fr 6fr;
    }

    .centered {
        display: flex;
        justify-content: center;

    }
    .delete {
        color:crimson
    }

</style>