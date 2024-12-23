<script setup lang="ts">
 import MainElement from "~/components/MainPage/MainBlock/MainElement.vue"
 import SectionOne from "~/components/MainPage/Section_one/SectionOne.vue";
 import BannerElement from "~/components/MainPage/BannerOne/bannerElement.vue";
 import MapElement from "~/components/MainPage/map/mapElement.vue";
 import SectionTwo from "~/components/MainPage/SectionTwo/SectionTwo.vue";
 import BannerSecond from "~/components/MainPage/BannerTwo/bannerSecond.vue";
 import FormSection from "~/components/formSection/formSection.vue";
 import FooterSection from "~/components/Footer/footerSection.vue";
</script>

<template>
  <div class="idx-block">
    <main-element />
    <section-one />
    <banner-element />
    <section-two />
    <banner-second />
    <form-section />
    <map-element />
    <footer-section />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/global';
  .idx-block {
    width: 100%;
    height: 100vh;
  }

@include breakpoint(large) {
  .idx-block {

  }
}
</style>