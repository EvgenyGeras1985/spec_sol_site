<template>
  <h1>1 : 41 : 00 of video</h1>
  <a href="#" @click="view('home')">Home</a>
  <a href="#" @click="view('test')">test</a>

  <LazyButton v-if="page == 'home'"></LazyButton>
  <LazyTest v-if="page == 'test'"></LazyTest>

</template>

<script setup lang="ts">
const page = ref('home')

function view(name: string){
  page.value = name
}
</script>


<style scoped>

</style>