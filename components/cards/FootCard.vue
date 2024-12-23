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
.fcard {
  width: 60%;
  height: 30vh;
  text-align: center;

  &__title {
    margin: 1rem;
  }
  &__description {
    font-size: 1.2rem;
  }
}

@include breakpoint(large) {
  .fcard {
    width: 33%;
    text-align: center;

    &__title {}
    &__description {}
  }
}
</style>