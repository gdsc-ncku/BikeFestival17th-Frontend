<template>
  <RouterLink
    :to="link"
    class="h-[18rem] w-[22rem] block rounded-lg pt-[6rem] group overflow-hidden last:mr-auto"
  >
    <div class="w-full h-[12rem] relative isolate bg-primary-900">
      <div class="group-hover:hidden w-full h-[2rem] absolute top-0 bg-primary-700"></div>
      <div class="group-hover:hidden absolute top-[2rem] w-0 h-0 border-[#0000] border-x-[11rem] border-y-[4rem] border-t-primary-700"></div>
      <div class="group-hover:hidden z-[-1] w-full h-[2rem] top-[0.1rem] absolute top-0 bg-[#FFF]"></div>
      <div class="group-hover:hidden z-[-1] absolute top-[2.1rem] w-0 h-0 border-[#0000] border-x-[11rem] border-y-[4rem] border-t-[#FFF]"></div>
      <div class="absolute bottom-4 right-3 text-xl font-bold text-white">FROM {{ name }}</div>
      <div class="hidden group-hover:block absolute top-[-12rem] w-0 h-0 border-[#0000] border-x-[11rem] border-y-[6rem] border-b-primary-900"></div>
      <div class="hidden group-hover:block absolute w-[20rem] h-[6rem] bg-[#FFF] top-[-3rem] left-[1rem] border-primary-900 border-[0.1rem] rounded-t">
        <div class="absolute w-[90%] h-[0.1rem] left-[5%] top-[1.5rem] bg-[#CCC]"></div>
        <div class="absolute w-[90%] h-[0.1rem] left-[5%] top-[3rem] bg-[#CCC]"></div>
        <div class="absolute w-[90%] h-[0.1rem] left-[5%] top-[4.5rem] bg-[#CCC]"></div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
});
</script>
