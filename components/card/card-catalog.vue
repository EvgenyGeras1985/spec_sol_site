<script setup lang="ts">
  import { CatalogCard } from "~/types/catalog-card"

  const props = defineProps<{
    card: CatalogCard
  }>()
  const handler = () => alert('price button in process...')
</script>

<template>
  <section class="catalog-card">
    <div class="catalog-card__img">
      <img :src="card.img" alt="товар">
    </div>
    <article class="catalog-card__title">
      <h2>{{card.title}}</h2>
    </article>
    <div class="catalog-card__description">
      <p>{{card.description}}</p>
    </div>
    <button @click="handler" class="catalog-card__btn">
      От{{card.price}}руб.
    </button>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.catalog-card {
  width: 80%;
  height: 30rem;
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
  box-shadow: 4px 2px 2px black;

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
    padding: 7px 17px;
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
  .catalog-card{
    width: 20%;

    &:hover{
      box-shadow: 10px 5px 5px black;
      transition: box-shadow 0.3s ease-in-out;
    }

    &__img{}
    &__title{}
    &__description {}
    &__btn {}
  }
}
</style>