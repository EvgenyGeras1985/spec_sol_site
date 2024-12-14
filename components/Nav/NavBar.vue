<script setup lang="ts">
  import Basket from "~/components/Basket.vue";
  import CustomButton from "~/components/CustomButtons/CustomButton.vue";
  import CustomSpec from "~/components/SPECSOLlogo/customSpec.vue";

  const arr = [
    {
      id: 1,
      text: "Главная",
      lnk: '/'
    },
    {
      id: 2,
      text: "Каталог",
      lnk: "/catalog"
    },
    {
      id: 3,
      text: "Портфолио",
      lnk: "/portfolio"
    },
    {
      id: 4,
      text: "Личный Кабинет",
      lnk: "/personalAccount"
    }
  ]
</script>

<template>
  <nav>
    <custom-spec />
    <div>
      <ul>
        <li v-for="{id, text, lnk} in arr" :id="id">
          <NuxtLink :to=lnk>{{ text }}</NuxtLink>
        </li>
      </ul>
    </div>
    <custom-button to="/login">
      Войти
    </custom-button>
    <basket />
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  nav {

  }

@include breakpoint(large) {
  nav {

  }
}
</style>

