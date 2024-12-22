<script setup lang="ts">
  import Basket from "~/components/CustomButtons/BasketBtn.vue";
  import CustomSpec from "~/components/SPECSOLlogo/customSpec.vue";
  import ListBar from "~/components/nav/ListBar.vue";
</script>

<template>
  <nav>
    <logo />
    <list-bar />
    <NuxtLink class="log__lnk" to="/login">
      Мой Аккаунт
    </NuxtLink>
    <basket />
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  nav {
    position: absolute;
    left: -1000px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(166deg, #FFF68D, #70EC94);
  }

  .log__lnk {
      position: absolute;
      top: 30px;
      left: 1030px;
      color: #0e381d;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: bold;
      text-shadow: 3px 3px 3px silver;

      &:hover {
        color: #f8af1a;
      }
    }

@include breakpoint(large) {
  nav {
    position: fixed;
    top: 5%;
    left: 2%;
    height: 6.2rem;
    flex-direction: row;
    background: none;

    & .log__lnk {
      position: initial;
      top: 0;
      left: 0;
    }
  }
}
</style>

