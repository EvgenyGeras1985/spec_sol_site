<script setup lang="ts">
  const footArr = [
    {
      id: 1,
      title: "Адрес :",
      description:"Москва, ул. Докукина, д.8, стр.2"
    },
    {
      id: 2,
      title: "Время работы :",
      description: "Время работы : Пн - Пт: 09:00 - 18:00 Сб - Вс: выходной",
    },
    {
      id: 3,
      title: "8-930-937-33-20",
      description: "spec.sol@yandex.ru",
    }
  ]
</script>

<template>
  <footer class="foot">
    <article class="foot__title">
      <h2>
        Контакты
      </h2>
    </article>
    <card-footer v-for="elem in footArr" :key="elem.id" :elem="elem" />
  </footer>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.foot {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #d2d2d2;
  background: black;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 3rem;
  }
}

@include breakpoint(large) {
  .foot {
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;

    &__title {
      font-size: 1.4rem;
    }
  }
}
</style>