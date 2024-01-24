<template>
  <div class="h-20"></div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5">
    <h1 class="text-[#3A3A3A] font-bold text-center sm:text-5xl text-[2rem]">單車節限定紀念品</h1>
    <div class="w-full flex flex-wrap justify-between gap-[3.12rem]">
      <div v-for="(d, di) in data" class="sm:w-[calc(33%_-_2.08rem)] w-[21.375rem] h-[17.625rem]">
        <div class="text-center text-xl text-bold mb-3">{{ d.name }}</div>
        <div class="w-full text-nowrap overflow-x-hidden scroll-smooth" :ref="elements[di]">
          <img class="mx-[0.87rem] rounded-[0.3125rem] bg-[#D9D9D9] h-36 w-[11.75rem] inline cursor-pointer" v-for="(l, li) in d.img" :src="l" @click="change(di, li)()">
        </div>
        <div class="flex w-32 gap-2 mx-auto my-3">
          <div class="p flex-1 h-[0.3125rem] rounded-[0.15625rem] cursor-pointer" v-for="i of 3" :data-select="select[di] === i - 1" @click="change(di, i - 1)()"></div>

          <!-- <div class="p flex-1 h-[0.3125rem] rounded-[0.15625rem] cursor-pointer" :data-select="select[di] === 0" @click="change(di, 0)()"></div>
          <div class="p flex-1 h-[0.3125rem] rounded-[0.15625rem] cursor-pointer" :data-select="select[di] === 1" @click="change(di, 1)()"></div>
          <div class="p flex-1 h-[0.3125rem] rounded-[0.15625rem] cursor-pointer" :data-select="select[di] === 2" @click="change(di, 2)()"></div> -->
        </div>
        <div class="text-primary-900 text-xs text-center my-2">{{ d.designConcept }}</div>
        <div class="text-xs text-center">{{ d.context }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = [
  {
    name: "毛巾",
    img: [
      "",
      "",
      "",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "毛巾",
    img: [
      "",
      "",
      "",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "毛巾",
    img: [
      "",
      "",
      "",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "毛巾",
    img: [
      "",
      "",
      "",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
]
const select = ref(data.map(() => 0));
const elements = data.map(() => ref(null));

const change = (i, j) => () => {
  if (j === undefined) select.value[i] = (select.value[i] + 1) % data[i].img.length;
  else select.value[i] = (j % data[i].img.length + data[i].img.length) % data[i].img.length;
  const elel = elements[i].value;
  if (elel) {
    const ele = elel[0];
    ele.scrollTo(select.value[i] * (ele.scrollWidth - ele.clientWidth) / 2, 0);
  }
  // if (ele) {ele[0].scrollIntoView({behavior: 'smooth'});}
};
const loop = () => setTimeout(() => {
  let i = data.length;
  while (i--) change(i)();
  loop();
}, 5000);
loop();
</script>

<style scoped>
.p {
  background-color: #D9D9D9;
}

.p[data-select=true] {
  background-color: #ADADAD;
}
</style>
