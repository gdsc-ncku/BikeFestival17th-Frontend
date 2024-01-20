<template>
  <div class="lg:max-w-[1200px] max-w-[360px] mx-auto">
    <div class="bg-white rounded-2xl px-5 py-3 h-fit min-w-[250px] lg:fixed mb-10">
      <h1 class="font-bold text-primary text-2xl mb-5">{{ props.title }}</h1>
      <a @click="setNum(index)" :href="'#item_' + index" v-for="(item, index) in list" :key="index"><h2 class="text-content text-xl mb-5 hover:bg-[#FFE0CA] rounded-lg p-1" :class="num === index ? 'bg-[#FFE0CA]' : ''">{{ item.subtitle }}</h2></a>
    </div>
    <div class="lg:w-3/4 lg:ml-[300px]">
      <div class="relative">
        <img :src="img" class="rounded-2xl object-cover max-h-[400px] w-full mb-[400px] absolute z-0" />
        <h1 class="text-white lg:text-5xl text-4xl font-bold absolute z-10 lg:top-80 top-40 lg:right-10 lg:left-auto left-5">{{ props.title }}</h1>
      </div>
      <div class="lg:h-[420px] h-[240px]"></div>
      <div v-for="(item, index) in props.list" :key=index class="text-content text-xl mb-72">
        <h2 :id="'item_' + index" class="text-3xl font-bold mb-5 bg-[#FF5C0045] w-auto inline-block">{{ item.subtitle }}</h2>
        <h3 class="text-2xl font-bold mb-5">活動介紹</h3>
        <div v-html=item.intro class="mb-5"></div>
        <h3 class="text-2xl font-bold mb-5">活動地點</h3>
        <p class="mb-5">{{ item.info }}</p>
        <h3 class="text-2xl font-bold mb-5">報名方式</h3>
        <div v-html=item.register class="mb-5"></div>
        <h3 class="text-2xl font-bold mb-5">相關活動行程</h3>
      </div>
    </div>
  </div>
  
  
</template>

<script setup>
import { ref } from 'vue';
import activities from '../data/activities.json';
const props = defineProps({
  title: String,
  list: Array, //subproject list
  img: String
});

const num = ref(0); //tab target

const setNum = (index) => {
  num.value = index;
}
</script>