<script setup lang="ts">
  import { AdvCard } from "~/types/adv-card"

  const props = defineProps<{
    adv: AdvCard
  }>()
</script>

<template>
  <section class="adv">
    <p class="adv__id">{{adv.id}}</p>

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
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__id {
      font-weight: bold;
      font-size: 6rem;
      color: rgba(17, 17, 17, .24);
    }

    &__title { margin: 1rem 0; }

    &__description {
      width: 14rem;
      font-size: 1.8rem;
    }
  }

@include breakpoint(large) {
  .adv {
    width: 25%;
    margin: 1rem;

    &__id {}
    &__title {}

    &__description {
      height: 7rem;
      text-align: justify;
      font-size: 1.4rem;
    }
  }
}
</style>