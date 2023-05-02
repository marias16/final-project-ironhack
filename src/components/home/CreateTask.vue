<script setup>
import { useTasksStore } from '@/stores/tasks'
import { useUsersStore } from '@/stores/users'

const tasks = useTasksStore();
const users = useUsersStore()


</script>

<template>
    <div class="input-group">
        <input v-model="tasks.titleTask" placeholder="What do you want to do?" class="input input-bordered" @keyup.enter="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})"/>
        <button class="btn" @click="tasks._addNewTask({title: tasks.titleTask, user_id: users.currentUser.id})">
            <p>Add</p>
        </button>
    </div>
</template>

<style scoped>
div {
    display: grid;
    grid-template-columns: 5fr 2fr;
}

</style>