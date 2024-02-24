<template>
  <div class="h-20"></div>

  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5">
    <h1 class="mb-4 text-content font-bold text-center sm:text-5xl text-[2rem]">單車節限定紀念品</h1>

    <div class="w-full flex flex-col justify-center gap-12">
      <div v-for="(item, item_id) in data" class="w-full">
        <div class="text-center text-2xl text-bold mb-3 text-content">{{ item.name }}</div>
        <div class="w-full flex flex-wrap justify-center gap-4" :ref="elements[item_id]">
          <img class="rounded-md bg-[#D9D9D9] h-36 w-[11.75rem]" v-for="(link, link_id) in item.img" :src="link">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = [
  {
    name: "徽章",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_1.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_7.jpg"
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "毛巾",
    img: [
      "/BikeFestival17th-Frontend/souvenir/Bike17_towel.png",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_9.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_10.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_11.jpg",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "御守",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_2.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_3.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_12.jpg",
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "飲料提袋",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_4.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_5.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_6.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_8.jpg"
    ],
    designConcept: "設計理念",
    context: "123456 abcde",
  },
  {
    name: "紋身貼紙",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_13.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_14.jpg"
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
