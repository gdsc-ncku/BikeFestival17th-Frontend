<template>
  <div class="shadow-[6px_7px_2px_0px_rgba(0,0,0,0.25)] w-60 py-1 px-2 rounded-lg border-t-2 border-t-primary-900 bg-white">
    <div class="text-2xl p-2 text-primary-900 font-bold">{{ title }}</div>
    <div class="subtitle mx-2 select-none" v-for="subtitleData in list">
      <label class="text-xl font-bold py-2 flex items-center justify-between">
        <span class="cursor-pointer">{{ subtitleData.name }}</span>
        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d="M13 1.5L7 7.5L1 1.5" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input type="checkbox" class="hidden" />
      </label>
      <RouterLink
        v-for="content in subtitleData.content"
        class="text-base p-2 rounded hover:text-primary"
        :to="content.link"
        :data-selected="content.selected"
      >
        {{content.name}}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  list: {
    type: Array,
    default: [
      {
        name: "subtitle",
        content: [
          {
            name: "content",
            link: "",
            selected: false
          }
        ]
      },
    ]
  }
});
</script>

<style scoped>
.subtitle>a {
  display: none;
}
.subtitle:has(input:checked)>a {
  display: block;
}
.subtitle:has(input:checked) label svg {
  transform: scaleY(-1);
}
.subtitle>a[data-selected=true] {
  background-color: #FFE6D4;
}
</style>
