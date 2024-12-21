<script setup lang="ts">
  import CustomSpec from "~/components/SPECSOLlogo/customSpec.vue";

  const handler = () => alert("in process.....")
</script>

<template>
  <main>
    <section class="section-one">
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
    </section>
  </main>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
main {

  & .section-one {
    &__title{}
    &__description{}
    &__btn{}
  }
}


@include breakpoint(large) {
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(166deg, #FFF68D, #70EC94);

    & .section-one {
      position: absolute;
      left: 30rem;

      &__title {
        font-size: 3.2rem;
        color: #727C8F;
      }
      &__description {
        margin: 20px 0px;
        font-size: 1.2rem;
        font-weight: bold;
      }
      &__btn {
        padding: 5px 25px;
        border-radius: 10px;
        color: white;
        background: black;
        font-size: 1.0rem;
        font-weight: bold;

        &:hover {
          color: black;
          background: white;
          cursor: pointer;
          transition: color, background 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>