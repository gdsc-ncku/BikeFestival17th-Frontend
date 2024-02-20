<template>
  <!-- Key Visual Design -->
  <div
    class="relative w-full h-screen bg-cover bg-center"
    style="background-image: url('/BikeFestival17th-Frontend/home/key-visual.webp')"
  >
    <div class="slide-left-in layout_content opacity-0 text-white font-black lg:text-5xl text-4xl">
      <div class="absolute top-[40vh]">
        <h1 class="">成大單車節，</h1>
        <h1 class="mt-3 ">構築屬於你的大學藍圖</h1>
        <h1 class="mt-5 font-normal lg:text-4xl text-2xl">
          2024年3月2~3日 ＠成大光復校區
        </h1>
      </div>
    </div>
    <div class="arrow-bounce absolute w-full flex justify-center top-[85vh] opacity-0">
      <img class="lg:h-20 h-10" :src="downChevron">
    </div>
  </div>

  <!-- Story -->
  <div class="layout_content md:py-20 py-10 flex md:flex-row flex-col">
    <div class="flex-1 md:ml-10 md:mb-0 mb-12">
      <h2 id="typewriter" class="font-bold text-content xl:text-4xl lg:text-3xl text-2xl md:mb-6 mb-7">
        單車十七 有點東西
      </h2>
      <div class="md:pr-10 text-content lg:text-base text-sm">
        <p>成大單車節，致力於弭平高中與大學端之資訊落差。<br>
          我們創造對話的平台，讓身處第一線戰場的大學生，分享屬於我們的故事，激盪出的火花與羈絆，將是你們勇敢前行的最佳後盾。
          <br><br>今年三月二號、三號，一起來到成大單車節，讓我們攜手前行，帶你一步步構築屬於自己的大學藍圖。</p>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center">
      <iframe
        class="lg:w-[432px] md:w-[300px] sm:w-[330px] aspect-video"
        src="https://www.youtube.com/embed/VSyUVDKVxKM?si=Yo2SvWps-_pVNS5I"
      >
      </iframe>
      <span class="font-black xl:text-xl text-lg">宣傳短片</span>
    </div>
  </div>

  <!-- psychological test -->
  <!-- <div class="flex md:flex-row flex-col sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pb-10 bg-primary-900">
    <div class="flex-1 flex flex-col items-center lg:pt-0 pt-5">
      <img
        class="lg:w-96 w-80"
        alt="psychological-test"
        src="https://fakeimg.pl/300x200"
      />
      <div class="sm:mt-4 w-full sm:flex sm:justify-center hidden">
        <RouterLink to="#" class="flex lg:w-40 lg:h-16 lg:p-0 px-6 py-3 justify-center bg-white rounded-lg">
          <div class="flex flex-col justify-center">
            <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="flex-1 relative px-[2rem] sm:p-0 py-10 sm:overflow-visible overflow-hidden">
      <h2 class="mb-10 font-bold text-white xl:text-4xl lg:text-3xl text-2xl">
        測驗 - 你是哪一種車車？
      </h2>
      <div class="absolute ellipse xl:-translate-x-[50px] xl:translate-y-[60px] -translate-x-[20px] translate-y-[-20px] xl:left-0 left-[1/5]"></div>
      <div class="absolute ellipse xl:translate-x-[510px] xl:-translate-y-[30px] translate-x-[300px] -translate-y-[0px]"></div>
      <div class="absolute ellipse xl:translate-x-[280px] xl:translate-y-[170px] translate-x-[80px] translate-y-[90px] xl:left-0 left-[1/5]"></div>
      <div class="opacity-95 text-white xl:text-2xl lg:text-base text-sm">
        <p>
          在尋找方向之前，要先知道自己是誰，才能知道自己適合什麼、想要什麼。<br>
          但，你真的了解自己嗎？<br>
          第十七屆成大單車節限定心理測驗！<br>
          <br>
          「在單車的世界裡，你的本體是...？」<br>
          各式各樣的單車，你是哪一種單車呢？<br>
          此外還有推薦的單車節行程、能力分析、好夥伴和壞夥伴們，等你來解鎖！
        </p>
      </div>
    </div>

    <div class="sm:hidden w-full flex justify-center opacity-[99%]">
      <RouterLink class="flex justify-center bg-white rounded-lg w-80 h-12" to="#">
        <div class="flex flex-col justify-center">
          <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
        </div>
      </RouterLink>
    </div>
  </div> -->

  <!-- 8 theme activities -->
  <div class="layout_content md:my-20 my-10 flex flex-col items-center">
    <h2 class="mb-12 font-bold text-content xl:text-4xl lg:text-3xl text-2xl">八大主題活動</h2>
    <div class="lg:w-[800px] w-full sm:pt-16 sm:px-16 px-10 py-10 rounded-lg border-2 border-content bg-white">
      <Splide
        :options="{
          autoplay: true, interval: 2000, type: 'loop', perPage: 1, padding: '10rem', gap: '2rem',
          breakpoints: { 640: {padding: '0rem', gap: '0rem'}, },
      }">
        <SplideSlide v-for="(item, index) in activities" :key="index">
          <RouterLink :to=item.url class="w-full">
            <div class="relative w-full aspect-video mb-5">
              <img :src="item.img" :alt="item.title" class="absolute w-full h-full object-cover md:rounded-2xl rounded-lg" />
              <div style="border-radius: 16px; background: linear-gradient(0deg, #404040 0%, rgba(217, 217, 217, 0.00) 100%);" class="absolute z-10 w-full h-full"></div>
              <h1 class="text-white text-xl font-bold absolute z-10 bottom-5 right-10 lg:left-auto left-5">{{ item.title }}</h1>
            </div>
          </RouterLink>
          <div class="mb-10 lg:text-xl text-base">{{ item.brief }}</div>
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <!-- column articles -->
  <div class="layout_content flex flex-col md:my-20 my-10 items-center">
    <h2 class="mb-12 font-bold text-content xl:text-4xl lg:text-3xl text-2xl text-center">專欄文章</h2>
    <div class="flex gap-10 md:flex-row flex-col items-center justify-around">
      <DiscCard
        title="我們所不知道的升學"
        class_="衝升學"
        timestamp="2023-12-30"
        context="小編在這裡整理了一些升大學管道有關簡介，還有貼心附上時程表🕒 讓大家的升學之路更清晰，裡面有主要採用的 #個人申請 用多元面向去展現自己；在學校都排名很靠前 #繁星 是你的好夥伴⭐；硬實力才是王道 #分科 見真章；覺得科大也適合自己那就用 #四技申請；某幾個技能特別突出 #特殊選才 等著你！"
        title-size="text-base"
        link="/forum/featuredArticles/education_4"
      />
      <DiscCard
        title="成為工程師的第一步－認識程式語言"
        class_="技能點"
        timestamp="2023-12-20"
        context="我們統整了#Python #JavaScript C++的優缺點以及應用層面，也簡單地說明了前端與後端的差異，大家不妨先了解前後端的差異，再選擇適合自己的程式語言喔！"
        title-size="text-base"
        link="/forum/featuredArticles/skill_3"
      />
      <DiscCard
        title="能力開光加持-證照一把抓"
        class_="拼考試"
        timestamp="2024-02-10"
        context="證照在我手，考運我來有🔥這邊為大家介紹不同科系的相關證照，讓我們收藏有興趣的證照並贏在起跑點吧！"
        title-size="text-base"
        link="/forum/featuredArticles/exam_3"
      />
    </div>
    <div class="flex items-center mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M13.7881 23.4291L20.6902 16.5813L13.8424 9.6792L13.7881 23.4291Z" fill="#FF974D"/></svg>
      <RouterLink to="/forum" class="text-primary text-base underline underline-offset-2">查看更多專欄文章</RouterLink>
    </div>
  </div>

  <!-- souvenir -->
  <div class="sm:flex sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pt-10 pb-12 px-8 bg-primary-900">
    <div class="text-white xl:text-2xl lg:text-base text-sm">
      <h2 class="font-bold text-white xl:text-4xl lg:text-3xl text-2xl lg:mb-12 sm:mb-10 mb-7">紀念品小舖</h2>
      <div class="*:w-max w-max sm:m-0 mx-auto mb-6">
        <p>敬請期待！</p>
      </div>
      <RouterLink
        class="lg:flex h-16 justify-center bg-white rounded-lg mt-7 "
        to="/souvenir"
      >
        <div class="flex flex-col justify-center">
          <span class="block text-primary-900 font-medium"> 商品介紹 </span>
        </div>
      </RouterLink>
    </div>
    <div
      class="grid gap-x-8 gap-y-4 sm:grid-cols-3 grid-cols-2 *:mx-auto *:block sm:*:w-48 *:w-40 object-fill"
    >
      <img src="/souvenir/Bike17_pin.png" />
      <img src="/souvenir/Bike17_pin_2.png" />
      <img src="/souvenir/Bike17_pin_3.png" />
      <img src="/souvenir/Bike17_towel.png" />
      <img src="/souvenir/Bike17_towel_2.png" />
      <img src="/souvenir/omamori.jpg" />
    </div>
  </div>

  <!-- partners -->
  <div class="layout_content my-20 flex flex-col justify-center gap-5">
    <h1 class="text-content font-bold text-center xl:text-4xl lg:text-3xl text-2xl">贊助廠商</h1>
    <p class="mb-10 text-content text-center text-base">依照中英文筆畫順序排列</p>
    <div class="flex flex-wrap gap-x-16 gap-y-8 justify-center">
      <a v-for="sponsor in sponsors" :href="sponsor.websiteURL" target="_blank">
        <img class="sm:w-[12.5rem] w-32 sm:h-[12.5rem] h-32 object-contain" :src="sponsor.imgURL">
      </a>
    </div>
  </div>

  <!-- line official account -->
  <div class="layout_content md:pt-20 pt-0 pb-20 flex lg:flex-row flex-col justify-center lg:gap-20 gap-10">
    <img src="/home/line.png" alt="line" width="200">
    <div>
      <h1 class="mb-5 lg:text-5xl text-3xl font-bold">加入LINE官方帳號，</h1>
      <h1 class="mb-10 lg:text-5xl text-3xl font-bold">活動通知不漏接！</h1>
      <a href="https://lin.ee/7Y8Zdu0" class="px-4 py-2 bg-[#00CB42] hover:bg-[#00B23A] text-white text-xl rounded-lg transition-all ease-in ">加入好友</a>
    </div>
  </div>

  <div class="layout_content md:pt-20 pt-0 pb-20 lg:gap-20 gap-10 text-center">
      <span class="text-primary">成大駐警隊</span>：06-2757575 #66666<br>
      <span class="text-primary">成大醫院急診部</span>：06-2353535 #2237、06-2359562<br>
      地址：70146 臺南市北區勝利路138號<br>
      如病情或受傷狀況宜由專業人員照護者，應打119專線申請專業單位救護。<br>
  </div>

  <!-- key visual bottom -->
  <div class="w-full">
    <div
      class="w-full h-[400px] bg-cover bg-center relative"
      style="background-image: url('/BikeFestival17th-Frontend/home/key-visual-bottom.webp')"
    ></div>
    <div class="absolute -translate-y-48 left-1/2 -translate-x-1/2">
      <h2 class="text-white font-black lg:text-4xl text-2xl">
        邀請你踏上探索科系的旅程！
      </h2>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import downChevron from '@/assets/down-chevron.svg';
import DiscCard from '@/components/DiscCard.vue';
import activities from "@/data/activities.json";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

document.addEventListener('scroll', function() {
  const element = document.querySelector('#typewriter');
  const position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('typewriter');
  }
});
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

<style scoped>
.ellipse {
  background-image: url("/BikeFestival17th-Frontend/home/ellipse.svg");
  width: 103.172px;
  height: 96px;
  flex-shrink: 0;
  overflow: hidden;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.arrow-bounce {
  animation:
    fadeIn 1s ease-out forwards 1.5s,
    bounce 2s infinite 1.5s;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-left-in {
  animation: slideInFromLeft 1.5s ease-out forwards;
}

@keyframes typing {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 270px;
    opacity: 1;
  }
}
@media screen and (max-width: 640px) {
  @keyframes typing {
    from {
      width: 0;
      opacity: 1;
    }
    to {
      width: 220px;
      opacity: 1;
    }
  }
}
@media screen and (min-width: 1280px) {
  @keyframes typing {
    from {
      width: 0;
      opacity: 1;
    }
    to {
      width: 320px;
      opacity: 1;
    }
  }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  border-right: .15em solid orange;
  animation:
    typing 3s steps(30, end) forwards,
    blink-caret .75s infinite;
}

/* carousel style */
.splide__slide {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.splide__slide.is-active {
  opacity: 1;
}
</style>
