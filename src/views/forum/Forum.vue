<template>
  <Breadcrumb />
  <div class="flex flex-col sm:gap-[4.81rem] gap-[0.62rem] sm:w-[63.875rem] w-[calc(100vw_-_3.2rem)] sm:mx-auto mb-[8.25rem] ml-[3.06rem] mr-auto">
    <div v-for="d in data" class="flex sm:gap-20 gap-3 sm:h-[13.875rem] h-[11.25rem] items-center">
      <img :src="d.imgLink" class="sm:w-[23.5rem] w-[6.875rem] sm:h-[13.875rem] h-[6.5rem] bg-[#ADADAD] sm:rounded-[0.625rem] rounded-[0.3125rem]" >
      <div class="flex flex-col sm:gap-4 gap-[0.38rem] flex-1">
        <div class="sm:hidden text-xs text-primary-900">{{ d.class_ }}</div>
        <RouterLink class="sm:text-4xl text-xl font-bold" :to="d.link">
          {{ d.name }}
        </RouterLink>
        <div class="sm:text-xl text-sm sm:h-[8.25rem] h-[4.4375rem]">{{ d.context }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import { RouterLink } from "vue-router";

const data = [
  {
    class_: "分類",
    name: "科系手冊",
    context: "收錄成功大學所有院系之概覽、課程、特色介紹、迷思破解，以及 108 課綱相關解說。",
    link: "/forum/departmentHandbook",
    imgLink: "",
  },
  {
    class_: "分類",
    name: "專欄文章",
    context: "從自學小撇步、大學攻略、超實用技能、考試備戰到生活小知識（懂生活），收攬著我們的多元主題的專欄文章。",
    link: "/forum/featuredArticles",
    imgLink: "",
  },
  {
    class_: "分類",
    name: "給高中生的一封信",
    context: "透過在職人士及畢業校友分享現職工作情況、所需技能，以及十年間心路歷程，讓對產業、未來職涯感到迷茫的高中生有所啟發。",
    link: "/forum/letterToHighSchoolStudents",
    imgLink: "",
  },
]
</script>