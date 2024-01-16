<template>
  <div class="lg:max-w-[1200px] max-w-[360px] mx-auto">
    <div class="bg-white rounded-2xl px-5 py-3 h-fit min-w-[250px] lg:fixed mb-10">
      <h1 class="font-bold text-primary text-2xl mb-5">{{ props.title }}</h1>
      <a @click="setNum(index)" :href="'#item_' + index" v-for="(item, index) in list" :key="index"><h2 class="text-content text-xl mb-5 hover:bg-[#FFE0CA] rounded-lg p-1" :class="num === index ? 'bg-[#FFE0CA]' : ''">{{ item.subtitle }}</h2></a>
    </div>
    <div class="lg:w-3/4 lg:ml-[300px]">
      <div v-for="(item, index) in props.list" :key=index class="text-content text-xl mb-72">
        <h2 :id="'item_' + index" class="text-3xl font-bold mb-5">{{ item.subtitle }}</h2>
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

const props = defineProps({
  title: String,
  list: Array, //subproject list
});

const num = ref(0); //tab target

const setNum = (index) => {
  num.value = index;
}
</script>