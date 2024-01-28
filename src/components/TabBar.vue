<template>
  <div class="flex lg:my-8 my-4 lg:flex-nowrap flex-wrap items-center">
    <div v-for="(tab, index) in props.tabs" :key="index" @click="target = index" class="mr-8 mb-4" :class="(index === 3 && props.inTutorial === true) ? 'z-50 opacity-100 bg-primary-50 pointer-events-none' : ''">
      <RouterLink :to="tab.url" class="flex justify-around items-center border-2 border-primary py-3 px-2 rounded-xl text-primary text-xl w-36" :class="index === target ? 'bg-primary-900 text-white' : ''"  @click="$emit('tab-index', index)"><div v-html="index === target ? tab.icon : tab.icon_orange"></div>{{ tab.title }}</RouterLink>
    </div>
    <div :class="props.inTutorial === true ? '' : 'hidden'" class="text-content flex items-center z-50 bg-primary-50 opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
      <path d="M52 75.04C44 75.04 36.928 70.944 32.8 64.8C32.896 58.4 45.6 54.88 52 54.88C58.4 54.88 71.104 58.4 71.2 64.8C67.072 70.944 60 75.04 52 75.04ZM52 29.6C54.5461 29.6 56.9879 30.6114 58.7882 32.4118C60.5886 34.2121 61.6 36.6539 61.6 39.2C61.6 41.7461 60.5886 44.1879 58.7882 45.9882C56.9879 47.7886 54.5461 48.8 52 48.8C49.4539 48.8 47.0121 47.7886 45.2118 45.9882C43.4114 44.1879 42.4 41.7461 42.4 39.2C42.4 36.6539 43.4114 34.2121 45.2118 32.4118C47.0121 30.6114 49.4539 29.6 52 29.6ZM52 20C47.7977 20 43.6365 20.8277 39.7541 22.4359C35.8717 24.044 32.3441 26.4011 29.3726 29.3726C23.3714 35.3737 20 43.5131 20 52C20 60.4869 23.3714 68.6263 29.3726 74.6274C32.3441 77.5989 35.8717 79.956 39.7541 81.5641C43.6365 83.1723 47.7977 84 52 84C60.4869 84 68.6263 80.6286 74.6274 74.6274C80.6286 68.6263 84 60.4869 84 52C84 34.304 69.6 20 52 20Z" fill="#404040"/>
    </svg>若要收藏喜歡的行程，請先點擊頭像進行LINE綁定。
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let props = defineProps({
  tabs: Array,
  currTarget: Number,
  inTutorial: {
    type: Boolean,
    default: false
  }
});
console.log(props.inTutorial);
const target = ref(props.currTarget);
</script>