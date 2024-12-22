<script setup lang="ts">
  import AdvCard from "~/components/cards/AdvCard.vue";

  const advArr = [
    {
      id: 1,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: 2,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: 3,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: 4,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: 5,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
    {
      id: 6,
      title: "Сроки",
      description: "Мы всегда очень трепетно относимся к сдаче работ в срок",
    },
  ]
</script>

<template>
  <section class="section-two">
    <article class="section-two__title">Почему именнно мы ?</article>
    <adv-card v-for="adv in advArr" :key="adv.id" :adv="adv" />
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.section-two {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin: 3rem;
  }
}

@include breakpoint(large) {
  .section-two {
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;

    &__title {
      font-size: 28px;
      font-weight: bold;
      margin: 3rem;
    }
  }
}
</style>