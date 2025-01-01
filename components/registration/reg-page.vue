<script setup lang="ts">
  import {ref} from "vue"
  import { useUserStore } from "~/store/user-store";

  const store = useUserStore()

  const email = ref('')
  const password = ref('')
  const phone = ref('')
  const name = ref('')
  const surname = ref('')
  const  patronymics = ref('')

  const inReg = (name:string, surname:string,patronymics:string, email:string, password:string, phone:string ) => {
      store.registration( email, password, phone ,name, surname,patronymics,)
      navigateTo('/login')
  }
</script>

<template>
  <section class="reg">
    <form class="reg__frm" action="post">
      <input class="reg__field" type="text" placeholder="Имя" v-model="name" />
      <input class="reg__field" type="text" placeholder="Фамилия" v-model="surname" />
      <input class="reg__field" type="text" placeholder="Отчество" v-model="patronymics" />
      <input class="reg__field" type="text" placeholder="email" v-model="email" />
      <input class="reg__field" type="text" placeholder="phone" v-model="phone" />
      <input class="reg__field" type="text" placeholder="password" v-model="password" />
      <input class="reg__btn" @click="inReg(name, surname,patronymics, email, phone, password)" value="Зарегестрироваться" type="button" />
      <NuxtLink class="reg__lnk" to="/login">Уже есть Аккаунт? Войти</NuxtLink>
    </form>
  </section>

</template>

<style scoped lang="scss">
@import 'assets/scss/global.scss';
.reg {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(166deg, #FFF68D, #70EC94);

  &__frm {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  &__field {
    font-size: 20px;
    color: #0a0a0a;
    width: 60%;
    height: 4rem;
    margin: 20px;
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

  &__btn {
    width: 62%;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 20px;

    &:hover {
      color: #d2d2d2;
      background: #0a0a0a;
    }
  }

  &__lnk {
    text-decoration: none;
    color: blue;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: orange;
    }
  }
}


@include breakpoint(large) {
  .reg {
    &__field{
      width: 20%;
    }

    &__btn {
      width: 14%;
    }
  }
}
</style>