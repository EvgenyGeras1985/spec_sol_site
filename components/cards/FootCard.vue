<script setup lang="ts">
import { FooterCard } from "~/types/FooterCard"

const props = defineProps<{
  fcard: FooterCard
}>()

</script>

<template>
  <section class="fcard">
    <article class="fcard__title">
      <h2>{{fcard.title}}</h2>
    </article>
    <div class="fcard__description">
      <p>{{fcard.description}}</p>
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