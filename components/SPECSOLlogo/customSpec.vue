<script setup lang="ts">

</script>

<template>
  <div class="spec">
    <p class="spec__fst">SPEC</p>
    <p class="spec_sec">SOL</p>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.spec {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bolder;
  text-shadow: 1px 1px 1.2px #20BF6B;

  &__fst {color: #20BF6B;}

  &_sec {color: black;}
}

@include breakpoint(large) {
  nav {

  }
}
</style>