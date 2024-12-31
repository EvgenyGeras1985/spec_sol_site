<script setup lang="ts">
  import {ref} from "vue";

  const image = ref('')
  const name = ref('')
  const price = ref()
  const category = ref('')
  const article = ref()
  const manufacturer = ref('')
  const warranty = ref('')
  const description = ref('')
  const certificate = ref()
  const passport = ref()

</script>

<template>
  <form class="add-good" action="post">
    <input class="add-good__img" type="file" placeholder="Картинка товара" v-on="image" />
    <input class="add-good__field" type="text" placeholder="Имя" v-model="name" />
    <input class="add-good__field" type="number" placeholder="Цена" v-model="price" />
    <input class="add-good__field" type="text" placeholder="Категоря" v-model="category" />
    <input class="add-good__field" type="number" placeholder="Артикул" v-model="article" />
    <input class="add-good__field" type="text" placeholder="Производитель" v-model="manufacturer" />
    <input class="add-good__field" type="text" placeholder="Гарантия" v-model="warranty" />
    <input class="add-good__field" type="text" placeholder="Описание" v-model="description" />
    <input class="add-good__certificate" type="file" placeholder="Сертификат" v-on="certificate" />
    <input class="add-good__passport" type="file" placeholder="Паспорт товара" v-on="passport" />
    <input class="add-good__btn" type="button" value="Добавить товар" />
  </form>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.add-good{
  &__field {}
  &__img {}
  &__certificate {}
  &__passport {}
  &__btn {}
}

@include breakpoint(large) {
  .add-good{
    &__field {}
    &__img {}
    &__certificate {}
    &__passport {}
    &__btn {}
  }
}
</style>