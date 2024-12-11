<script setup lang="ts">
  const route = useRoute()

  const model = computed(() => {
    return route.params.version + ' sad'
  })
</script>

<template>
 <h1>iphone {{ model }}</h1>
</template>

<style scoped>

</style>