<script setup>
  import showTasks from '../components/showTasks.vue'
  import { useTasksStore } from '../stores/tasks'
  import { useUsersStore } from '../stores/users'

  const users = useUsersStore();
  const tasks = useTasksStore();

  if(users.currentUser) {
    tasks._fetchAllTasks();
  }

</script>

<template>
  <h1>Home view</h1>
  <showTasks />
</template>
