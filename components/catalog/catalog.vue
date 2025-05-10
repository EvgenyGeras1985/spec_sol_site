<script setup lang="ts">
  import CardCatalog from "~/components/card/card-catalog.vue";
  import {useGoodStore} from "~/store/goods";
  import {computed} from "vue";

  const store = useGoodStore();
  const goodsList = computed(() => store.goodsList);

  onMounted(() =>{
    store.allGoods();
  })
</script>

<template>
  <section class="catalog">
    <card-catalog :goodList="goodsList[0]" />
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