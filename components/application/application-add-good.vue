<script setup lang="ts">
  import {useGoodStore} from "~/store/goods";
  import {ref} from "vue";

  const image = ref()
  const name = ref('')
  const price = ref(0)
  const category = ref('')
  const article = ref()
  const manufacturer = ref('')
  const warranty = ref('')
  const description = ref('')
  const certificate = ref()
  const passport = ref()

  const GoodStore = useGoodStore()
</script>

<template>
  <form class="add-good" action="post" name="uploadForm" enctype="multipart/form-data" multiple>
    <div>
      <p>Прикрепите картинку товара</p>
      <input class="add-good__img" type="file" ref="image" name="file" accept="image/ipg" />
    </div>
    <input class="add-good__field" type="text" placeholder="Имя" v-model="name" />
    <input class="add-good__field" type="number" placeholder="Цена" v-model="price" />
    <input class="add-good__field" type="text" placeholder="Категоря" v-model="category" />
    <input class="add-good__field" type="number" placeholder="Артикул" v-model="article" />
    <input class="add-good__field" type="text" placeholder="Производитель" v-model="manufacturer" />
    <input class="add-good__field" type="text" placeholder="Гарантия" v-model="warranty" />
    <input class="add-good__field" type="text" placeholder="Описание" v-model="description" />
    <div>
      <p>Прикрепите сертификат</p>
      <input class="add-good__certificate" ref="certificate" type="file" accept="docx" />
    </div>
    <div>
      <p>Прикрепите пасспорт</p>
      <input class="add-good__passport" ref="passport" type="file" placeholder="Паспорт товара" accept="docx" />
    </div>
    <input class="add-good__btn"
           @click="GoodStore.addGood(name, category, article, manufacturer, warranty, description, price, image, passport, certificate)" type="button" value="Добавить" />
  </form>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
  .add-good{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    &__field {
      width: 60%;
      height: 4rem;
      margin: 20px;
      font-size: 16px;
      font-weight: bold;
      color: #0a0a0a;
      outline: 0;
      border: 0;
      border-bottom: 1px solid black;
      padding: 0;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }

    &__certificate {}

    &__passport {}

    &__btn {
      width: 30%;
      height: 3rem;
      margin-top: 3rem;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      border-radius: 10px;
      padding: 10px 15px;

      &:hover {
        color: #d2d2d2;
        background: #0a0a0a;
      }
    }
  }

@include breakpoint(large) {
  .add-good{

    &__field {
      width: 20%;
    }

    &__btn {
      width: 10%;
    }
  }
}
</style>