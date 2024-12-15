<script setup lang="ts">

</script>

<template>
  <main>
    <section class="section-one">
      <article class="section-one__title">
        Современные <br />
        решения для <br />
        безопасного <br />
        будущего
      </article>
      <h4 class="section-one__description">
        Реализовываем комплексы систем безопасности <br />
        по всей России с гарантией 5 лет.
      </h4>
      <button class="section-one__btn">
        Оставить <br />
        заявку
      </button>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
  main {
    padding-top: 75px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(166deg, #FFF68D, #70EC94);
    section-one {
      &__title{}
      &__description{}
      &__btn{}
    }
  }


@include breakpoint(large) {
  main {
    section-one {
      &__title{}
      &__description{}
      &__btn{}
    }
  }
}
</style>