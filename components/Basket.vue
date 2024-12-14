<script setup lang="ts">
  import CustomButton from "~/components/CustomButtons/CustomButton.vue";
</script>

<template>
  <div class="bst">
    <custom-button class="bst__btn" to="/basket">
      <img src="assets/test_images/bst.webp" alt="basket" />
    </custom-button>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.bst {
  width: 100px;
  height: 100px;

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
  bst {

  }
}
</style>