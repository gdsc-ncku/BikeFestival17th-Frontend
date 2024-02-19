<template>
  <div class="h-20"></div>
  <div class="layout_content my-20 flex flex-col justify-center gap-5">
    <h1 class="text-content font-bold text-center md:text-5xl text-3xl">贊助廠商</h1>
    <p class="mb-10 text-content font-bold text-center md:text-2xl text-xl">依照中英文筆畫順序排列</p>
    <div class="flex flex-wrap gap-x-16 gap-y-8 justify-center">
      <a v-for="sponsor in sponsors" :href="sponsor.websiteURL" target="_blank">
        <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" :src="sponsor.imgURL">
      </a>
    </div>
    <h1 class="md:mt-20 mt-10 md:mb-10 mb-0 text-content font-bold text-center md:text-5xl text-3xl">網站開發團隊</h1>
    <a class="flex justify-center" href="https://gdscncku.com" target="_blank">
      <img class="h-32" src="/partners/GDSC NCKU Logo.svg">
    </a>
    <h1 class="md:mt-20 mt-10 md:mb-10 mb-0 text-content font-bold text-center md:text-5xl text-3xl">合作夥伴</h1>
    <div class="flex flex-wrap justify-center gap-x-16 gap-y-8">
      <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" src="/partners/永續創新社.png">
      <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" src="/partners/艾奇.png">
      <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" src="/partners/鄉育教育基金會.png">
    </div>
  </div>
</template>

<script setup>
const sponsors = [
  { imgURL: "partners/ADHIL.webp", websiteURL: "https://www.adhilshop.com/h/Index?key=1dg19" },
  { imgURL: "partners/deya.webp", websiteURL: "https://www.deya.tw/?lang=zh-TW" },
  { imgURL: "partners/seemore.webp", websiteURL: "https://www.see-more.com.tw/" },
  { imgURL: "partners/Sunshing.webp", websiteURL: "https://splus.com.tw/" },
  { imgURL: "partners/宏達.jpg", websiteURL: "https://www.hdps.com.tw/" },
  { imgURL: "partners/志光.webp", websiteURL: "https://www.ckpublic.com.tw/" },
  { imgURL: "partners/高點.webp", websiteURL: "https://www.get.com.tw/" },
  { imgURL: "partners/樂學網.webp", websiteURL: "https://347.com.tw/" },
];
</script>
