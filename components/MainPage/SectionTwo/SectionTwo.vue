<script setup lang="ts">

import GoodCard from "~/components/cards/GoodCard.vue";
</script>

<template>
  <section class="secTwo">
    <h1>Section Two</h1>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.secTwo {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@include breakpoint(large) {

}
</style>