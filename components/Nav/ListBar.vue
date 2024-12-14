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
  <div class="lst">
      <div class="lst__elem" v-for="{id, text, lnk} in arr" :id="id">
        <NuxtLink class="lst__elem__lnk" :to=lnk>{{ text }}</NuxtLink>
      </div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
 .lst {
   width: 100%;
   height: 80%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;

   &__elem {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 50%;
     padding: 40px;
     text-align: justify;
     box-shadow: 2px 2px 12px black;
     outline: 1px solid black;
     background: linear-gradient(166deg, #d0c748, #03862b);

     &__lnk {
       text-decoration: none;
       font-size: 1.2rem;
       font-weight: bold;
       text-shadow: 3px 3px 3px silver;
       color: #0e381d;

       &:hover {
         color: #f8af1a;
       }
     }
   }
 }

@include breakpoint(large) {
  .lst {
    width: 40%;
    flex-direction: row;

    &__elem {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      padding: 0;
      box-shadow: none;
      outline: none;
      background: none;

      &__lnk {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        color: #0e381d;

        &:hover {
          color: #f8af1a;
        }
      }
    }
  }
}
</style>