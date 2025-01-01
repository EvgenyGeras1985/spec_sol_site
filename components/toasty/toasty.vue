<script setup lang="ts">
import {toast} from "~/types/toasty-message";

const props = defineProps<{
  message: toast
}>()
</script>

<template>
  <div>
    <section class="toast">
      <article>
        <h2>Title</h2>
      </article>
      <div>
        description
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>