<script setup lang="ts">
  import CardCatalog from "~/components/card/card-catalog.vue";

  const arrTestGallary = [
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    },
    {
      img: "/test_good_img.png",
      title: "test title",
      description: "здесь будет описание",
      price: 100000
    }
  ]
</script>

<template>
  <section class="catalog">
    <card-catalog v-for="card in arrTestGallary" :key="card.price" :card="card" />
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
}

@include breakpoint(large) {
  .catalog {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>