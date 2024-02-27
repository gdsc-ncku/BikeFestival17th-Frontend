<template>
  <Breadcrumb />
  <div class="layout_content">
    <div class="text-4xl font-bold mb-8">給高中生的一封信</div>
    <div v-if="$route.params.letter === undefined" class="my-8 flex flex-wrap justify-between gap-12 items-center sm:flex-row flex-col">
      <Letter v-for="data in letterToHighSchoolStudents" :name="data.author" :link="`letterToHighSchoolStudents/${data.id}`" />
    </div>
    <div v-else>
      <div class="w-full py-12 px-8 bg-white shadow-md mb-16 rounded">
        <div class="font-bold text-3xl text-content mb-8">{{ data.title }}</div>
        <!-- Example Image -->
        <img class="w-[75%] mx-auto my-8" src="/BikeFestival17th-Frontend/forum_page/LetterToHighSchoolStudents.webp">
        <div>// ^ Example Image</div>

        <div class="sm:px-16 text-xl">
          <div class="font-bold my-4">校友背景介紹</div>
          <div class="font-bold my-4">職業現狀</div>
          <div class="font-bold my-4">工作技能</div>
          <div class="font-bold my-4">回首過往心路歷程</div>
          <div class="font-bold my-4">給高中生關於學生時代的建議</div>
        </div>
      </div>
    </div>
    <!-- <WorkInProgress /> -->
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import WorkInProgress from '@/components/WorkInProgress.vue'
import Letter from '../../components/Letter.vue';

import letterToHighSchoolStudents from '../../data/letterToHighSchoolStudents.json';

import { useRoute } from 'vue-router';

const route = useRoute();

const data = letterToHighSchoolStudents.find(
  v => v.id == route.params.letter
);

</script>