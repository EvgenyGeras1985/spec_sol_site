<script setup lang="ts">
  import {useUserStore} from "~/store/user-store";

  const store = useUserStore()

  const handler = () => alert('Эта кнопка будет запоминать конфиг товаров')
</script>

<template>
  <section class="user" >
    <h1>Личный Кабинет</h1>

    <section class="user__content">
      <div class="user__info" :key="store.user.id">
        <p>{{store.user.surname}}</p>
        <p>{{store.user.name}}</p>
        <p>{{store.user.patronymics}}</p>
        <br />
        <p>{{store.user.email}}</p>
        <p>{{store.user.phone}}</p>
      </div>
      <div class="user__goods">

      </div>
      <button @click="handler" class="user__btn">
        Запомнить конфигурацию
      </button>
    </section>
  </section>
</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
h1{
  position: absolute;
  top: 12rem;
}
  .user{
    &__content {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      background: white;
    }

    &__info{
      width: 100%;
      height: 100%;
      font-size: 1.7rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__goods{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__btn{
      margin: 2rem;
      width: 56%;
      height: 8rem;
      border-radius: 10px;
      font-size: 20px;
      cursor: pointer;
      background: linear-gradient(166deg, #FFF68D, #408654);

      &:hover {
        color: #d2d2d2;
        background: #0a0a0a;
      }
    }
  }

@include breakpoint(large) {
  h1{
    top: 11rem;
  }

  .user{
    &__content {
      flex-direction: row;
    }

    &__info{
      width: 20%;
      height: 30%;
    }

    &__goods{
      width: 45%;
      height: 100%;
    }

    &__btn{
      margin: 2rem;
      width: 8%;
      height: 4rem;
      border-radius: 10px;
      font-size: 18px;
    }
  }
}
</style>