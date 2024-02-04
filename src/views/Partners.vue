<template>
  <div class="h-20"></div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5">
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-5xl hidden sm:block">贊助廠商</h1>
    <p class="text-[#3A3A3A] font-bold text-center text-2xl hidden sm:block">依照中英文筆畫順序排列</p>
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-[2rem] sm:hidden">合作夥伴</h1>
    <div class="flex flex-wrap sm:gap-x-14 sm:gap-y-[4.06rem] gap-x-[4.5rem] gap-y-5 justify-center">
      <a v-for="sponsor in sponsors" :href="sponsor.websiteURL" target="_blank">
        <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" :src="sponsor.imgURL">
      </a>
    </div>
  </div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5 mb-[6.17rem]">
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-[2rem]">網站開發團隊</h1>
    <a class="sm:w-[50rem] w-[21.875rem] mx-auto" href="https://gdsc.community.dev/national-cheng-kung-university/" target="_blank">
      <img class="md:w-full w-72" src="/partners/GDSC NCKU Logo.svg">
    </a>
  </div>
</template>

<script setup>
  const sponsors = [
    {
      imgURL: "partners/宏達.jpg",
      websiteURL: "https://www.hdps.com.tw/"
    },
    {
      imgURL: "partners/ADHIL.webp",
      websiteURL: "https://www.adhilshop.com/h/Index?key=1dg19"
    },
    {
      imgURL: "partners/高點.webp",
      websiteURL: "https://www.get.com.tw/"
    },
    {
      imgURL: "partners/志光.webp",
      websiteURL: "https://www.ckpublic.com.tw/"
    },
    {
      imgURL: "partners/seemore.webp",
      websiteURL: "https://www.see-more.com.tw/"
    },
    {
      imgURL: "partners/樂學網.webp",
      websiteURL: "https://347.com.tw/"
    },
    {
      imgURL: "partners/Sunshing.webp",
      websiteURL: "https://splus.com.tw/"
    },
    {
      imgURL: "partners/deya.webp",
      websiteURL: "https://www.deya.tw/?lang=zh-TW"
    },
  ];
</script>
