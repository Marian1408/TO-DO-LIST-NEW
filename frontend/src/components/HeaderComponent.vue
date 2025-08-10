<template>
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-10 py-3"> <!-- header-container -->
    <div class="flex items-center gap-4 text-[#0e1a13]">
      <div class="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
      </div>
      <h2 class="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">TaskMaster</h2>
    </div>
    <div class="flex flex-1 justify-end gap-8">
      <button
        class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e8f2ec] text-[#0e1a13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
      >
        <div class="text-[#0e1a13]" data-icon="ListBullets" data-size="20px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"
            ></path>
          </svg>
        </div>
      </button>
      <div
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMSyTll3B5rwySAHd3oDwdoGKVH3UI_udFu3tK9DLuHlZyOG1TwSbchzC7wMR51mazc_JNcVvd9MChbbnYKBVVULHBVVLl4nnhEMqsPBPq7qCODMmhcBNWTRTop7DNz7T4vP67ZZIaRgH1bpNrGNKcIZk-2_MM_32mmYLJ_0hfKRgxMOvdl1-HAJ-tmpl0fFfw8l6Gj4UXZgG_1GXrvIW3CXTxX6Wx350rg_Sq7AdUmZ9smLjS6MnJvAzjO1iiMOlYziGfrOyPiuBV");'
      ></div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
