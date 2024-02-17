<template>
  <!--background shadow-->
  <div class="fixed inset-0 bg-black opacity-50 z-40"></div>
  <!-- hint box -->
  <div class="lg:w-[470px] w-full h-[180px] fixed lg:bottom-64 lg:right-8 bottom-0 right-0 bg-white z-50 lg:rounded-2xl rounded-t-2xl p-7">
    <div class="flex flex-col justify-between">
      <div class="flex justify-between items-baseline">
        <h3 class="text-primary text-2xl font-bold">{{ hints[step].title }}</h3>
        <button @click="emit('close-tutorial')"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M18.8235 21.2966L25.0331 27.5063V29.1427H23.3966L17.187 22.9331L10.9773 29.1427H9.34082V27.5063L15.5505 21.2966L9.34082 15.0869V13.4504H10.9773L17.187 19.6601L23.3966 13.4504H25.0331V15.0869L18.8235 21.2966Z" fill="#404040"/>
          </svg>
        </button>
      </div>
      <div class="flex justify-between items-end">
        <div v-html="hints[step].content" class="w-[290px] flex items-center flex-wrap justify-start"></div>
        <button v-if="step < 3" @click="NextStep()" class="w-[155px] bg-primary text-white text-xl rounded-3xl px-7 py-3">下一步</button>
        <button v-if="step === 3" @click="emit('close-tutorial')" class="w-[160px] bg-primary text-white text-xl rounded-3xl px-7 py-3">完成</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(0);
const hints = ref([
  {
    title: "使用教學(1/4)",
    content: "點擊<b>活動</b>查看詳細資訊"
  },
  {
    title: "使用教學(2/4)",
    content: '點擊<svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M12 15L7 12.82L2 15V2H12M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18L7 15L14 18V2C14 0.89 13.1 0 12 0Z" fill="#FF7B1A"/></svg>收藏行程後，可在<b>我的行程</b>查看已經收藏的行程。'
  },
  {
    title: "使用教學(3/4)",
    content: "加入<a href='https://lin.ee/7Y8Zdu0' target='_blank' class='underline'>官方LINE帳號</a>，並登入綁定行程，訊息、行程不漏接。"
  },
  {
    title: "使用教學(4/4)",
    content: '點擊<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1L8 5H11V14H13V5H16M18 23H6C4.89 23 4 22.1 4 21V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H9V9H6V21H18V9H15V7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z" fill="#404040"/></svg>將官網加入主畫面'
  }
]);

const emit = defineEmits(['next-step', 'close-tutorial'])

function NextStep() {
  step.value = step.value + 1;
  emit('next-step');
}
</script>