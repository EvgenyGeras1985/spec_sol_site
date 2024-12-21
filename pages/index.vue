<script setup lang="ts">
 import MainBlock from "~/components/MainPage/MainBlock/MainBlock.vue";
 import SectionOne from "~/components/MainPage/Section_one/SectionOne.vue";
 import BannerElement from "~/components/MainPage/BannerOne/bannerElement.vue";
 import MapElement from "~/components/MainPage/map/mapElement.vue";
 import SectionTwo from "~/components/MainPage/SectionTwo/SectionTwo.vue";
 import BannerSecond from "~/components/MainPage/BannerTwo/bannerSecond.vue";
</script>

<template>
  <main-block />
  <section-one />
  <banner-element />
  <section-two />
  <banner-second />
  <map-element />
</template>

<style scoped lang="scss">
@import 'assets/scss/global';


@include breakpoint(large) {

}
</style>