<script setup lang="ts">
  const arr = [
  {
    id: 1,
    text: "Главная",
    lnk: '/'
  },
  {
    id: 2,
    text: "Каталог",
    lnk: "/catalog/catalog"
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

  const activeClass = 'active'
  const noVisibleMenu = 'lst'
  const isMenu = ref(false);
  const showMenu = (val: boolean) => isMenu.value = !val
</script>

<template>
  <div :class="[isMenu ? activeClass : ' ', noVisibleMenu]">
      <div class="lst__elem" v-for="{id, text, lnk} in arr" :key="id">
        <NuxtLink @click="showMenu(isMenu)" class="lst__elem__lnk" :to=lnk>
          {{ text }}
        </NuxtLink>
      </div>
  </div>
  <button class="lst__tog" @click="showMenu(isMenu)">
      {{isMenu ? "Скрыть" : "Меню"}}
  </button>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
 .lst {
   position: absolute;
   left: -1000px;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   background: linear-gradient(166deg, #FFF68D, #70EC94);
   //border-top: groove;
   //border-bottom: groove;



   &__elem {
     display: flex;
     justify-content: center;
     align-items: center;

     &__lnk {
       color: #0e381d;
       text-decoration: none;
       font-size: 1.2rem;
       font-weight: bold;
       text-shadow: 3px 3px 3px silver;

       &:hover {
         color: #f8af1a;
       }
     }
   }

   //Сменить на бургер через before after
   &__tog{
     z-index: 110;
     position: absolute;
     top: 104px;
     left: 1010px;
     width: 60px;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #203307;
     font-size: 1rem;
     font-weight: bold;
     padding: 18px;
     border-radius: 50%;
     box-shadow: 3px 2px 2px #144c04;
     background: linear-gradient(166deg, #FFF68D, #0b521f);

     &:hover{
       color: white;
       background: linear-gradient(166deg, #f8f8f8, #080e0b);
     }
   }
 }

//class to toggle burger
 .active {
   position: fixed;
   left: 0;
   top: 0;
   transition: left 0.5s ease-in-out;
 }

@include breakpoint(large) {
  .lst {
    width: 40%;
    position: initial;
    flex-direction: row;
    border-top: none;
    border-bottom: none;
    background: none;

    &__tog{
      display: none;
    }

    &__elem {
      background: none;
    }
  }
}
</style>