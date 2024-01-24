<template>
  <div class="lg:max-w-[1200px] max-w-[370px] mx-auto">
    <div class="bg-white rounded-2xl px-5 py-3 h-fit min-w-[250px] lg:fixed mb-10">
      <h1 class="font-bold text-primary text-2xl mb-5">{{ props.title }}</h1>
      <a @click="setNum(index)" :href="'#item_' + index" v-for="(item, index) in list" :key="index"><h2 class="text-content text-xl mb-5 hover:bg-[#FFE0CA] rounded-lg p-1" :class="num === index ? 'bg-[#FFE0CA]' : ''">{{ item.subtitle }}</h2></a>
    </div>
    <div class="lg:w-3/4 lg:ml-[300px]">
      <div class="relative w-full lg:h-[400px] h-[200px] mb-5">
        <img :src="img" class="rounded-2xl object-cover w-full mb-[400px] absolute h-full" />
        <div style="border-radius: 16px;
background: linear-gradient(0deg, #404040 0%, rgba(217, 217, 217, 0.00) 100%);" class="absolute z-10 w-full h-full"></div>
        <h1 class="text-white lg:text-5xl text-4xl font-bold absolute z-10 lg:top-80 top-32 lg:right-10 lg:left-auto left-5">{{ props.title }}</h1>
      </div>
      
      <div v-for="(item, index) in props.list" :key=index class="text-content text-xl mb-72">
        <div class="w-fit">
          <h2 :id="'item_' + index" class="text-3xl font-bold block -mb-3">{{ item.subtitle }}</h2>
        <div class="bg-[#FF5C0045] h-6 -mt-10 ml-4 w-full inline-block"></div>
        </div>
        
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