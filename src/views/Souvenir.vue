<template>
  <div class="h-20"></div>
  <div class="pt-20 pb-10 sm:px-[8.26rem] px-10 flex flex-col gap-5">
    <h1 class="mb-4 text-content font-bold text-center sm:text-5xl text-[2rem]">單車節限定紀念品</h1>
    <div class="w-full flex flex-col justify-center gap-12">
      <div v-for="(item, item_id) in data" class="w-full">
        <div class="text-center text-bold mb-3">
          <span class="text-2xl text-content">{{ item.name }}  </span>
          <span class="text-lg text-primary">{{ item.price }}</span>
        </div>
        <div class="text-center text-md text-bold mb-3 text-content">{{ item.designConcept }}</div>
        <div class="text-xs text-center my-2">{{ item.context }}</div>
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
    price: "$80/個",
    designConcept: "徽章可以放在背包上，代表你是一個單車迷。",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_1.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_7.jpg"
    ],
    designConcept: "設計理念",
    context: "徽章可以放在背包上，代表你是一個單車迷。",
  },
  {
    name: "毛巾",
    price: "$250/條",
    designConcept: "單車節迄今已舉辦十七屆，對我們來說，屬於成大的特別祭典，在炎熱的台南城市，拿著毛巾，擦拭青春的汗水吧！",
    img: [
      "/BikeFestival17th-Frontend/souvenir/Bike17_towel.png",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_9.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_10.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_11.jpg",
    ],
    designConcept: "設計理念",
    context: "單車節迄今已舉辦十七屆，對我們來說，屬於成大的特別祭典，在炎熱的台南城市，拿著毛巾，擦拭青春的汗水吧！",
  },
  {
    name: "御守",
    price: "$120/個",
    designConcept: "設計理念",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_2.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_3.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_12.jpg",
    ],
    designConcept: "設計理念",
    context: "成大單車節學業順利御守，帶著滿滿的祝福，祝福你能夠順利考上理想校系！",
  },
  {
    name: "飲料提袋",
    price: "$50/個",
    designConcept: "台南常被戲稱為全糖城市，在全糖城市，就該喝上一杯手搖飲料，拿著單車節去買飲料沒有打折，但很時尚。",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_4.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_5.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_6.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_8.jpg"
    ],
    designConcept: "設計理念",
    context: "台南常被戲稱為全糖城市，在全糖城市，就該喝上一杯手搖飲料，拿著單車節去買飲料沒有打折，但很時尚。",
  },
  {
    name: "紋身貼紙",
    price: "小張 $5，大張 $60",
    img: [
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_13.jpg",
      "/BikeFestival17th-Frontend/souvenir/LINE_ALBUM_紀念品_240223_14.jpg"
    ],
    designConcept: "設計理念",
    context: "以街頭塗鴉為發想元素，體現出單車節的詼諧感。",
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
