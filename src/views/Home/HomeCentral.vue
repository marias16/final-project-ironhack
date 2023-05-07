<script setup>
import headerHome from '@/components/home/HeaderHome.vue'
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore();
tasks._fetchAllTasks();
</script>

<template>
    <RouterView></RouterView>
</template>