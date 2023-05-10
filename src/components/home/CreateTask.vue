<script setup>
import { useTasksStore } from '@/stores/tasks'
import { useUsersStore } from '@/stores/users'
import { ref, computed } from 'vue'
const tasks = useTasksStore();
const users = useUsersStore()

const focusInput = ref(false)
const emptyField = computed(() => {
    return (focusInput.value === false) || (tasks.titleTask.length > 4) ? false : true; 
})
</script>

<template>
    <div class="input-group">
        <input v-model="tasks.titleTask" @focus="focusInput = true" @blur="focusInput = false" placeholder="What do you want to do?" class="input input-bordered" @keyup.enter="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})"/>
        <button class="btn btn-accent" :class="{'btn-disabled': emptyField}" @click="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})">
            <p>Add</p>
        </button>
    </div>
</template>

<style scoped>
    div {
        display: grid;
        grid-template-columns: 5fr 2fr;
    }

    @media (max-width: 480px) {
        div {
            display: none;
        }
    }

</style>