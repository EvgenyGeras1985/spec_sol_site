<script setup lang="ts">

import GoodCard from "~/components/cards/GoodCard.vue";
</script>

<template>
  <section class="secone">
    <good-card />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.secone {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}

@include breakpoint(large) {

}
</style>