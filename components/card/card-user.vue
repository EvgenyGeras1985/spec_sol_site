<script setup lang="ts">
  const handler = () => alert('Эта кнопка будет убирать товар')
</script>

<template>
  <section class="user-card">
    <div class="user-card__img">
      <img src="/test_good_img.png" alt="товар">
    </div>
    <article class="user-card__title">
      <h2>Good name</h2>
    </article>
    <div class="user-card__count">
      <p>1</p>
    </div>
    <button @click="handler" class="user-card__remove">
      Убрать товар
    </button>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.user-card{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  &__img{
    width: 20%;
    height: 100%;

    & img{
      width: 100%;
      height: 100%;
    }
  }
  &__title {}
  &__count {}
  &__remove {
    padding: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    background: linear-gradient(166deg, #FFF68D, #408654);

    &:hover {
      color: #d2d2d2;
      background: #0a0a0a;
    }
  }
}

@include breakpoint(large) {
  .user-card{
    width: 86%;

    &__img{width: 25%;}
    &__title {}
    &__count {}
    &__remove {}
  }
}
</style>