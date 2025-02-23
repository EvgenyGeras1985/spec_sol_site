<script setup lang="ts">
  import {useUserStore} from "~/store/user-store";
  import {onMounted} from "vue";

  const store = useUserStore();

  onMounted(() => {
    store.checkAuth()
  })
</script>

<template>
  <section class="cart">
    <h1>Корзина пользователя {{store.user.cart_id}}, {{store.user.surname}}</h1>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  .cart {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(166deg, #FFF68D, #70EC94);
   }

@include breakpoint(large) {

}
</style>