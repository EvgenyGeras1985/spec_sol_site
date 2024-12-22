<script setup lang="ts">
import { AdvCard } from "~/types/AdvCard"

const props = defineProps<{
  adv: AdvCard
}>()
const handler = () => alert('price button in process...')

</script>

<template>
  <section class="adv">
    <h2 class="adv__id">{{adv.id}}</h2>
    <article class="adv__title">
      <h2>{{adv.title}}</h2>
    </article>
    <div class="adv__description">
      <p>{{adv.description}}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .adv {
    width: 80%;
    height: 50vh;

    &__id {
      margin: 1rem;
    }

    &__title {
      margin: 1rem;
    }
    &__description {
      margin: 1rem;
      font-size: 1.8rem;
    }
  }

@include breakpoint(large) {
  .adv {
    width: 33%;
    margin: 1rem;

    &__id {}
    &__title {}
    &__description {
      width: 60%;
      text-align: justify;
      font-size: 1.4rem;
    }
  }
}
</style>