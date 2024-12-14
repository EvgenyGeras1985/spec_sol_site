<script setup lang="ts">
  import Basket from "~/components/CustomButtons/BasketBtn.vue";
  import CustomSpec from "~/components/SPECSOLlogo/customSpec.vue";
  import ListBar from "~/components/Nav/ListBar.vue";
</script>

<template>
  <nav>
    <custom-spec />
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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(166deg, #FFF68D, #70EC94);

    & .log__lnk {
      opacity: 0;
      pointer-events: none;
      cursor: default;
    }
  }

@include breakpoint(large) {
  nav {
    height: 4.2rem;
    flex-direction: row;

    & .log__lnk {
      opacity: 1;
      pointer-events: visible;
      cursor: pointer;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: bold;
      text-shadow: 3px 3px 3px silver;
      color: #408654;

      &:hover {
        color: #f8af1a;
      }
    }
  }
}
</style>

