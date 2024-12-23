<script setup lang="ts">
  import GallaryCard from "~/components/cards/gallaryCard.vue";

  const arrTestGallary = [
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
  <section class="catalog">
<!--    <div class="catalog__title">Каталог</div>-->
    <gallary-card v-for="card in arrTestGallary" :key="card.price" :card="card"></gallary-card>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.catalog {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 17rem;
  background: linear-gradient(166deg, #FFF68D, #70EC94);

  //&__title {
  //  text-align: center;
  //  width: 80%;
  //  margin: 2rem;
  //  font-size: 40px;
  //  font-weight: bold;
  //}
}

@include breakpoint(large) {
  .catalog {
    //padding-top: 17rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>