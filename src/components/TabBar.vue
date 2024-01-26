<template>
  <div class="flex lg:my-8 my-4 flex-wrap">
    <div v-for="(tab, index) in props.tabs" :key="index" @click="target = index" class="border-2 border-primary py-3 px-2 rounded-xl text-primary text-xl w-36 mr-8 mb-4" :class="index === target ? 'bg-primary text-white' : ''">
      <RouterLink :to="tab.url" class="flex justify-around items-center" @click="$emit('tab-index', index)"><div v-html="index === target ? tab.icon : tab.icon_orange"></div>{{ tab.title }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: Array,
  currTarget: Number
});

const target = ref(props.currTarget);
</script>