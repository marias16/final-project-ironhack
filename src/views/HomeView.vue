<script setup>
  import showTasks from '../components/home/showTasks.vue'
  import headerHome from '@/components/home/HeaderHome.vue'
  import createTask from '@/components/home/CreateTask.vue'
  import { useTasksStore } from '../stores/tasks'

  const tasks = useTasksStore();

  tasks._fetchAllTasks();

</script>

<template>
  <headerHome />
  <createTask />
  <showTasks />
</template>
