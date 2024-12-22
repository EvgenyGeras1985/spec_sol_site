<script setup lang="ts">
  import GoodCard from "~/components/cards/GoodCard.vue";

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
  <section class="section-one">
    <good-card v-for="card in arrTestGoods" :key="card.price" :good="card" />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  .section-one {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: none;
  }

@include breakpoint(large) {
  .section-one {
    flex-direction: row;
  }
}
</style>



<!-- Test Cards -->
<!--    <good-card :good="arrTestGoods[0]"></good-card>-->
<!--    <good-card :good="arrTestGoods[1]"></good-card>-->
<!--    <good-card :good="arrTestGoods[2]"></good-card>-->