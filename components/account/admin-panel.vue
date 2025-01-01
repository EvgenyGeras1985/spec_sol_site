<script setup lang="ts">

</script>

<template>
  <section class="admin">
    <h1>Панель Администратора</h1>
    <application-add-good />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  .admin{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(166deg, #FFF68D, #70EC94);
    &__panel {}
  }

@include breakpoint(large) {
  .admin{

    &__panel {}
  }
}
</style>