<template>
  <img alt="main-page" src="/home/key-visual.png" />

  <!-- Key Visual Design -->
  <div class="absolute top-80 left-36">
    <h1 class="title-spacing text-white font-black text-5xl">成大單車節，</h1>
    <h1 class="mt-3 subtitle-spacing text-white font-black text-5xl">
      牽起你與科系的橋樑
    </h1>
    <h1 class="mt-5 text-white font-normal text-4xl">
      2024年3月2~3日 ＠成大光復校區
    </h1>
  </div>

  <!-- Story -->
  <div class="flex justify-between px-36 py-24 bg-primary-50">
    <div class="story-content-container">
      <h2 class="mb-6 font-bold text-content text-4xl">單車故事</h2>
      <div>
        <p>／ 單車十七 夢想前行／</p>
        <p>你的人生，應被勇敢照亮。</p>
        <p>美好時光，指引夢想前行。</p>
        <p>​獻給──</p>
        <p>在升學道路上迷惘的你；</p>
        <p>在追夢旅程中躊躇的你。</p>
        <br />
        <p>成大單車節期待為你提供更多可能性，</p>
        <p>​突破困境，聆聽內心，尋覓所愛。</p>
        <br />
        <p>／ 2 0 2 4 春天， 一起在單車節找到心之所向。／​​</p>
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="432"
        height="237"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      >
      </iframe>
      <div class="pt-3 w-full flex justify-center">
        <span class="font-black text-xl">宣傳短片</span>
      </div>
    </div>
  </div>

  <!-- psychological test -->
  <div
    class="psychological-test flex justify-between bg-primary-900 px-36 py-28"
  >
    <!-- left image container -->
    <div>
      <img alt="psychological-test" src="https://fakeimg.pl/432x237" />
      <div class="mt-10 w-full flex justify-center">
        <a class="flex w-40 h-16 justify-center bg-white rounded-lg">
          <div class="flex flex-col justify-center">
            <span class="block text-primary-900 font-bold"> 即刻遊玩 </span>
          </div>
        </a>
      </div>
    </div>
    <!-- right content container -->
    <div>
      <h2 class="mb-6 font-bold text-white text-4xl">
        測驗 - 你是哪一種動物？
      </h2>
      <!-- ellipse on right container -->
      <div class="absolute ellipse ellipse-container-1">
      </div>

      <div class="absolute ellipse ellipse-container-2">
      </div>

      <div class="absolute ellipse ellipse-container-3">
      </div>
      <div class="  opacity-95">
        <!-- https://stackoverflow.com/questions/50530436/how-to-keep-a-transformed-element-behind-another-element -->
        <p>猶記得高三那年，一出學測考場，人生頓失方向。該</p>
        <p>讀哪間學校、報什麼學系？此起彼落的疑問，成了每</p>
        <p>個考生心中的困擾，也迴盪在每次與父母、導師的談</p>
        <p>話間。不管閱覽了多少網路資料，你仍然躊躇不前，</p>
        <p>甚至更加心焦</p>
        <p>——這樣的選擇是對的嗎？去了那裡會不會後悔？</p>
      </div>
    </div>
  </div>

  <!-- 7 theme activities -->
  <div class=" px-36 py-24">
    <h2 class="mb-12 font-bold text-content text-4xl">七大主題活動</h2>
    <!-- carousel -->
    <div class="mx-12 pt-16 px-16 pb-10 rounded-lg border-2 border-content">
      <div class="w-full text-center mb-6">
        <h2 class="font-bold text-black text-4xl">活動標題</h2>
      </div>
    </div>
  </div>
  
  <!-- column articles -->
  <div class=" px-36 py-24">
    <h2 class="mb-12 font-bold text-content text-4xl">專欄文章</h2>\
    
  </div>

  <!-- souvenir -->

  <!-- key visual bottom -->

  <!-- partners -->

  <!-- footer -->
</template>

<script setup></script>

<style scoped>
.title-spacing {
  letter-spacing: 4.8px;
}

.story-content-container > div > p {
  color: var(--Content, #404040);
  font-family: Noto Sans TC;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
}

.subtitle-spacing {
  letter-spacing: 3.2px;
}

.video-container {
  margin-top: 64px;
}

.psychological-test > div > div > p {
  color: #fff;
  font-family: Noto Sans TC;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
}

.ellipse{
  background-image: url("/home/ellipse.svg");
  width: 103.172px;
  height: 96px;
  flex-shrink: 0;
}
.ellipse-container-1 {
  transform: translateX(-50px) translateY(60px);
}

.ellipse-container-2 {
  transform: translateX(510px) translateY(-30px);
}

.ellipse-container-3 {
  transform: translateX(280px) translateY(170px);
}
</style>
