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
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      >
      </iframe>
      <span class="font-black xl:text-xl text-lg">宣傳短片</span>
    </div>
  </div>

  <!-- psychological test -->
  <div class="flex md:flex-row flex-col sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pb-10 bg-primary-900">
    <!-- left image container -->
    <div class="flex-1 flex flex-col items-center lg:pt-0 pt-5">
      <img
        class="lg:w-96 w-80"
        alt="psychological-test"
        src="https://fakeimg.pl/300x200"
      />
      <!-- desktop button link -->
      <div class="sm:mt-4 w-full sm:flex sm:justify-center hidden">
        <RouterLink to="#" class="flex lg:w-40 lg:h-16 lg:p-0 px-6 py-3 justify-center bg-white rounded-lg">
          <div class="flex flex-col justify-center">
            <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- right content container -->
    <div class="flex-1 relative px-[2rem] sm:p-0 py-10 sm:overflow-visible overflow-hidden">
      <h2 class="mb-10 font-bold text-white xl:text-4xl lg:text-3xl text-2xl">
        測驗 - 你是哪一種車車？
      </h2>
      <!-- ellipse on right container -->
      <div class="absolute ellipse xl:-translate-x-[50px] xl:translate-y-[60px] -translate-x-[20px] translate-y-[-20px] xl:left-0 left-[1/5]"></div>
      <div class="absolute ellipse xl:translate-x-[510px] xl:-translate-y-[30px] translate-x-[300px] -translate-y-[0px]"></div>
      <div class="absolute ellipse xl:translate-x-[280px] xl:translate-y-[170px] translate-x-[80px] translate-y-[90px] xl:left-0 left-[1/5]"></div>
      <div class="opacity-95 text-white xl:text-2xl lg:text-base text-sm">
        <!-- https://stackoverflow.com/questions/50530436/how-to-keep-a-transformed-element-behind-another-element -->
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

    <!-- mobile button link -->
    <div class="sm:hidden w-full flex justify-center opacity-[99%]">
      <RouterLink class="flex justify-center bg-white rounded-lg w-80 h-12" to="#">
        <div class="flex flex-col justify-center">
          <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
        </div>
      </RouterLink>
    </div>
  </div>

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
  <div class="layout_content flex flex-col md:my-20 my-10">
    <h2 class="mb-12 font-bold text-content xl:text-4xl lg:text-3xl text-2xl">專欄文章</h2>
    <div class="flex gap-5 md:flex-row flex-col items-center justify-between">
      <DiscCard
        class="max-sm:hidden max-sm:first:block"
        title="真假新聞分不清？不私藏網路新聞指南！"
        class_="自學力"
        timestamp="2023-12-28"
        context="在這個資訊量龐大、訊息流通快速的世界，你是否曾經懷疑網路新聞的真實性？，是否曾被假新聞騙得團團轉？，這篇貼文直接報給你最實用的網路新聞指南！"
        title-size="text-base"
        link="/forum/featuredArticles/selfLearning_1"
      />
      <DiscCard
        class="max-sm:hidden max-sm:first:block"
        title="真假新聞分不清？不私藏網路新聞指南！"
        class_="自學力"
        timestamp="2023-12-28"
        context="在這個資訊量龐大、訊息流通快速的世界，你是否曾經懷疑網路新聞的真實性？，是否曾被假新聞騙得團團轉？，這篇貼文直接報給你最實用的網路新聞指南！"
        title-size="text-base"
        link="/forum/featuredArticles/selfLearning_1"
      />
      <DiscCard
        class="max-sm:hidden max-sm:first:block"
        title="真假新聞分不清？不私藏網路新聞指南！"
        class_="自學力"
        timestamp="2023-12-28"
        context="在這個資訊量龐大、訊息流通快速的世界，你是否曾經懷疑網路新聞的真實性？，是否曾被假新聞騙得團團轉？，這篇貼文直接報給你最實用的網路新聞指南！"
        title-size="text-base"
        link="/forum/featuredArticles/selfLearning_1"
      />
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
        class="lg:flex w-24 h-10 justify-center bg-white rounded-lg mt-7 sm:visible hidden"
        to="#"
      >
        <div class="flex flex-col justify-center">
          <span class="block text-primary-900 font-medium"> 商品介紹 </span>
        </div>
      </RouterLink>
    </div>
    <div
      class="grid gap-x-8 gap-y-4 sm:grid-cols-3 grid-cols-2 *:mx-auto *:block sm:*:w-48 *:w-40"
    >
      <img src="https://fakeimg.pl/200x200" />
      <img src="https://fakeimg.pl/200x200" />
      <img src="https://fakeimg.pl/200x200" />
      <img src="https://fakeimg.pl/200x200" />
      <img src="https://fakeimg.pl/200x200" />
      <img src="https://fakeimg.pl/200x200" />
    </div>
  </div>

  <!-- partners -->
  <div class="layout_content py-20">
    <div class="w-full text-center">
      <p class="text-black font-black xl:text-4xl lg:text-3xl text-2xl">贊助廠商</p>
      <p class="text-black mt-3 font-medium xl:text-xl text-lg">依照中英文筆畫順序排列</p>
    </div>
    <div class="w-full flex justify-center">
      <div
        class="max-w-[1200px] mt-11 grid justify-center gap-x-8 gap-y-10 sm:grid-cols-5 grid-cols-2 *:mx-auto *:block sm:*:w-48 *:w-40"
        grid gap-x-8 gap-y-4 sm:grid-cols-3 grid-cols-2
      >
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
        <img  src="https://fakeimg.pl/200x200" />
      </div>
    </div>
  </div>

  <!-- line official account -->
  <div class="layout_content py-20 flex lg:flex-row flex-col justify-center lg:gap-20 gap-10">
    <img src="/home/line.png" alt="line" width="200">
    <div>
      <h1 class="mb-5 lg:text-5xl text-3xl font-bold">加入LINE官方帳號，</h1>
      <h1 class="mb-10 lg:text-5xl text-3xl font-bold">活動通知不漏接！</h1>
      <a href="https://lin.ee/7Y8Zdu0" class="px-4 py-2 bg-[#00CB42] hover:bg-[#00B23A] text-white text-xl rounded-lg transition-all ease-in ">加入好友</a>
    </div>
  </div>

  <!-- key visual bottom -->
  <div class="w-full sm:visible hidden">
    <div
      class="w-full h-[900px] bg-cover bg-center relative"
      style="background-image: url('/BikeFestival17th-Frontend/home/key-visual-bottom.png')"
    ></div>
    <div class="absolute -translate-y-80 left-1/2 -translate-x-1/2">
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
