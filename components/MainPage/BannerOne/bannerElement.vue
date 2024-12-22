<script setup lang="ts">
const handler = () => alert('in process...')
</script>

<template>
  <section class="banner">
    <article class="banner__title">
      <h2>Оставьте заявку и получите скидку 15% на услуги по монтажу комплекса систем безопасности</h2>
    </article>
    <button @click="handler" class="banner__btn">Оставить Заявку</button>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .banner{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 15rem;
    color: #d2d2d2;
    background: black;

    &__title {
      padding: 0 20px;
    }

    &__btn {
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      padding: 7px 15px;
      border-radius: 10px;

      &:hover{
        color: black;
        background: #d2d2d2;
      }
    }
  }

@include breakpoint(large) {
  .banner{

    &__title { padding: 0;}
    &__btn {}
  }
}
</style>