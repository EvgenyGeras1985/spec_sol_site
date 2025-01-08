<script setup lang="ts">
  import {useUserStore} from "~/store/user-store";

  const store = useUserStore()
</script>

<template>
  <NuxtLink v-if="!store.auth" class="log__lnk" to="/login">
    Войти
  </NuxtLink>
  <NuxtLink v-else @click="store.logout()" class="log__lnk" to="/">
    Выйти
  </NuxtLink>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

  .log__lnk {
    position: absolute;
    top: 42px;
    left: 1015px;
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
    .log__lnk {
      position: initial;
      top: 0;
      left: 0;
    }
}
</style>