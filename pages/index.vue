<script setup lang="ts">
 import MainElement from "~/components/MainPage/MainBlock/MainElement.vue"
 import SectionOne from "~/components/MainPage/section/section-one.vue";
 import BannerElement from "~/components/MainPage/banner/banner-one.vue";
 import MapElement from "~/components/MainPage/map/mapElement.vue";
 import SectionTwo from "~/components/MainPage/section/section-two.vue";
 import BannerSecond from "~/components/MainPage/banner/banner-two.vue";
 import FormSection from "~/components/form/application-form.vue";
 import FooterSection from "~/components/footer/footer-section.vue";
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