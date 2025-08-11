<template>
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-10 py-3"> <!-- header-container -->
    <div class="flex items-center gap-4 text-[#0e1a13]">
      <div class="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
      </div>
      <h2 class="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">TaskMaster</h2>
    </div>
    <button-bell-component/>
  </header>
</template>

<script setup lang="ts">
import ButtonBellComponent from '@/components/ButtonBellComponent.vue'
</script>

<style scoped></style>
