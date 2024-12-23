<script setup lang="ts">
  import ZayavkaForm from "~/components/ZayavkaForm/zayavkaForm.vue";
</script>

<template>
  <section class="zvk">
    <h1 class="zvk__title">Сформировать заявку</h1>
    <p class="zvk__description">Заполните заявку и получите скидку 15% на монтажные работы</p>
    <zayavka-form />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
  .zvk{
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
  .zvk{

  }
}
</style>