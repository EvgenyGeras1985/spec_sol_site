<script setup lang="ts">

  const handler = () => alert('price button in process...')

  const arrTestGoods = [
    {
      img: "test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    }
  ]
</script>

<template>
  <section class="card" v-for="{img, title,description,price} in arrTestGoods">
    <div class="card__img">
      <img :src="img" alt="товар">
    </div>
    <article class="card__title">
      <h2>{{title}}</h2>
    </article>
    <div class="card__description">
      <p>{{description}}</p>
    </div>
    <button @click="handler" class="card__btn">
      От{{price}}руб.
    </button>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .card {
    width: 60%;
    height: 70%;
    margin: 1.5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    outline: 1px solid black;
    cursor: pointer;


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
    }

    &__img{}
    &__title{}
    &__description {}
    &__btn {}
  }
}
</style>