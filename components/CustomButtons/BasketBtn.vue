<script setup lang="ts">

</script>

<template>
  <div class="bst">
    <NuxtLink class="bst__btn" to="/basket">
      <img src="../../assets/test_images/basket.png" alt="basket" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
.bst {
  position: absolute;
  top: 8px;
  right: 20px;
  width: 4.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
  }

  &__btn {
    width: 100%;
    height: 100%;
  }
}

@include breakpoint(large) {
  .bst {

  }
}
</style>