<script setup lang="ts">
  import CardGood from "~/components/card/card-good.vue";
  import {useGoodStore} from "~/store/goods";

  const store = useGoodStore()
  const route = useRoute()
  const id = route.params.id

  onUpdated(()=>{
    store.getOneGood(+id)
  })
</script>

<template>
  <div class="card-page">
    <card-good :good="store.getOne"></card-good>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .card-page{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
@include breakpoint(large) {

}
</style>