<script setup lang="ts">
  import AdminPanel from "~/components/account/admin-panel.vue";
  import UserAccount from "~/components/account/user-account.vue";
  import {useUserStore} from "~/store/user-store";

  const store = useUserStore()
</script>

<template>
    <admin-panel v-if="store.role == 'ADMIN'" />
    <user-account v-if="store.role == 'USER'" />
    <h1 v-if="store.role == ' '">
      Вы не авторизованы
    </h1>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  h1 {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .admin {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(166deg, #FFF68D, #70EC94);
  }

  .user{
    z-index: -2;
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