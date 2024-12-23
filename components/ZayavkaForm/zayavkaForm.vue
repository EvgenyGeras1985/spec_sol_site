<script setup lang="ts">
import {ref} from "vue"

const name = ref('')
const email = ref('')
const phone = ref()
const comment = ref('')

const test = (name:string, email:string, phone:number, comment:string) => {
  return alert(name +email + phone + comment)
}
</script>

<template>
  <form class="zform" action="">
    <input class="zform__field" type="text" placeholder="Имя" v-model="name" />
    <input class="zform__field" type="text" placeholder="email" v-model="email" />
    <input class="zform__field" type="number" placeholder="phone" v-model="phone" />
    <input class="zform__field" type="text" placeholder="Комментарий" v-model="comment" />
    <input class="zform__btn" @click="test(name, email, phone, comment)" type="submit" placeholder="Отправить заявку">
  </form>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
.zform {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  &__field {
    font-size: 20px;
    color: #0a0a0a;
    width: 40%;
    height: 4rem;
    margin: 20px;
    outline: 0;
    border:0;
    border-bottom: 1px solid black;
    padding: 0;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  &__btn {
    width: 40%;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 15px;

    &:hover{
      color: #d2d2d2;
      background: #0a0a0a;
    }
  }
}

@include breakpoint(large) {
  .zform {
    flex-direction: row;
    flex-wrap: wrap;

    &__btn {
      width: 18%;
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
      border-radius: 10px;
      padding: 10px 15px;

      &:hover{
        color: #d2d2d2;
        background: #0a0a0a;
      }
    }
  }
}
</style>