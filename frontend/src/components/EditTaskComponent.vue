<script setup lang="ts">
import ButtonSaveComponent from '@/components/ButtonSaveComponent.vue'
</script>

<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">Edit Task</p></div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Task Name</p>
          <input
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-14 placeholder:text-[#51946b] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Project</p>
          <select
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#51946b] p-4 text-base font-normal leading-normal"
          >
            <option value="one"></option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Status</p>
          <select
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#51946b] p-4 text-base font-normal leading-normal"
          >
            <option value="one"></option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Priority</p>
          <select
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#51946b] p-4 text-base font-normal leading-normal"
          >
            <option value="one"></option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Description</p>
          <textarea
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none min-h-36 placeholder:text-[#51946b] p-4 text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <button-save-component/>
    </div>
  </div>
</template>

<style scoped>
</style>
