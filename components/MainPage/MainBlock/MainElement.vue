<script setup lang="ts">
  import CustomSpec from "~/components/SPECSOLlogo/customSpec.vue";
  const handler = () => alert("in process.....")
</script>

<template>
      <main class="section-one">
        <custom-spec />
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
        <button @click="handler()" class="section-one__btn">
          Оставить <br />
          заявку
        </button>
      </main>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';

  .section-one {
    width: 100%;
    height: 100%;
    padding-left: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
    background: linear-gradient(166deg, #FFF68D, #70EC94);


      &__title {
        color: #727C8F;
        font-size: 2rem;
        margin: 8px 0;
      }

      &__description{
        font-size: 1.4rem;
        padding: 26px 0;
      }

      &__btn{
        font-size: 15px;
        font-weight: bold;
        color: #d2d2d2;
        padding: 5px 15px;
        border-radius: 10px;
        background: black;
      }
    }



@include breakpoint(large) {
  .section-one {
    padding-left: 32rem;

    &__title {}

    &__description {}

    &__btn {
      cursor: pointer;

      &:hover {
        color: black;
        background: #d2d2d2;
      }
    }
  }
}
</style>