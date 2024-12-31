<script setup lang="ts">
  import AdminPanel from "~/components/account/admin-panel.vue";
  import UserAccount from "~/components/account/user-account.vue";

  const isAdmin = ref(true);
</script>

<template>
    <admin-panel v-if="isAdmin" />
    <user-account v-else />
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.admin {
  width: 100%;
  height: 100vh;
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