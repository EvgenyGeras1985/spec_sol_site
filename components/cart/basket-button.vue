<template>
  <div class="bst">
    <NuxtLink class="bst__btn" to="/basket">
      <img src="/images/cart.png" alt="корзина" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .bst {
    position: absolute;
    top: 22px;
    left: 1323px;
    width: 3.2rem;
    height: 2.8rem;
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
    left: 0;
    right: 32px;
    position: static;
    transition:0.3s ease-in-out;

    &:hover{
      width: 3.6rem;
      height: 3.3rem;
    }
  }
}
</style>