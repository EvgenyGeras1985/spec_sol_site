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
  width: 250px;
  height: 50px;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-weight: bolder;
  text-shadow: 1px 1px 1.2px #20BF6B;

  &__fst {color: #20BF6B;}

  &_sec {
    color: black;
    margin-left: 1.0rem;
  }
}

@include breakpoint(large) {
  .spec {
    font-size: 45px;
    font-weight: bolder;
    text-shadow: 1px 1px 1.2px #20BF6B;
  }
}
</style>