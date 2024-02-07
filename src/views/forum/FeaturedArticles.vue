<template>
  <Breadcrumb />
  <div v-if="$route.params.article === undefined" v-for="key in dataKey" class="max-w-[1200px] sm:mx-auto sm:w-[72.815rem] mx-[1.81rem]">
    <div class="sm:pl-[2.31rem] pl-[1.38rem] sm:pb-[0.94rem] pb-2 sm:text-[2.5rem] text-2xl font-bold border-l-[7px] border-l-solid border-l-primary-900">{{
      key }}</div>
    <div class="sm:mt-[4.5rem] sm:mb-[3.37rem] my-4 flex gap-[2.47rem] flex-wrap">
      <DiscCard
        class="sm:block hidden"
        v-for="d in featuredArticles.filter(v => v.category === key)"
        :title="d.title"
        :class_="d.category"
        :timestamp="d.uploadDate"
        :context="d.content"
        title-size="text-base"
        :link="`/forum/featuredArticles/${d.id}`"
      />
      <DiscCard
        class="sm:hidden block"
        v-for="d in featuredArticles.filter(v => v.category === key).slice(0, 3)"
        :title="d.title"
        :class_="d.category"
        :timestamp="d.uploadDate"
        :context="d.content"
        title-size="text-base"
        :link="`/forum/featuredArticles/${d.id}`"
      />
    </div>
    <div v-if="featuredArticles.filter(v => v.category === key).length > 3" class="flex ml-auto items-center justify-end my-4 sm:hidden" v-on:click="() => {open[key] = !open[key]}">
      <svg v-if="open[key]" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M13.7881 23.4291L20.6902 16.5813L13.8424 9.6792L13.7881 23.4291Z" fill="#FF974D"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
        <path d="M9.625 13.75L16.5 20.625L23.375 13.75H9.625Z" fill="#FF974D"/>
      </svg>
      <div class="min-w-[4em] text-xs text-primary-900">{{ open[key] ? "收合" : "更多專欄" }}</div>
    </div>
    <div v-if="open[key]" class="sm:hidden my-4 flex gap-[2.47rem] flex-wrap mb-[1.12rem]">
      <DiscCard
        v-for="d in featuredArticles.filter(v => v.category === key).slice(3)"
        :title="d.title"
        :class_="d.category"
        :timestamp="d.uploadDate"
        :context="d.content"
        title-size="text-base"
        :link="`/forum/featuredArticles/${d.id}`"
      />
    </div>
  </div>

  <!-- 文章內容 -->
  <div v-else class="max-w-[1200px] sm:mx-auto sm:w-[72.815rem] mx-[1.81rem]">
    <div class="flex flex-col gap-4 mb-9">
      <img v-if="selectedData.imageURL.length > 0" :src="selectedData.imageURL[0]" class="w-1/2 rounded-[2.625rem] max-sm:hidden">
      <div class="font-bold text-3xl">{{ selectedData.title }}</div>
      <div class="text-primary-900 text-lg">{{ selectedData.author }}</div>
      <div class="text-primary-900 text-base">{{ `發布於 ${selectedData.uploadDate}` }}</div>
      <div class="text-base whitespace-pre-line text-[#3A3A3A]">{{ selectedData.content }}</div>
      <div class="flex flex-wrap gap-8 lg:flex-row flex-col">
        <ScalableImg class="block lg:w-[calc(25%_-_1.5rem)] w-full" v-for="src in selectedData.imageURL.slice(1)" :src="src" />
        <!-- <label class="block lg:w-[calc(25%_-_1.5rem)] w-full group" v-for="src in selectedData.imageURL.slice(1)">
          <img class="h-full w-full sm:hover:scale-110 group-has-[:checked]:sm:scale-100 cursor-pointer group-has-[:checked]:sm:fixed group-has-[:checked]:sm:h-[80vmin] group-has-[:checked]:sm:w-[80vw] group-has-[:checked]:sm:top-[9rem] group-has-[:checked]:sm:left-[10vw] z-10 object-contain" :src="src">
          <div class="h-screen w-screen group-has-[:checked]:sm:bg-[#3336] fixed top-0 left-0 pointer-events-none" ></div>
          <input type="checkbox" class="hidden" />
        </label> -->
      </div>
    </div>
    <RouterLink class="text-2xl font-bold underline text-primary-900 text-right block ml-auto mt-[2.37rem] mb-[3.44rem]" to="./">回到上一頁</RouterLink>
    <div class="text-5xl font-bold text-center mb-20">更多文章</div>
    <div class="flex mb-40 gap-10 justify-center">
      <DiscCard
        class="max-sm:hidden max-sm:first:block"
        v-for="d in relative"
        :title="d.title"
        :class_="d.category"
        :timestamp="d.uploadDate"
        :context="d.content"
        title-size="text-base"
        :link="`/forum/featuredArticles/${d.id}`"
      />
    </div>
  </div>
</template>

<script setup>
import ScalableImg from '@/components/ScalableImg.Vue';

import Breadcrumb from '@/components/Breadcrumb.vue';
import DiscCard from '../../components/DiscCard.vue';
import featuredArticles from '../../data/featuredArticles.json';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const defaultData = {
  id: "",
  title: "",
  category: "",
  author: "",
  uploadDate: "",
  content: "",
  imageURL: [""]
};
const router = useRoute();
const selectedData = computed(() => (
  router.params.article === undefined ? defaultData : featuredArticles.find(v => v.id === router.params.article)
));

const relative = computed(() => {
  let same = featuredArticles.filter(v => v.category === selectedData.value.category);
  if (same.length <= 3) return same;
  same = same.filter(v => v.id != selectedData.value.id);
  same.sort(() => Math.random());
  return same.slice(0, 3);
});

const dataKey = new Set(featuredArticles.map(v => v.category));
const open = ref(Object.fromEntries(Array.from(dataKey).map(v => [v, false])));
</script>
