<script setup lang="ts">
  import { FooterCard } from "~/types/footer-card"

  const props = defineProps<{
    elem: FooterCard
  }>()
</script>

<template>
  <section class="elem">
    <article class="elem__title">
      <h2>{{elem.title}}</h2>
    </article>
    <div class="elem__description">
      <p>{{elem.description}}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.elem {
  width: 60%;
  height: 30vh;
  text-align: center;

  &__title { margin: 1rem; }
  &__description { font-size: 1.2rem; }
}

@include breakpoint(large) {
  .elem {
    width: 33%;
    text-align: center;
  }
}
</style>