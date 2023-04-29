<script setup>
  import showTasks from '../components/showTasks.vue'
  import { useTasksStore } from '../stores/tasks'

  const tasks = useTasksStore();

  tasks._fetchAllTasks();

</script>

<template>
  <showTasks />
</template>
