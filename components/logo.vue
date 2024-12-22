<script setup lang="ts">

</script>

<template>  
  <div class="logo">
    <img src="../assets/test_images/main_logo.png" alt="basket" />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .logo {
    opacity: 0;
  }

@include breakpoint(large) {
  .logo {
    opacity: 1;
    width: 4.6rem;
    height: 4.6rem;

    & img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

