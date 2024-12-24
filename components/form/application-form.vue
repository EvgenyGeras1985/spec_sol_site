<script setup lang="ts">

</script>

<template>
  <section class="app-form">
    <h1 class="app-form__title">
      Сформировать заявку
    </h1>
    <p class="app-form__description">
      Заполните заявку и получите скидку 15% на монтажные работы
    </p>
    <application />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
  .app-form{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
      margin-top: 3rem;
    }

    &__description {
      font-size: 1.5rem;
      margin-top: 3rem;
      text-align: center;
    }
  }

@include breakpoint(large) {

}
</style>