<script setup>
  import showTasks from '@/components/home/showTasks.vue'
  import createTask from '@/components/home/CreateTask.vue'
  import createCircular from '@/components/home/CreateCircular.vue'
  import nameUser from '@/components/home/nameUser.vue'
  import footerElement from '@/components/footerElement.vue'

</script>

<template>
  <nameUser />
  <createTask />
  <showTasks />
  <createCircular />
  <RouterView></RouterView>
  <footerElement />
</template>
