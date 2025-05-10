<script setup lang="ts">
  const advArr = [
    {
      id: "01.",
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: "02.",
      title: "Материалы",
      description: "Используем только сертифицированные и качественные материалы",
    },
    {
      id: "03.",
      title: "Проектирование",
      description: "Поможем создать проект в любой сфере систем безопасности и энергетики",
    },
    {
      id: "04.",
      title: "Специалисты",
      description: "У нас работают только профессионалы",
    },
    {
      id: "05.",
      title: "Гарантия 5 лет",
      description: "Мы всегда на связи",
    },
    {
      id: "06.",
      title: "Репутация",
      description: "Ответственно и качественно выполняем свою работу уже 10 лет",
    },
  ]
</script>

<template>
  <section class="section-two">
    <article class="section-two__title">
      Почему именно мы ?
    </article>
    <card-adv v-for="adv in advArr" :key="adv.id" :adv="adv" />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.section-two {
  margin: auto;
  width: 60%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    margin: 3rem;
  }
}

@include breakpoint(large) {
  .section-two {
    width: 60%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;

    &__title {
      font-size: 4rem;
    }
  }
}
</style>