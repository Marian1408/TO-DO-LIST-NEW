<script setup lang="ts">

</script>

<template>
  <div class="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2">
    <div class="flex size-7 items-center justify-center">
      <input type="checkbox"
        class="h-5 w-5 rounded border-[#d1e6d9] border-2 bg-transparent text-[#39e079] checked:bg-[#39e079] checked:border-[#39e079] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6d9] focus:outline-none" />
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1"><slot></slot></p>
      <p class="text-[#51946b] text-sm font-normal leading-normal line-clamp-2"><slot></slot></p>
    </div>
  </div>
</template>

<style scoped></style>
