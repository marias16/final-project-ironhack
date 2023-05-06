<script setup>
  import showTasks from '@/components/home/showTasks.vue'
  import createTask from '@/components/home/CreateTask.vue'
  import createCircular from '@/components/home/CreateCircular.vue'
  import { useTasksStore } from '@/stores/tasks'

  const tasks = useTasksStore();

  tasks._fetchAllTasks();

</script>

<template>
  <createTask />
  <showTasks />
  <createCircular />
  <RouterView></RouterView>
</template>
