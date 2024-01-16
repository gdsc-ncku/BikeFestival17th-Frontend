<template>
  <div class="h-20"></div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5">
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-5xl hidden sm:block">贊助廠商</h1>
    <p class="text-[#3A3A3A] font-bold text-center text-2xl hidden sm:block">依照中英文筆畫順序排列</p>
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-[2rem] sm:hidden">合作夥伴</h1>
    <div class="flex flex-wrap sm:gap-x-14 sm:gap-y-[4.06rem] gap-x-[4.5rem] gap-y-2 justify-center">
      <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" v-for="sponsor in sponsors" :src="sponsor">
    </div>
  </div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5 mb-[6.17rem]">
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-[2rem]">網站開發團隊</h1>
    <a class="sm:w-[50rem] w-[21.875rem] mx-auto" href="https://gdsc.community.dev/national-cheng-kung-university/">
      <img class="w-full" src="/partners/GDSC NCKU Logo.svg">
    </a>
  </div>
</template>

<script setup>
  // Data
  const sponsors = [
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
    "/logo-dark.svg",
  ]
</script>
