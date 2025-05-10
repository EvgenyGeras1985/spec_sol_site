<script setup lang="ts">
  import { useUserStore } from "~/store/user-store";
  import { onMounted } from 'vue'

  const store = useUserStore()
  onMounted(() => {
    store.checkAuth()
  })
</script>

<template>
  <suspense>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </suspense>
</template>

