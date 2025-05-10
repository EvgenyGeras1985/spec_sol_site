<script setup lang="ts">
  import LogOut from "~/components/buttons/log-out.vue";
  import Basket from "~/components/cart/basket-button.vue";
  import NavList from "~/components/nav/nav-list.vue";
</script>

<template>
  <nav>
    <logo />
    <nav-list/>
    <log-out />
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

@include breakpoint(large) {
  nav {
    position: fixed;
    top: 3%;
    left: 0;
    height: 6.2rem;
    flex-direction: row;
    background: none;
  }
}
</style>

