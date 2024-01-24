<template>
  <div
    class="w-full lg:h-[40rem] h-[30rem] bg-cover bg-center relative"
    style="background-image: url('/BikeFestival17th-Frontend/home/key-visual.png')"
  ></div>

  <!-- Key Visual Design -->
  <div class="slide-left-in opacity-0 w-full absolute lg:top-70 lg:pl-36 top-40 pl-10 text-white font-black lg:text-5xl text-4xl">
    <h1 class="">成大單車節，</h1>
    <h1 class="mt-3 ">構築屬於你的大學藍圖</h1>
    <h1 class="mt-5 font-normal lg:text-4xl text-2xl">
      2024年3月2~3日 ＠成大光復校區
    </h1>
  </div>
  <div class="arrow-bounce absolute w-full flex justify-center top-[24rem] opacity-0">
    <img class="lg:h-20 h-10" :src="downChevron">
  </div>

  <!-- Story -->
  <div class="sm:flex sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pt-10 bg-primary-50">
    <div class="">
      <h2 class="font-bold text-content xl:text-4xl lg:text-3xl text-2xl md:mb-6 mb-7 sm:p-0 px-7">
        單車故事
      </h2>
      <div id="typewriter" class="pr-6 text-content xl:text-2xl lg:text-base text-sm">
        <p>成大單車節，致力於弭平高中與大學端之資訊落差。</p>
        <p>我們創造對話的平台，讓身處第一線戰場的大學生，</p>
        <p>分享屬於我們的故事，激盪出的火花與羈絆，將是你</p>
        <p>們勇敢前行的最佳後盾。</p>
        <p>今年三月二號、三號，一起來到成大單車節，讓我們</p>
        <p>攜手前行，帶你一步步構築屬於自己的大學藍圖。</p>
      </div>
    </div>
    <div class="lg:mt-[64px] mt-12">
      <iframe
        class="lg:w-[432px] lg:h-[237px] md:w-[300px] md:h-[170px] sm:w-[260px] sm:h-40 w-full h-[300px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      >
      </iframe>
      <div class="pt-3 w-full sm:flex sm:justify-center hidden">
        <span class="font-black xl:text-xl text-lg">宣傳短片</span>
      </div>
    </div>
  </div>

  <!-- psychological test -->
  <div class="sm:flex sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pb-10 bg-primary-900">
    <!-- left image container -->
    <div>
      <img
        class="lg:w-[432px] w-80 sm:relative hidden"
        alt="psychological-test"
        src="https://fakeimg.pl/432x237"
      />
      <!-- desktop button link -->
      <div class="sm:mt-10 w-full sm:flex sm:justify-center hidden">
        <RouterLink to="#" class="flex lg:w-40 lg:h-16 lg:p-0 px-6 py-3 justify-center bg-white rounded-lg">
          <div class="flex flex-col justify-center">
            <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
          </div>
        </RouterLink>
      </div>
    </div>
    <!-- right content container -->
    <div class="relative sm:p-0 py-10 sm:overflow-visible overflow-hidden">
      <h2
        class="mb-10 font-bold text-white xl:text-4xl lg:text-3xl text-2xl sm:p-0 px-7"
      >
        測驗 - 你是哪一種動物？
      </h2>
      <!-- ellipse on right container -->
      <div
        class="absolute ellipse xl:-translate-x-[50px] xl:translate-y-[60px] -translate-x-[20px] translate-y-[-20px] xl:left-0 left-[1/5]"
      ></div>

      <div
        class="absolute ellipse xl:translate-x-[510px] xl:-translate-y-[30px] translate-x-[300px] -translate-y-[0px]"
      ></div>

      <div
        class="absolute ellipse xl:translate-x-[280px] xl:translate-y-[170px] translate-x-[80px] translate-y-[90px] xl:left-0 left-[1/5]"
      ></div>
      <div class="opacity-95 text-white xl:text-2xl lg:text-base text-sm">
        <!-- https://stackoverflow.com/questions/50530436/how-to-keep-a-transformed-element-behind-another-element -->
        <div class="*:w-max w-max sm:m-0 mx-auto">
          <p>猶記得高三那年，一出學測考場，人生頓失方向。該</p>
          <p>讀哪間學校、報什麼學系？此起彼落的疑問，成了每</p>
          <p>個考生心中的困擾，也迴盪在每次與父母、導師的談</p>
          <p>話間。不管閱覽了多少網路資料，你仍然躊躇不前，</p>
          <p>甚至更加心焦</p>
          <p>——這樣的選擇是對的嗎？去了那裡會不會後悔？</p>
        </div>
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

  <!-- 7 theme activities -->
  <div
    class="xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pt-10"
  >
    <h2 class="mb-12 font-bold text-content xl:text-4xl lg:text-3xl text-2xl">
      七大主題活動
    </h2>
    <!-- carousel -->
    <div
      class="mx-auto sm:pt-16 sm:px-16 px-10 pb-10 rounded-lg border-2 border-content max-w-[1110px]"
    >
      <div class="w-full text-center mb-6">
        <h2 class="font-bold text-black xl:text-4xl lg:text-3xl text-2xl">
          活動標題
        </h2>
      </div>
    </div>
  </div>

  <!-- column articles -->
  <div
    class="sm:flex sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pt-10"
  >
    <h2 class="mb-12 font-bold text-content xl:text-4xl lg:text-3xl text-2xl">
      專欄文章
    </h2>
  </div>

  <!-- souvenir -->
  <div
    class="sm:flex sm:justify-evenly xl:px-36 xl:py-24 lg:px-20 lg:py-20 md:px-14 md:py-16 sm:py-10 sm:px-10 pt-10 pb-12 px-8 bg-primary-900"
  >
    <div class="text-white xl:text-2xl lg:text-base text-sm">
      <h2
        class="font-bold text-white xl:text-4xl lg:text-3xl text-2xl lg:mb-12 sm:mb-10 mb-7"
      >
        紀念品小舖
      </h2>
      <div class="*:w-max w-max sm:m-0 mx-auto sm:m-0 mb-6">
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <RouterLink
        class="flex w-24 h-10 justify-center bg-white rounded-lg mt-7 sm:visible hidden"
        to="#"
      >
        <div class="flex flex-col justify-center">
          <span class="block text-primary-900 font-medium"> 前往購買 </span>
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
  <!-- partners -->
  <div class="sm:px-36 sm:pt-20 sm:pb-48 pt-10 pb-12 px-8">
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

  <!-- footer -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import downChevron from '@/assets/down-chevron.svg';

document.addEventListener('scroll', function() {
  const element = document.querySelector('#typewriter');
  console.log(element);
  const position = element.getBoundingClientRect();
  console.log(position);

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
    width: 100%;
    opacity: 1;
  }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

@keyframes fadeOutCursor {
  to { border-color: transparent; }
}

.typewriter p{
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  border-right: .15em solid orange;
  animation:
    typing 2s steps(30, end) forwards,
    blink-caret .75s step-end infinite,
    fadeOutCursor 1s forwards 2s;
}

.typewriter p:nth-child(1) { animation-delay: 0s, 0s, 2s; }
.typewriter p:nth-child(2) { animation-delay: 2s, 2s, 4s; }
.typewriter p:nth-child(3) { animation-delay: 4s, 4s, 6s; }
.typewriter p:nth-child(4) { animation-delay: 6s, 6s, 8s; }
.typewriter p:nth-child(5) { animation-delay: 8s, 8s, 10s; }
.typewriter p:nth-child(6) { animation-delay: 10s, 10s, 12s; }

</style>
