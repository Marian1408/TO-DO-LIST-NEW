<script setup lang="ts">

</script>

<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">New Task</p></div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Title</p>
          <input
            placeholder="Enter task title"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946b] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Description</p>
          <textarea
            placeholder="Enter task description"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] min-h-36 placeholder:text-[#51946b] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0e1a13] text-base font-medium leading-normal pb-2">Due Date</p>
          <div class="flex w-full flex-1 items-stretch rounded-lg">
            <input
              placeholder="Select due date"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946b] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
              value=""
            />
            <div
              class="text-[#51946b] flex border border-[#d1e6d9] bg-[#f8fbfa] items-center justify-center pr-[15px] rounded-r-lg border-l-0"
              data-icon="Calendar"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                ></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
      <div class="flex px-4 py-3 justify-end">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39e079] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
