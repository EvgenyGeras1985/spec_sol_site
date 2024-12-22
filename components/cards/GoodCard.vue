<script setup lang="ts">
  import { GoodCard } from "~/types/GoodCard"

  const props = defineProps<{
    good: GoodCard
  }>()
  const handler = () => alert('price button in process...')

</script>

<template>
  <section class="card">
    <div class="card__img">
      <img :src="good.img" alt="товар">
    </div>
    <article class="card__title">
      <h2>{{good.title}}</h2>
    </article>
    <div class="card__description">
      <p>{{good.description}}</p>
    </div>
    <button @click="handler" class="card__btn">
      От{{good.price}}руб.
    </button>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .card {
    width: 80%;
    height: 60vh;
    margin: 1.5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    outline: 1px solid black;
    border-radius: 15px;
    cursor: pointer;
    background: #ebebeb;


    &__img {
      width: 100%;
      height: 50%;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      text-align: center
    }

    &__description {
      text-align: left
    }

    &__btn {
      cursor: pointer;
      padding: 7px 15px;
      border-radius: 10px;
      text-align: center;
      background: linear-gradient(166deg, #FFF68D, #408654);

      &:hover {
        color: #d2d2d2;
        background: black;
      }
    }
  }
@include breakpoint(large) {
  .card{
    width: 20%;

    &:hover{
      box-shadow: 10px 5px 5px black;
      transition: box-shadow 0.5s;
    }

    &__img{}
    &__title{}
    &__description {}
    &__btn {}
  }
}
</style>