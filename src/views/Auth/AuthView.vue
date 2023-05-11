<script setup>
  import footerElement from '@/components/footerElement.vue'
</script>

<template>
  <RouterView></RouterView>
  <footerElement />
</template>

<style scoped>
.logo-container {
    display: flex;
    align-items: center;
    gap: 0.7em
}
.logo {
    height: fit-content;
    width: 2em;
}
</style>
