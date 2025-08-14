<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ListTaskComponent from '@/components/ListTaskComponent.vue'

</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <header-component/>
      <list-task-component/>
    </div>
  </div>
</template>



<style scoped>
</style>
