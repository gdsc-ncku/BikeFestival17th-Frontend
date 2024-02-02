<template>
  <Breadcrumb />
  <div class="layout_content flex flex-col lg:gap-20 gap-3 mb-20">
    <div v-for="d in data" class="flex lg:flex-row flex-col sm:gap-20 gap-3 items-center">
      <RouterLink :to="d.link">
        <img :src="d.imgLink" class="lg:w-[376px] lg:h-[222px] w-[300px] h-[200px] rounded-lg" >
      </RouterLink>
      <div class="w-full flex flex-col sm:gap-4 gap-[0.38rem] flex-1">
        <RouterLink class="sm:text-4xl text-xl font-bold underline underline-offset-2" :to="d.link">
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
    name: "科系手冊",
    context: "收錄成功大學所有院系之概覽、課程、特色介紹、迷思破解，以及 108 課綱相關解說。",
    link: "/forum/departmentHandbook",
    imgLink: "forum_page/DepartmentHandbook.webp",
  },
  {
    name: "專欄文章",
    context: "從自學小撇步、大學攻略、超實用技能、考試備戰到生活小知識（懂生活），收攬著我們的多元主題的專欄文章。",
    link: "/forum/featuredArticles",
    imgLink: "forum_page/FeaturedArticles.webp",
  },
  {
    name: "給高中生的一封信",
    context: "透過在職人士及畢業校友分享現職工作情況、所需技能，以及十年間心路歷程，讓對產業、未來職涯感到迷茫的高中生有所啟發。",
    link: "/forum/letterToHighSchoolStudents",
    imgLink: "forum_page/LetterToHighSchoolStudents.webp",
  },
]
</script>