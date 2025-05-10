<template>
  <section class="admin">
    <h1 class="admin__title">Панель Администратора</h1>
    <application-add-good />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  .admin{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(166deg, #FFF68D, #70EC94);

    &__title {
      margin-bottom: 1rem;
    }
  }

@include breakpoint(large) {
      //
}
</style>