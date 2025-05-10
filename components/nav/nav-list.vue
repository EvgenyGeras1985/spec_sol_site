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
  const showMenu = (val: string) => isMenu.value = !val
</script>

<template>
  <div :class="[isMenu ? activeClass : ' ', noVisibleMenu]">
      <div class="lst__elem"  v-for="{id, text, lnk} in arr" :id="id">
        <NuxtLink @click="showMenu(isMenu)" class="lst__elem__lnk" :to=lnk>
          {{ text }}
        </NuxtLink>
      </div>
  </div>
  <button class="lst__tog" @click="showMenu(isMenu)">
    <h1>
      +
    </h1>
  </button>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
 .lst {
   position: absolute;
   left: -1000px;
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   border-top: groove;
   border-bottom: groove;
   background: linear-gradient(166deg, #FFF68D, #70EC94);


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
     z-index: 22;
     position: absolute;
     top: 104px;
     left: 1010px;
     padding: 8px;
     border-radius: 50px;
     border: 1px solid black;

     &:hover{color: #f8af1a;}
   }
 }

//class to toggle burger
 .active {
   left: 1000px;
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